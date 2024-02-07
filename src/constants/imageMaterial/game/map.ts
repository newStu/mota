import { getIconUrl } from "@/assets/base";
import { MapTiles } from "../../id";

function getMapIcon(name: string) {
  return getIconUrl("game/map", name);
}

export const MapGameTilesImage: { [key in MapTiles]: string } = {
  [MapTiles.WALL]: getMapIcon("wall"),
  [MapTiles.WALL_1]: getMapIcon("wall_1"),
  [MapTiles.MAGMA]: getMapIcon("star_magma_sea"),
  [MapTiles.STAR]: getMapIcon("star_magma_sea"),
  [MapTiles.ROAD]: getMapIcon("road"),
  [MapTiles.DOOR_BLUE]: getMapIcon("door"),
  [MapTiles.DOOR_RED]: getMapIcon("door"),
  [MapTiles.DOOR_YELLOW]: getMapIcon("door"),
  [MapTiles.STAIRCASE_DOWN]: getMapIcon("staircase_down"),
  [MapTiles.STAIRCASE_UP]: getMapIcon("staircase_up"),
  [MapTiles.SHOPPING_MIN]: getMapIcon("shopping"),
  [MapTiles.SHOPPING]: getMapIcon("shopping"),
  [MapTiles.DOOR_SPECIAL]: getMapIcon("door_special"),
  [MapTiles.DOOR_IRON_GATE]: getMapIcon("door_iron_gate"),
};
