/**
 * 精灵的作用是引导英雄获取十字架,并给她
 * 所以分为三个阶段
 *     获取十字架前的对话,刚苏醒
 *     寻找十字架的对话
 *     得到十字架的对话
 */
export const SpiritNumerical = {
  Name: "精灵",
  afterX: 4,
  afterY: 8,
  beginTalk: [],
  progressTalk: [],
  afterTalk: [],
};

export const ThiefNumerical = {
  Name: "小偷",
  beginTalk: [],
  progressTalk: [],
  afterTalk: [],
};

export const CommonMerchantNumerical = (Name: string) => ({
  Name: Name,
  talk: [],
});
