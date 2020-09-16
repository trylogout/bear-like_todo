<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        onSubmit(){
            if(this.title.trim()){
                const newTodoItem = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
            console.log(newTodoItem)
            this.$emit('addToDo', newTodoItem)
            this.title = ''
            }
        }
    }
}
</script>

<style>
input{
    width:400px;
}

form{
    display: flex;
}
</style>