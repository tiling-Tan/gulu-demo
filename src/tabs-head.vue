<template>
    <div class="tabs-header" ref="head">
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
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, left} = vm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $color: blue;
    $height: 40px;
    $border-color: #ddd;
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