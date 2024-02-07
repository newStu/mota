import type { IDType } from "@/typings/constants";
import { MapTilesImage } from "./icon/map";
import { RoleTilesImage } from "./icon/role";
import { PropTilesImage } from "./icon/prop";
import { NPCTilesImage } from "./icon/npc";

import { MapGameTilesImage } from "./game/map";
import { RoleGameTilesImage } from "./game/role";
import { NPCGameTilesImage } from "./game/npc";

export const TilesImage: { [key in IDType]: string } = {
  ...MapTilesImage,
  ...RoleTilesImage,
  ...PropTilesImage,
  ...NPCTilesImage,
};

// 道具不动，暂时使用icon的同一套
export const GameTilesImage: { [key in IDType]: string } = {
  ...MapGameTilesImage,
  ...RoleGameTilesImage,
  ...PropTilesImage,
  ...NPCGameTilesImage,
};
