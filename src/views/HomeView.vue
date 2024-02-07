<template>
    <div class="home-view-wrapper">
        <RouterLink to="game">新游戏</RouterLink>
        <RouterLink to="game">继续游戏</RouterLink>
        <RouterLink to="edit">关卡编辑器</RouterLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.home-view-wrapper {
    position: absolute;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>
