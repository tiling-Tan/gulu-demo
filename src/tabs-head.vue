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
        name: "GuluTabsHeader",
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                let{width,height,left,top} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${parseInt(width)}px`
                this.$refs.line.style.left = `${parseInt(left)}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $color:blue;
    $height: 40px;
    $border-color:#ddd;
    .tabs-header {
        display: flex;
        height: $height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $color;
            transition: all .3s;
        }

        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>