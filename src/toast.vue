<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluToast"
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0 ,0,0.75);
    .toast{
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        height: $toast-height;
        line-height: 1.8;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        bpx-shadow:0 0 3px 0 rgba(0,0,0,0.5);
        color: white;
        padding: 0 16px;
    }
</style>