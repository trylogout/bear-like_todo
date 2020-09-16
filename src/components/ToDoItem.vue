<template>
  <div>
    <li>
      <span class="todo-checkbox todo-checked" v-if="todo.completed === true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          v-on:click="todo.completed = !todo.completed "
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M.5 12.853c0 1.462 1.185 2.647 2.647 2.647h9.706c1.462 0 2.647-1.185 2.647-2.647V3.147C15.5 1.685 14.315.5 12.853.5H3.147C1.685.5.5 1.685.5 3.147v9.706z"
              fill="#FFF"
            />
            <path
              d="M.5 12.853c0 1.462 1.185 2.647 2.647 2.647h9.706c1.462 0 2.647-1.185 2.647-2.647V3.147C15.5 1.685 14.315.5 12.853.5H3.147C1.685.5.5 1.685.5 3.147v9.706z"
              stroke="#B4B4B4"
            />
            <path
              d="M12.526 4.615L6.636 9.58l-2.482-.836c-.19-.06-.408.003-.518.15-.116.15-.106.352.026.495l2.722 2.91c.086.09.21.144.34.144h.046c.12-.013.234-.07.307-.156l6.1-7.125c.143-.166.123-.407-.046-.548-.164-.138-.435-.14-.604 0z"
              id="check"
              fill="#555"
            />
          </g>
        </svg>
      </span>
      <span class="todo-checkbox" v-else>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          v-on:click="todo.completed = !todo.completed "
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M.5 12.853c0 1.462 1.185 2.647 2.647 2.647h9.706c1.462 0 2.647-1.185 2.647-2.647V3.147C15.5 1.685 14.315.5 12.853.5H3.147C1.685.5.5 1.685.5 3.147v9.706z"
              fill="#FFF"
            />
            <path
              d="M.5 12.853c0 1.462 1.185 2.647 2.647 2.647h9.706c1.462 0 2.647-1.185 2.647-2.647V3.147C15.5 1.685 14.315.5 12.853.5H3.147C1.685.5.5 1.685.5 3.147v9.706z"
              stroke="#B4B4B4"
            />
            <path
              d="M12.526 4.615L6.636 9.58l-2.482-.836c-.19-.06-.408.003-.518.15-.116.15-.106.352.026.495l2.722 2.91c.086.09.21.144.34.144h.046c.12-.013.234-.07.307-.156l6.1-7.125c.143-.166.123-.407-.046-.548-.164-.138-.435-.14-.604 0z"
              id="check"
              fill="#555"
            />
          </g>
        </svg>
      </span>
      <!-- <span class='todo-checkbox todo-checked'> -->
      <span class="todo-text">
        <strong>{{index+1}}</strong>
        {{todo.title | uppercase}}
      </span>
      <button class="btn-i" v-on:click="$emit('removeItem', todo.id)">&times;</button>
    </li>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(value) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
      return value
    }
  }
};
</script>

<style scoped>
li {
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid #eee;
  border-radius: 40px;
  box-shadow: 0 2px #eee;
  background-color: #fdfdfd;
  justify-content: space-between;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  text-indent: -0.65em;
  text-align: left;
  display: inline-flex;
  width: 60%;
  height: auto;
  margin-right: 1em;
}

.todo-checkbox {
  text-indent: -1.7em;
  margin-right: 1rem;
  margin-left: 3rem;
}
.todo-checkbox svg {
  margin-right: 0.3em;
  position: relative;
  top: 0.2em;
}
.todo-checkbox svg #check {
  display: none;
}
.todo-checkbox.todo-checked #check {
  display: inline;
}

.todo-checkbox.todo-checked + .todo-text {
  text-decoration: line-through;
  color: #878787;
}

.btn-i {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #cb4e4e;
  color: #fff;
  box-shadow: 0 2px #878787;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-right: 1rem;
}

.btn-i:hover {
  background: #ab3c3c;
}

.btn-i:active {
  transform: translateY(2px);
}
</style>