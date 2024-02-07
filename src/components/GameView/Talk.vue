<template>
    <el-dialog :before-close="closeTalk" v-model="talkVisible" title="对话" width="30%" center>
        <span>
            {{ talkInfo.name }}: {{ talkInfo.text }}
        </span>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="nextTalk">
                    Next
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { useTalkStore } from '@/stores/game/talk';


const {
    nextTalk,
    talkInfo,
    talkVisible,
    closeTalk
} = $(useTalkStore());
</script>

<style scoped></style>