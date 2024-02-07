<template>
    <el-container class="edit-view-wrapper">
        <el-header class="header-box">
            <el-page-header :icon="ArrowLeft" class="header-info" @back="goBack">
                <template #title>
                    <el-text size="large">返回游戏菜单</el-text>
                </template>
                <template #content>
                    <el-text size="large" type="primary">关卡编辑器</el-text>
                </template>
                <template #extra>
                    <div class="flex items-center">
                        <el-button type="text" @click="isCollapse = !isCollapse">快捷选项</el-button>
                    </div>
                </template>
            </el-page-header>
        </el-header>
        <el-container>
            <el-aside width="400px" class="left-menu">
                <el-tabs v-model="activeName" class="select-element-tabs" tab-position="left">
                    <el-tab-pane name="mapAttr">
                        <template #label>地图<br />操作</template>
                        <MapAttr></MapAttr>
                    </el-tab-pane>
                    <template v-for="({ label, name, selectionList }) in renderElementTabs" :key="name">
                        <el-tab-pane class="select-element-box" :label="label" :name="name">
                            <el-scrollbar>
                                <CommonSelect :selectTilesList="selectionList"></CommonSelect>
                            </el-scrollbar>
                        </el-tab-pane>
                    </template>
                </el-tabs>
            </el-aside>
            <el-main class="edit-map-view">
                <EditMapRender :map="map" :renderList="renderList" :hero="hero"></EditMapRender>
                <el-row class="operate-box">
                    <el-col>
                        <el-button-group>
                            <el-button @click="prevGameLevels(save, true)" type="primary" :icon="ArrowLeft"
                                :disabled="gameLevels === 0">上一关</el-button>
                            <el-button @click="save" type="primary" :icon="FolderChecked">保存</el-button>
                            <el-button @click="deleteCurrentLevels" type="primary" :icon="Delete">删除</el-button>
                            <el-button @click="nextGameLevels(save, true)" type="primary">
                                下一关<el-icon class="el-icon--right">
                                    <ArrowRight />
                                </el-icon>
                            </el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
            </el-main>
            <el-aside width="40px">
                <SizeSlider></SizeSlider>
            </el-aside>
        </el-container>
    </el-container>
    <el-drawer :size="230" v-model="isCollapse" title="快捷选项" direction="rtl">
        <ShortcutPanel></ShortcutPanel>
    </el-drawer>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';
import MapAttr from "@/components/EditSelect/MapAttr.vue";
import CommonSelect from "@/components/EditSelect/CommonSelect.vue";
import ShortcutPanel from "@/components/EditSelect/ShortcutPanel.vue";
import EditMapRender from "@/components/EditView/EditMapRender.vue";
import { renderElementTabs } from "@/render";
import { ArrowLeft, ArrowRight, Delete, FolderChecked } from "@element-plus/icons-vue";
import { useMapStore } from "@/stores/common/map";

import { useElementRenderStore } from "@/stores/common/elementRender";
import { useGameStore } from "@/stores/common/game";
import { useHeroStore } from "@/stores/common/hero";
import { ElMessageBox } from "element-plus";
import { useInit } from "@/hooks/useInit";
import { successMessage } from "@/utils";
import { useLocalStorageSaveGame } from "@/hooks/useLocalStorageSaveGame";
import SizeSlider from "@/components/Common/SizeSlider.vue";
import router from "@/router";

const isCollapse = ref(false)

const activeName = ref("mapAttr");

function goBack() {
    router.go(-1);
}

const __$temp_1 = (useMapStore()),
  map = toRef(__$temp_1, 'map'),
  col = toRef(__$temp_1, 'col'),
  row = toRef(__$temp_1, 'row');;
const __$temp_2 = (useElementRenderStore()),
  renderList = toRef(__$temp_2, 'renderList'),
  clearRenderList = toRef(__$temp_2, 'clearRenderList'),
  forwardMap = toRef(__$temp_2, 'forwardMap');;
const __$temp_3 = (useHeroStore()),
  hero = toRef(__$temp_3, 'hero');;
const __$temp_4 = (useGameStore()),
  prevGameLevels = toRef(__$temp_4, 'prevGameLevels'),
  nextGameLevels = toRef(__$temp_4, 'nextGameLevels'),
  gameLevels = toRef(__$temp_4, 'gameLevels');;
const { saveTotalGameInfo } = useLocalStorageSaveGame();

function deleteCurrentLevels() {
    ElMessageBox.confirm("删除当前关卡?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    }).then(() => {
        clearRenderList.value();
        save();
        successMessage("删除成功");
    });
}


function save() {
    saveTotalGameInfo(gameLevels.value, hero.value as any, {
        map: { col: col.value, row: row.value },
        renderList: renderList.value,
        hero: { x: hero.value.x, y: hero.value.y },
        forwardMap: forwardMap.value
    });
    successMessage(`第${gameLevels.value}关,保存成功`, 500);
}

useInit(0);
</script>

<style lang="scss" scoped>
.edit-view-wrapper {
    width: 100vw;
    height: 100vh;

    .header-box {
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 6px 6px #ddd;

        .header-info {
            width: 100%;
            padding: 40px 20px;
        }
    }

    .left-menu {
        padding-left: 20px;
        padding-top: 20px;
        box-sizing: border-box;

        .select-element-tabs {
            :deep(.el-tabs__item) {
                font-size: 16px;
                font-weight: 700;
                height: 80px;
                line-height: 24px;
            }

            .select-element-box {
                height: 100%;
                height: calc(100vh - 80px);
            }
        }

    }

    .edit-map-view {
        padding-top: 60px;
        text-align: center;

        .operate-box {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
}
</style> 