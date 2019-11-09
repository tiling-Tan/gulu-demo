<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
          this.eventBus.$on('update:selected',(name)=>{
              this.active = name === this.name;
          })
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            background: red;
        }
    }
</style>