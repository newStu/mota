import type { RoleTiles } from "@/constants";
import type { TalkInitType } from "@/typings/constants";
import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

export const useTalkStore = defineStore("talk-store", () => {
  const talkList: { id: RoleTiles; text: string }[] = reactive([]);
  const talkNameMap: { [key in RoleTiles]?: string } = reactive({});
  let closeCallback: (() => void) | undefined = undefined;
  const index = ref(0);
  const getTalkText = (index: number) => {
    return talkList[index];
  };

  const talkInfo = computed(() => {
    const { text, id } = getTalkText(index.value) || {};
    return {
      text,
      name: talkNameMap[id],
    };
  });

  const talkVisible = ref(false);
  function closeTalk(done?: DoneFn) {
    talkVisible.value = false;
    index.value = 0;
    closeCallback?.();
    closeCallback = undefined;
    done?.();
  }

  function nextTalk() {
    let value = index.value + 1;
    if (value >= talkList.length) {
      closeTalk();
    } else {
      index.value = value;
    }
  }

  function initATalkDialog({ talk, talkName, callback }: TalkInitType) {
    talkList.splice(0, talkList.length, ...talk);
    Object.assign(talkNameMap, talkName);
    talkVisible.value = true;
    closeCallback = callback;
  }

  return {
    nextTalk,
    talkInfo,
    talkVisible,
    initATalkDialog,
    closeTalk,
  };
});
