<template>
    <div class="tabs-item" @click="onClick" :class="classes"
    :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        inject:['eventBus'],
        data(){
            return{
               active:false
            }
        },
        props:{
            disable:{
                type:Boolean,
                default:false
            },
            name:{
                type: [String,Number],
                required:true
            }
        },
        created() {

        },
        mounted(){
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = name === this.name;
                })
            }
        },
        computed:{
            classes(){
                return{
                    active:this.active,
                    disable: this.disable
                }
            }
        },
        methods:{
            onClick(){
                if(this.disable){return}
                this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
                this.$emit('click',this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $color:blue;
    $disable-text-color:grey;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            color: $color;
            font-weight: bold;
        }
        &.disable{
            color: $disable-text-color;
            cursor: not-allowed;
        }
    }
</style>