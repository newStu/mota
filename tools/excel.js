/**
 * substituteKey: 备用key，当key没有内容的时候使用该列作为key值
 */
import Excel from "exceljs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const params = {};
process.argv.slice(2).forEach((item) => {
  const [key, value] = item.split("=");
  const realKey = key.split("--")[1] || key;
  params[realKey] = value;
});

const { substituteKey = "key" } = params;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workbook = new Excel.Workbook();
const pathInfo = path.resolve(__dirname, "../data");

function dealWithTitle(worksheet) {
  const row = worksheet.getRow(1);
  // 数据保存位置
  const translateMap = {};
  // key保存位置
  const indexToTranslate = {};
  row.eachCell((item, index) => {
    if (index > 1) {
      let value = item.value;
      indexToTranslate[index] = value;
    }
  });

  return [translateMap, indexToTranslate];
}

async function excelToMap() {
  await workbook.xlsx.readFile(`${pathInfo}/index.xlsx`);
  const worksheet = workbook.getWorksheet(1);
  const rowCount = worksheet.rowCount;

  const [translateMap, indexToTranslate, translateToIndex] =
    dealWithTitle(worksheet);

  for (let index = 2; index <= rowCount; index++) {
    const row = worksheet.getRow(index);

    let key = null;
    row.eachCell((item, i) => {
      if (i === 0) return;
      if (i === 1) {
        // 获取key值
        key = item.value;
      } else {
        if (!Boolean(key)) {
          key = row.getCell(Number(translateToIndex[substituteKey])).value;
        }
        // 使用index获取key值
        const translateKey = indexToTranslate[i];

        if (!translateMap[key]) {
          translateMap[key] = {};
        }
        // 将值赋值写入对象
        translateMap[key] = {
          ...translateMap[key],
          [translateKey]: item.value,
        };
      }
    });
  }
  return translateMap;
}

function createFiles(translateMap) {
  fs.writeFile(
    `${pathInfo}/role.json`,
    JSON.stringify(translateMap),
    function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("role.json 已生成");
      }
    }
  );
}

async function init() {
  const translateMap = await excelToMap();
  createFiles(translateMap);
}

init();
