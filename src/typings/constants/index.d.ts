import type { PropTiles, MapTiles, RoleTiles, NPCTiles } from "@/constants";

export type IDType = MapTiles | RoleTiles | PropTiles | NPCTiles;

export type PositionType = {
  x: number;
  y: number;
};

export type SelectRenderType = Array<{
  text: string;
  list: Array<{ id: IDType; Element: any }>;
}>;

export type GameLevelType = {
  map: { col: number; row: number };
  renderList: CommonProperty[];
  hero: { x: number; y: number };
  forwardMap?: ForwardPositionType;
};

export type LevelListType = { [key: number]: GameLevelType };

export type TotalGameLevelType = {
  hero: Hero;
  levelList: LevelListType;
};

export interface CommonProperty {
  id?: IDType;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface RoleProperty extends CommonProperty {
  Name: string;
  HP: number;
  XP: number;
  DEF: number;
  ATK: number;
  MP: number;
  Gold: number;
}

export interface NPCProperty extends CommonProperty {
  Name: string;
}

export interface HeroProperty extends RoleProperty {
  _hasCompass?: boolean;
  _level?: number;
  _hasBook?: boolean;
  _hasIcebreakerScript?: boolean;
  _hasBrickBreaker?: boolean;
  _key?: KeyChain;
}

export type TalkInitType = {
  talk: Array<{ id: IDType; text: string }>;
  talkName: { [key: IDType]: string };
  callback?: () => void;
};

export interface CommonFuncMap {
  openMinExpStore: () => void;
  openExpStore: () => void;
  openMinGoldStore: () => void;
  openGoldStore: () => void;
  openKeyStore: () => void;
  nextLevels: () => void;
  prevLevels: () => void;
  initATalkDialog: (value: TalkInitType) => void;
  message: (text: string) => void;
  removeElement: () => void;
}

export type ExecuteReturnType = { flag: boolean; isFight?: boolean } | void;

export type OneElementType = {
  hero: PositionType;
  oneElements: CommonProperty[];
};

export type SpiritTalk = "begin" | "end" | "progress";

export type RenderResult =
  | {
      element?: CommonProperty;
      forwardPosition: Array<PositionType>;
      deleteForwardPosition?: Array<PositionType>;
    }
  | CommonProperty
  | undefined;

export type ForwardPositionType = { [key: string]: PositionType };

export type MoveDirectionType = "up" | "down" | "left" | "right";
