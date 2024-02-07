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
import { toRef } from 'vue'

import { useTalkStore } from '@/stores/game/talk';


const __$temp_1 = (useTalkStore()),
  nextTalk = toRef(__$temp_1, 'nextTalk'),
  talkInfo = toRef(__$temp_1, 'talkInfo'),
  talkVisible = toRef(__$temp_1, 'talkVisible'),
  closeTalk = toRef(__$temp_1, 'closeTalk');;
</script>

<style scoped></style>