<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import icon from './icon'
    export default {
        name: "GuluButton",
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value === 'left' || value === 'right';
                }
            }
        },
        components:{
            'g-icon':icon
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button{
        font-size: $font-size;
        height: $button-height;
        padding: 0 1.1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        &:hover{border-color: $border-color-hover;}
        &:active{background-color: $button-active-bg;}
        &:focus{outline: none;}
        > .g-button-content{order:2;}
        > .icon{order:1;margin-right: .3em;}
        &.icon-right{
            > .g-button-content{order:1;}
            > .icon{order:2;margin-left: .3em;margin-right: 0}
        }
    }
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .loading{
        animation: spin 1s infinite linear;
    }
</style>