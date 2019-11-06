<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value)=>{
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid;
    }
    export default {
        name: "GuluCol",
        props: {
            span: {type: [Number, String]},
            offset: {type: [Number, String]},
            ipad:{type:Object, validator},
            narrowPc:{type:Object, validator},
            pc:{type:Object, validator},
            widePc:{type:Object, validator}},
        data() {
            return {
                gutter: 0
            }

        },
        methods:{
            creatClasses(obj,str=''){
                if(!obj){return []}
                let array = []
                if(obj.span){array.push(`col-${str}${obj.span}`)}
                if(obj.offset){array.push(`offset-${str}${obj.offset}`)}
                return array
            }
        },
        computed: {
            colClass() {
                let {span, offset,ipad,narrowPc,pc,widePc} = this
                let createClasses = this.creatClasses
                return [
                    ...createClasses({span,offset}),
                    ...createClasses(ipad,'ipad-'),
                    ...createClasses(narrowPc,'narrow-pc-'),
                    ...createClasses(pc,'pc-'),
                    ...createClasses(widePc,'wide-pc-')
                ]
            },
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;

        $class-perfix: col-;
        @for $n from 1 through 24 {
            &.#{$class-perfix}#{$n} {
                width: ($n / 24)*100%;
            }
        }
        $class-perfix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-perfix}#{$n} {
                margin-left: ($n / 24)*100%;
            }
        }
        @media (min-width: 577px) {
            $class-perfix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-perfix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
        @media (min-width: 769px) {
            $class-perfix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-perfix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-perfix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-perfix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
        @media (min-width: 1201px){
            $class-perfix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-perfix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }
</style>