<template>
  <div class="ToDoList">
    <ul>
      <ToDoItem
        v-for="(todo, index) of todos"
        v-bind:todo="todo"
        v-bind:index="index"
        @removeItem="removeToDoItem"
      />
    </ul>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  props: ["todos"],
  components: {
    ToDoItem,
  },
  methods: {
    removeToDoItem(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>