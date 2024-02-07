const imageTypes = [".svg", ".png", "jpg", ".gif", ".webp"];

const getIconListMap = () => {
  const files = import.meta.glob("./**/*");

  const svgs: { [key: string]: { [key: string]: any } } = {};
  for (const key in files) {
    const iconInfo = key.split("/");
    iconInfo.splice(0, 1);
    const fileName = iconInfo.pop() || "undefined";
    const fileFolder = iconInfo.join("/");
    if (!fileFolder) {
      continue;
    }
    if (!svgs[fileFolder]) {
      svgs[fileFolder] = {};
    }
    // https://cn.vitejs.dev/guide/assets.html
    svgs[fileFolder][fileName] = new URL(
      `./${fileFolder}/${fileName}`,
      import.meta.url
    ).href;
  }

  return svgs;
};
export const svgs = getIconListMap();

/**
 * 获取图片地址
 * @param folder  文件夹名称
 * @param name    图片名称
 * @returns       图片地址
 */
export const getIconUrl = (folder: string, name: string = "index") => {
  let iconUrl = "";
  imageTypes.some((suffix: string) => {
    let iconName = name + suffix;
    iconUrl = svgs[folder][iconName];
    return iconUrl;
  });
  return iconUrl;
};
