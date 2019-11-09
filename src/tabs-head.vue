<template>
    <div class="tabs-header">
        <slot></slot>
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
    $height:40px;
    .tabs-header{
        display: flex;
        height: $height;
        justify-content: flex-start;
        border: 1px solid red;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>