import { SpiritNumerical, RoleTiles, MapTiles, NPCTiles } from "@/constants";
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

export class Spirit extends NPC {
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
      {
        id: NPCTiles.SPIRIT,
        text: "你的剑被他们抢走了，我只来得及将你救出来。",
      },

      { id: RoleTiles.HERO, text: "那，公主呢？我是来救公主的。" },
      {
        id: NPCTiles.SPIRIT,
        text: "公主还在里面，你这样进去是打不过里面的小怪的。",
      },

      {
        id: RoleTiles.HERO,
        text: "那我怎么办，我答应了国王一定要把公主救出来的，那我现在应该怎么办呢？",
      },
      {
        id: NPCTiles.SPIRIT,
        text: "放心吧，我把我的力量借给你，你就可以打赢那些小怪了。不过，你的先帮我去找一样东西，找到了再来这里找我。",
      },

      {
        id: RoleTiles.HERO,
        text: "找东西？找什么东西？",
      },
      {
        id: NPCTiles.SPIRIT,
        text: "是一个十字架，中间有一颗红色的宝石。",
      },

      {
        id: RoleTiles.HERO,
        text: "那个东西有什么用吗？",
      },
      {
        id: NPCTiles.SPIRIT,
        text: "我本是这座塔守护者，可不久前，从北方来了一批恶魔，并将我的魔力封在了这个十字架里面，如果你能将它带出塔来，那我的魔力便会慢慢地恢复，到那时我便可以把力量借给你去救出公主了。要记住：只有用我的魔力才能打开二十一层的门。",
      },

      {
        id: RoleTiles.HERO,
        text: "。。。。。。好吧，我试试看。",
      },
      {
        id: NPCTiles.SPIRIT,
        text: "刚才我去看过了，你的剑被放在三楼，你的盾在五楼上，而那个十字架被放在七楼。要到七楼，你的先取回你的剑和盾。另外，在塔里的其它楼层上，还有一些存放了好几百年的宝剑和宝物，如果得到它们，对于你对付这里面的怪物将有很大的帮助。我这里有三把钥匙，你先拿去，在塔里面还有很多这样的钥匙，你一定要珍惜使用。勇敢的去吧，勇士！",
      },
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
  afterX: number = 4;
  afterY: number = 8;
  positionY: number = 3;

  constructor(
    property: typeof SpiritNumerical = SpiritNumerical,
    position?: PositionType
  ) {
    super(NPCTiles.SPIRIT, property, position);
    this.initValue(property);
  }

  initValue(property?: typeof SpiritNumerical): void {
    super.initValue(property);
    if (property) {
      this.afterX = property.afterX || 4;
      this.afterY = property.afterY || 8;
    }
  }

  _getTalkParams(hero: Hero, callback?: () => void): TalkInitType {
    let key = hero.spiritProgress;
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
    switch (hero.spiritProgress) {
      case "begin":
        callback = () => {
          hero.movePosition(this);
          hero.setKeyChain({
            [MapTiles.DOOR_YELLOW]: 1,
            [MapTiles.DOOR_BLUE]: 1,
            [MapTiles.DOOR_RED]: 1,
          });
          hero.spiritNextProgress();
          this.movePosition({ x: this.afterX, y: this.afterY });
          message("获得 红钥匙 +1, 蓝钥匙 +1, 黄钥匙 +1");
        };
        break;
      case "end":
        callback = () => {
          hero.ATK *= 4 / 3;
          hero.DEF *= 4 / 3;
          message("攻击力 提升 1/3, 防御力 提升 1/3");
        };
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
