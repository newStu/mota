import {
  RoleTiles,
  type KeyChain,
  DoorTiles,
  HeroNumerical,
} from "@/constants";
import { Role } from "./role";
import type {
  HeroProperty,
  MoveDirectionType,
  OneElementType,
  PositionType,
  SpiritTalk,
} from "@/typings/constants";
import { hasIn } from "lodash";

const positionYMap: { [key in MoveDirectionType]: number } = {
  up: 3,
  down: 0,
  left: 1,
  right: 2,
};
export class Hero extends Role {
  private _level: number = 1;
  // 罗盘
  private _hasCompass: boolean = false;
  // 怪物手册
  private _hasBook: boolean = false;
  // 破冰稿
  private _hasIcebreakerScript: boolean = false;
  // 破墙稿
  private _hasBrickBreaker: boolean = false;
  // 精灵进度 和 精灵对话
  private _spiritProgress: SpiritTalk = "begin";
  private _thiefProgress: SpiritTalk = "begin";
  // 小经验商店
  private _hasMinExpStore: boolean = false;
  // 大经验商店
  private _hasExpStore: boolean = false;
  // 钥匙商店
  private _hasKeyStore: boolean = false;
  // 小金幣商店
  private _hasMinGoldStore: boolean = false;
  // 金幣商店
  private _hasGoldStore: boolean = false;
  // 開啓特殊門
  private _openSpecialDoor: boolean = false;
  positionY: number = 3;
  _key: KeyChain = {};

  constructor(property: HeroProperty = HeroNumerical, position?: PositionType) {
    super(RoleTiles.HERO, property, position);
    this.initValue(property);
  }

  setMoveDirection(type: MoveDirectionType) {
    this.positionY = positionYMap[type];
  }

  initValue(property?: HeroProperty): void {
    super.initValue(property);
    if (property) {
      this._level = property._level || 1;
      this._key = property._key || {};
      if (property._hasCompass) {
        this.acquireCompass();
      }
      if (property._hasBook) {
        this.acquireBook();
      }
      if (property._hasIcebreakerScript) {
        this.acquireIcebreakerScript();
      }
      if (property._hasBrickBreaker) {
        this.acquireBrickBreaker();
      }
    }
  }

  addToRender(x: number, y: number, { hero }: OneElementType): void {
    hero.x = x;
    hero.y = y;
  }

  /**
   * 获取指定值
   * @param types 如果传入单个key就返回一个钥匙数据
   * 传入数组，就可以需要获取钥匙的所有类型数据
   * @returns
   */
  getKey(types: DoorTiles): undefined | number;
  getKey(types: Array<DoorTiles>): KeyChain;
  getKey(types: Array<DoorTiles> | DoorTiles) {
    if (Array.isArray(types)) {
      return types.reduce(
        (pre, type) => ({ ...pre, [type]: this._key[type] || 0 }),
        {}
      );
    }
    return this._key[types];
  }

  /**
   * 初始化所有钥匙
   */
  setKey(value: KeyChain) {
    this._key = value;
  }

  /**
   * 添加一个key
   * @param type   key类型
   * @param value
   */
  addKey(type: keyof KeyChain, value: number = 1) {
    this._key[type] = (this._key[type] || 0) + value;
  }

  /**
   * 使用钥匙
   * @param type  钥匙类型
   * @param value 钥匙数量，默认为1
   * @returns
   */
  useKey(type: keyof KeyChain, value: number = 1) {
    if (!hasIn(this._key, type)) return false;
    if (this._key[type] === 0) return false;
    (this._key[type] as number) -= value;
    return true;
  }

  /**
   * 批量设置钥匙包
   * @param value
   */
  setKeyChain(value: KeyChain, type: "use" | "add" = "add") {
    const func = type === "use" ? "useKey" : "addKey";
    for (let key in value) {
      const newKey = key as unknown as keyof KeyChain;
      this[func](newKey, value[newKey]);
    }
  }

  get Level() {
    return this._level;
  }

  improveLevel(value: number = 1) {
    this._level += value;
  }

  get hasCompass() {
    return this._hasCompass;
  }

  acquireCompass() {
    this._hasCompass = true;
  }

  hasBook() {
    return this._hasBook;
  }

  acquireBook() {
    this._hasBook = true;
  }

  get hasIcebreakerScript() {
    return this._hasIcebreakerScript;
  }

  acquireIcebreakerScript() {
    this._hasIcebreakerScript = true;
  }

  get hasBrickBreaker() {
    return this._hasBrickBreaker;
  }

  acquireBrickBreaker() {
    this._hasBrickBreaker = true;
  }

  get spiritProgress() {
    return this._spiritProgress;
  }

  spiritNextProgress() {
    if (this._spiritProgress === "end") return;
    if (this._spiritProgress === "begin") {
      return (this._spiritProgress = "progress");
    }
    this._spiritProgress = "end";
  }

  thiefNextProgress() {
    if (this._thiefProgress === "end") return;
    if (this._thiefProgress === "begin") {
      return (this._thiefProgress = "progress");
    }
    this._thiefProgress = "end";
  }

  get thiefProgress() {
    return this._thiefProgress;
  }

  get hasMinExpStore() {
    return this._hasMinExpStore;
  }

  setOpenMinExpStore() {
    this._hasMinExpStore = true;
  }

  get hasExpStore() {
    return this._hasExpStore;
  }

  setOpenExpStore() {
    this._hasExpStore = true;
  }

  get hasMinGoldStore() {
    return this._hasMinGoldStore;
  }

  setOpenMinGoldStore() {
    this._hasMinGoldStore = true;
  }

  get hasKeyStore() {
    return this._hasKeyStore;
  }

  setOpenKeyStore() {
    this._hasKeyStore = true;
  }

  get hasGoldStore() {
    return this._hasGoldStore;
  }

  setOpenGoldStore() {
    this._hasGoldStore = true;
  }

  get openSpecialDoor() {
    return this._openSpecialDoor;
  }

  setOpenSpecialDoor() {
    this._openSpecialDoor = true;
  }
}
