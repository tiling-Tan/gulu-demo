<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane",
        inject:['eventBus'],
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return{
               active:false
            }
        },
        created() {
        },
        mounted() {
            this.eventBus.$on('update:selected',(name)=>{
                if(name === this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane{
        padding: 1em;
        &.active{

        }
    }
</style>