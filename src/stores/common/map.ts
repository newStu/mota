import { MapTiles } from "@/constants";
import type { PositionType } from "@/typings/constants";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useMapStore = defineStore("edit-map-store", () => {
  const row = ref(11);
  const col = ref(11);

  let map = reactive<MapTiles[][]>([]);

  function initMap(_row?: number, _col?: number) {
    if (_row) row.value = _row;
    if (_col) col.value = _col;
    map.splice(0, map.length);
    for (let index = 0; index < row.value; index++) {
      let rowItem = [];
      for (let index = 0; index < col.value; index++) {
        rowItem.push(MapTiles.ROAD);
      }
      map.push(rowItem);
    }
  }

  function updateMapRow() {
    const oldRow = map.length;
    const rowUpdate = oldRow - row.value;
    if (rowUpdate === 0) return;
    const updateValue = Math.abs(rowUpdate);
    // 减少
    if (rowUpdate > 0) {
      map.splice(oldRow - updateValue, oldRow);
    } else {
      const col = map[0]?.length;
      for (let i = 0; i < updateValue; i++) {
        map.push(new Array(col).fill(MapTiles.ROAD));
      }
    }
  }

  function updateMapCol() {
    const oldCol = map[0]?.length;
    const colUpdate = oldCol - col.value;
    if (colUpdate === 0) return;
    const updateValue = Math.abs(colUpdate) || 0;
    // 减少
    if (colUpdate > 0) {
      map.forEach((item) => {
        item.splice(oldCol - updateValue, oldCol);
      });
    } else {
      const addList = new Array(updateValue).fill(
        MapTiles.ROAD
      ) as Array<MapTiles>;
      map.forEach((item) => {
        item.push(...addList);
      });
    }
  }

  function setRow(_row: number) {
    row.value = _row;
  }

  function setCol(_col: number) {
    col.value = _col;
  }

  function isInnerMap(position: PositionType) {
    return !(
      position.y > row.value - 1 ||
      position.x > col.value - 1 ||
      position.x < 0 ||
      position.y < 0
    );
  }

  return {
    map,
    row,
    col,
    initMap,
    setCol,
    setRow,
    updateMapRow,
    updateMapCol,
    isInnerMap,
  };
});
