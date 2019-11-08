<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <div v-if="enableHtml" v-html="$slots.default[0]"></div>
            <slot v-else></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onclickButton">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: "GuluToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDeply: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
                }
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDeply * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy
            },
            onclickButton() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade-in {
        0%{opacity: 0;transform: translateY(100%)}
        100%{opacity: 1;transform: translateY(0%)}
    }
    .toast {
        animation: fade-in 1s;
        position: fixed;
        left: 50%;
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        bpx-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        color: white;
        padding: 0 16px;

        .message {
            padding: 8px 0;
        }

        .close {
            padding-left: 16px;
            cursor: pointer;
            flex-shrink: 0;
        }

        .line {
            height: 100%;
            border-left: 1px solid #666666;
            margin-left: 16px;
        }

        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

</style>