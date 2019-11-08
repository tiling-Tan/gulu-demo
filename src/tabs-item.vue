<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        props:{
            disable:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item{

    }
</style>