<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false,
                single: false
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeselected', this.name)
                } else {
                    this.eventBus && this.eventBus.$emit('update:addselected', this.name)
                }
            },
            close() {
                this.open = false
            }
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            padding: 0 8px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        &:last-child {
            > .title:last-child {
                margin-bottom: -1px;
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        .content {
            padding: 8px;
            color: blue;
        }
    }
</style>