import { DoorTiles } from "./map_prop";

export type KeyChain = {
  [key in DoorTiles]?: number;
};

export interface PropProperty {
  Name: string;
  HP?: number;
  ATK?: number;
  DEF?: number;
  [PropTiles.KEY_BLUE]?: number;
  [PropTiles.KEY_RED]?: number;
  [PropTiles.KEY_YELLOW]?: number;
  Gold?: number;
  Level?: number;
  _hasBook?: boolean;
  _hasCompass?: boolean;
  _hasPickaxe?: boolean;
  _hasCross?: boolean;
}

export enum PropTiles {
  GEMSTONE_RED = "PG1",
  GEMSTONE_BLUE = "PG2",
  GEMSTONE_GREEN = "PG3",
  KEY_RED = "PK" + DoorTiles.RED,
  KEY_BLUE = "PK" + DoorTiles.BLUE,
  KEY_YELLOW = "PK" + DoorTiles.YELLOW,
  KEY_BAG = "PKB1",
  DRUG_MINI = "PD1",
  DRUG = "PD2",
  DRUG_MIDDLE = "PD3",
  DRUG_MAX = "PD4",
  BOOK = "PBOOK",
  COMPASS = "PCOMPASS",
  SWORD = "PSD1",
  SWORD_BIG = "PSDB1",
  SWORD_GOD = "PSDG1",
  SHIELD = "PSED1",
  SHIELD_BIG = "PSEDB2",
  SHIELD_GOD = "PSEDG3",
  COIN_GOLD = "PCG1",
  COIN_SILVER = "PCS1",
  LEVEL_1 = "PLV1",
  LEVEL_2 = "PLV2",
  LEVEL_3 = "PLV3",
  PICKAXE = "PPX1",
  CROSS = "PROSS1",
}
