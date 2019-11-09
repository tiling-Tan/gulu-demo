<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GuluTabsHeader"
    }
</script>

<style scoped lang="scss">
    $color:blue;
    $height: 40px;
    .tabs-header {
        display: flex;
        height: $height;
        justify-content: flex-start;
        border: 1px solid red;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 3px solid $color;
            width: 60px;
        }

        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>