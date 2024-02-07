<template>
    <div class="data-panel-wrapper">
        <div class="panel-item level-box">
            魔塔 {{ `第 ${numberToText[gameLevels]} 层` }}
        </div>
        <div class="map-attribute-box">
            <div class="data-panel-box">
                <div class="panel-item attribute-box">
                    <el-form :model="formModal" label-width="60px" label-position="left" size="small">
                        <template v-for="{ label, key } in renderPanel" :key="key">
                            <el-form-item :label="label">
                                <template v-if="['Name'].includes(key)">
                                    <InputText v-model="formModal[key]" :isEdit="isEdit"></InputText>
                                </template>
                                <template v-else>
                                    <InputText :disabled="formModal.id !== RoleTiles.HERO" v-model.number="formModal[key]"
                                        :isEdit="isEdit"></InputText>
                                </template>
                            </el-form-item>
                        </template>
                    </el-form>
                </div>
                <div class="panel-item prop-box">
                    <template v-if="keyModal">
                        <el-form :model="formModal" label-width="60px" label-position="left" size="small">
                            <template v-for="({ id, DoorId }) in keyList" :key="id">
                                <el-form-item>
                                    <template #label>
                                        <img :src="TilesImage[id]" />
                                    </template>
                                    <InputText v-model.number="keyModal[DoorId]" :isEdit="isEdit"></InputText>
                                </el-form-item>
                            </template>
                        </el-form>
                    </template>
                </div>
            </div>
            <div class="map-box">
                <slot></slot>
            </div>
        </div>
        <div class="bottom-box">
            <div class="panel-item ability-box">
                <template v-for="({ id }) in abilityList" :key="id">
                    <img :src="TilesImage[id]" class="icon-img" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/common/game';
import { useDataPanelHeight, useDataPanelValue } from '../Common/dataPanel';
import { RoleTiles, numberToText, TilesImage } from '@/constants';
import { keyList, abilityList } from "@/render"
import type { Role } from '@/element/role/role';
import InputText from './InputText.vue';

const {
    marginHeightPx,
    attributeHeight,
    propHeight,
    marginPx,
    paddingPx,
    abilityHeight
} = $(useDataPanelHeight());

const props = withDefaults(defineProps<{ element: Role | undefined, isEdit: boolean }>(), {
    isEdit: false
})
const { gameLevels } = $(useGameStore());
const { renderPanel, formModal, keyModal } = useDataPanelValue(props);

</script>

<style lang="scss" scoped>
.data-panel-wrapper {
    display: inline-block;
    background-image: url("@/assets/base/icon/map/wall_1.png");

    .panel-item {
        border: 3px solid rgb(199, 103, 31);
        background-color: rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        margin-bottom: v-bind(marginHeightPx);
        font-weight: 800;
        color: #fff;
        padding: v-bind(paddingPx) 30px;
        width: 300px;

        &.level-box {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px auto 0;
        }

        &.ability-box {
            width: 80%;
            margin: 0 auto 20px;

            .icon-img {
                width: v-bind(abilityHeight);
                height: v-bind(abilityHeight);
            }
        }
    }

    .map-attribute-box {
        display: inline-flex;
        padding: 10px 30px 10px 0;

        .data-panel-box {
            padding: 0 15px 0 30px;

            .panel-item {
                width: 200px;

                :deep(.el-form-item) {
                    margin-bottom: v-bind(marginPx);

                    .el-form-item__label {
                        color: #fff;
                        font-size: 12px;

                        img {
                            margin-top: -3px;
                        }
                    }

                    .el-form-item__content {
                        height: 24px;
                    }
                }

                &.attribute-box {
                    height: v-bind(attributeHeight);
                    margin-bottom: 10px;
                }

                &.prop-box {
                    height: v-bind(propHeight);
                    margin-bottom: 0;
                }
            }
        }

        .map-box {
            border: 3px solid rgb(199, 103, 31);
        }
    }

    .bottom-box {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>