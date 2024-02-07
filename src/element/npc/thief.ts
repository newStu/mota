import { RoleTiles, NPCTiles, ThiefNumerical } from "@/constants";
import type {
  CommonFuncMap,
  IDType,
  OneElementType,
  PositionType,
  SpiritTalk,
  TalkInitType,
} from "@/typings/constants";
import type { Hero } from "../role/hero";
import { NPC } from "./npc";

export class Thief extends NPC {
  talk: { [key in SpiritTalk]: Array<{ id: IDType; text: string }> } = {
    begin: [
      { id: RoleTiles.HERO, text: "。。。。。。" },
      { id: this.id, text: "你醒了！" },
      { id: RoleTiles.HERO, text: "。。。。。。你是谁？我在哪里？" },
      {
        id: NPCTiles.SPIRIT,
        text: "我是这里的仙子，刚才你被这里的小怪打昏了。",
      },
      { id: RoleTiles.HERO, text: "。。。。。。剑，剑，我的剑呢？" },
    ],
    progress: [
      {
        id: NPCTiles.SPIRIT,
        text: "勇敢的去吧，勇士！",
      },
    ],
    end: [
      {
        id: NPCTiles.SPIRIT,
        text: "勇敢的去吧，勇士！",
      },
    ],
  };
  positionY: number = 2;

  constructor(
    property: typeof ThiefNumerical = ThiefNumerical,
    position?: PositionType
  ) {
    super(NPCTiles.THIEF, property, position);
    this.initValue(property);
  }

  _getTalkParams(hero: Hero, callback?: () => void): TalkInitType {
    let key = hero.thiefProgress;
    return {
      talk: this.talk[key],
      talkName: {
        [RoleTiles.HERO]: hero.Name,
        [this.id]: this.Name,
      },
      callback: callback,
    };
  }

  execute(hero: Hero, { initATalkDialog, message }: CommonFuncMap) {
    let callback = undefined;
    switch (hero.thiefProgress) {
      case "begin":
        callback = () => {};
        break;
      case "end":
        callback = () => {};
        break;
    }

    initATalkDialog(this._getTalkParams(hero, callback));

    return super.execute();
  }

  addToRender(x: number, y: number, { oneElements }: OneElementType): void {
    const spirit = oneElements.find((item) => item.id === this.id);
    if (spirit) {
      this.movePosition({ x, y });
    } else {
      return super.addToRender(x, y);
    }
  }
}
