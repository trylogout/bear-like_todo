<template>
  <div class="ToDoApp">
    <Loader v-if="loading" />
    <div v-else>
      <AddToDoComponent @addToDo="addToDoItem" />

      <nav class="header__nav">
        <ul class="header__navbar">
          <li class="header__item">
            <a href="#" class="header__link">
              <transition name="slide-fade">
                <!-- Header Navigation Menu Icons -->
                <button class="header--button" v-if="show" key="on" @click="show = false">
                  <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Close</title>
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </button>
                <button class="header--button" v-else key="off" @click="show = true">
                  <i style="font-size:22px;" class="fas fa-filter"></i>
                </button>
              </transition>
            </a>
            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
                <ul class="dropdown__menu-nav">
                  <li class="dropdown__menu-item">
                    <a
                      href="#"
                      class="dropdown__menu-link"
                      title="Completed"
                      v-on:click="filter='completed'"
                    >
                      <div class="dropdown__menu-svg">
                        <i style="font-size:22px;" class="fas fa-check-circle"></i>
                      </div>
                      <div class="dropdown__menu-text">Completed</div>
                    </a>
                  </li>
                  <li class="dropdown__menu-item">
                    <a
                      href="#"
                      class="dropdown__menu-link"
                      title="Not Completed"
                      v-on:click="filter='notCompleted'"
                    >
                      <div class="dropdown__menu-svg">
                        <i style="font-size:22px;" class="fas fa-times-circle"></i>
                      </div>
                      <div class="dropdown__menu-text">Not Completed</div>
                    </a>
                  </li>
                  <li class="dropdown__menu-item">
                    <a href="#" class="dropdown__menu-link" title="all" v-on:click="filter='all'">
                      <div class="dropdown__menu-svg">
                        <i style="font-size:22px;" class="fas fa-minus-circle"></i>
                      </div>
                      <div class="dropdown__menu-text">All</div>
                    </a>
                  </li>
                  <!-- Dropdown Menu Separator -->
                  <hr />
                  <li class="dropdown__menu-item">
                    <a href="https://github.com/trylogout" class="dropdown__menu-link" title="Help">
                      <div class="dropdown__menu-svg">
                        <i style="font-size:22px;" class="fab fa-github"></i>
                      </div>
                      <div class="dropdown__menu-text">Github</div>
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </nav>

      <hr />
      <ToDoList v-if="filteredToDos.length" v-bind:todos="filteredToDos" @removeTodo="removeTodo" />
      <div v-else>
        <div class="sadText">
          <p class="upper">OOPS...</p>
          <p class="lower">We lost your pretty ToDo's</p>
          <p class="lower">Or u dont make them</p>
        </div>
        <div class="container">
          <svg
            class="ghost"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="127.433px"
            height="132.743px"
            viewBox="0 0 127.433 132.743"
            enable-background="new 0 0 127.433 132.743"
            xml:space="preserve"
          >
            <path
              fill="#Fafafa"
              d="M116.223,125.064c1.032-1.183,1.323-2.73,1.391-3.747V54.76c0,0-4.625-34.875-36.125-44.375
    s-66,6.625-72.125,44l-0.781,63.219c0.062,4.197,1.105,6.177,1.808,7.006c1.94,1.811,5.408,3.465,10.099-0.6
    c7.5-6.5,8.375-10,12.75-6.875s5.875,9.75,13.625,9.25s12.75-9,13.75-9.625s4.375-1.875,7,1.25s5.375,8.25,12.875,7.875
    s12.625-8.375,12.625-8.375s2.25-3.875,7.25,0.375s7.625,9.75,14.375,8.125C114.739,126.01,115.412,125.902,116.223,125.064z"
            />
            <circle fill="#878787" cx="86.238" cy="57.885" r="6.667" />
            <circle fill="#878787" cx="40.072" cy="57.885" r="6.667" />
            <path
              fill="#878787"
              d="M71.916,62.782c0.05-1.108-0.809-2.046-1.917-2.095c-0.673-0.03-1.28,0.279-1.667,0.771
    c-0.758,0.766-2.483,2.235-4.696,2.358c-1.696,0.094-3.438-0.625-5.191-2.137c-0.003-0.003-0.007-0.006-0.011-0.009l0.002,0.005
    c-0.332-0.294-0.757-0.488-1.235-0.509c-1.108-0.049-2.046,0.809-2.095,1.917c-0.032,0.724,0.327,1.37,0.887,1.749
    c-0.001,0-0.002-0.001-0.003-0.001c2.221,1.871,4.536,2.88,6.912,2.986c0.333,0.014,0.67,0.012,1.007-0.01
    c3.163-0.191,5.572-1.942,6.888-3.166l0.452-0.453c0.021-0.019,0.04-0.041,0.06-0.061l0.034-0.034
    c-0.007,0.007-0.015,0.014-0.021,0.02C71.666,63.771,71.892,63.307,71.916,62.782z"
            />
            <circle
              fill="#b9bec3"
              stroke="#b9bec3"
              stroke-miterlimit="10"
              cx="18.614"
              cy="99.426"
              r="3.292"
            />
            <circle
              fill="#b9bec3"
              stroke="#b9bec3"
              stroke-miterlimit="10"
              cx="95.364"
              cy="28.676"
              r="3.291"
            />
            <circle
              fill="#b9bec3"
              stroke="#b9bec3"
              stroke-miterlimit="10"
              cx="24.739"
              cy="93.551"
              r="2.667"
            />
            <circle
              fill="#b9bec3"
              stroke="#b9bec3"
              stroke-miterlimit="10"
              cx="101.489"
              cy="33.051"
              r="2.666"
            />
            <circle
              fill="#b9bec3"
              stroke="#b9bec3"
              stroke-miterlimit="10"
              cx="18.738"
              cy="87.717"
              r="2.833"
            />
            <path
              fill="#b9bec3"
              stroke="#b9bec3"
              stroke-miterlimit="10"
              d="M116.279,55.814c-0.021-0.286-2.323-28.744-30.221-41.012
    c-7.806-3.433-15.777-5.173-23.691-5.173c-16.889,0-30.283,7.783-37.187,15.067c-9.229,9.736-13.84,26.712-14.191,30.259
    l-0.748,62.332c0.149,2.133,1.389,6.167,5.019,6.167c1.891,0,4.074-1.083,6.672-3.311c4.96-4.251,7.424-6.295,9.226-6.295
    c1.339,0,2.712,1.213,5.102,3.762c4.121,4.396,7.461,6.355,10.833,6.355c2.713,0,5.311-1.296,7.942-3.962
    c3.104-3.145,5.701-5.239,8.285-5.239c2.116,0,4.441,1.421,7.317,4.473c2.638,2.8,5.674,4.219,9.022,4.219
    c4.835,0,8.991-2.959,11.27-5.728l0.086-0.104c1.809-2.2,3.237-3.938,5.312-3.938c2.208,0,5.271,1.942,9.359,5.936
    c0.54,0.743,3.552,4.674,6.86,4.674c1.37,0,2.559-0.65,3.531-1.932l0.203-0.268L116.279,55.814z M114.281,121.405
    c-0.526,0.599-1.096,0.891-1.734,0.891c-2.053,0-4.51-2.82-5.283-3.907l-0.116-0.136c-4.638-4.541-7.975-6.566-10.82-6.566
    c-3.021,0-4.884,2.267-6.857,4.667l-0.086,0.104c-1.896,2.307-5.582,4.999-9.725,4.999c-2.775,0-5.322-1.208-7.567-3.59
    c-3.325-3.528-6.03-5.102-8.772-5.102c-3.278,0-6.251,2.332-9.708,5.835c-2.236,2.265-4.368,3.366-6.518,3.366
    c-2.772,0-5.664-1.765-9.374-5.723c-2.488-2.654-4.29-4.395-6.561-4.395c-2.515,0-5.045,2.077-10.527,6.777
    c-2.727,2.337-4.426,2.828-5.37,2.828c-2.662,0-3.017-4.225-3.021-4.225l0.745-62.163c0.332-3.321,4.767-19.625,13.647-28.995
    c3.893-4.106,10.387-8.632,18.602-11.504c-0.458,0.503-0.744,1.165-0.744,1.898c0,1.565,1.269,2.833,2.833,2.833
    c1.564,0,2.833-1.269,2.833-2.833c0-1.355-0.954-2.485-2.226-2.764c4.419-1.285,9.269-2.074,14.437-2.074
    c7.636,0,15.336,1.684,22.887,5.004c26.766,11.771,29.011,39.047,29.027,39.251V121.405z"
            />
          </svg>

          <p class="shadowFrame">
            <svg
              version="1.1"
              class="shadow"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="61px"
              y="20px"
              width="122.436px"
              height="39.744px"
              viewBox="0 0 122.436 39.744"
              enable-background="new 0 0 122.436 39.744"
              xml:space="preserve"
            >
              <ellipse fill="#b9bec3" cx="61.128" cy="19.872" rx="49.25" ry="8.916" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ToDoList from "@/components/ToDoList.vue";
import AddToDoComponent from "@/components/AddToDoComponent.vue";
import Loader from "@/components/Loader.vue";
import dropdown from "vue-dropdowns";

export default {
  name: "todoPage",
  data() {
    return {
      show: false,
      todos: [],
      loading: true,
      filter: "all",
      arrayOfObjects: [
        "filterCompleted",
        "filterCompletedNotCompleted",
        "filterAll",
      ],
      filterCompleted: {
        name: "Completed",
      },
      filterCompletedNotCompleted: {
        name: "NotCompleted",
      },
      filterAll: {
        name: "All",
      },
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  },
  // watch:{
  //   filter(value){
  //     console.log(value)
  //   }
  // },
  computed: {
    filteredToDos() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "completed":
          return this.todos.filter((todo) => todo.completed);
        case "notCompleted":
          return this.todos.filter((todo) => !todo.completed);
      }
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    addToDoItem(todo) {
      this.todos.push(todo);
    },
    filteredToDos(value) {
      switch (value) {
        case "all":
          return this.todos;
        case "completed":
          return this.todos.filter((todo) => todo.completed);
        case "notCompleted":
          return this.todos.filter((todo) => !todo.completed);
      }
    },
  },
  components: {
    ToDoList,
    AddToDoComponent,
    Loader,
    dropdown,
  },
};
</script>
<style lang="scss">
@import "https://use.fontawesome.com/releases/v5.0.10/css/all.css";
@import "https://fonts.googleapis.com/css?family=Lato:300";

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -64.5px;
  margin-top: -85.5px;
}

.ghost {
  animation: float 3s ease-out infinite;
}

@keyframes float {
  50% {
    transform: translate(0, 20px);
  }
}
.shadowFrame {
  width: 130px;
  margin-top: 15px;
}
.shadow {
  animation: shrink 3s ease-out infinite;
  transform-origin: center center;
  ellipse {
    transform-origin: center center;
  }
}

@keyframes shrink {
  0% {
    width: 90%;
    margin: 0 5%;
  }
  50% {
    width: 60%;
    margin: 0 18%;
  }
  100% {
    width: 90%;
    margin: 0 5%;
  }
}

.sadText {
  color: #b9bec3;
  top: 30%;
  left: 50%;
  position: absolute;
  margin-left: -94.5px;
  margin-top: -85.5px;
}
.upper {
  font-size: 28px;
}
.lower {
  font-size: 16px;
}

// Header Menu

.header {
  padding: 2rem 5rem 2rem 5rem;
  &__nav {
    position: absolute;
    top: 25px;
    right: 25px;
  }
  &__navbar {
    margin-top: -25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__item {
    padding: 1rem;
  }
  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }
  &--button {
    top: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  top: 100%;
  right: 0;
  position: absolute;
  z-index: 10;
  height: 15rem;
  min-width: 250px;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 2rem 1rem 2rem 0rem;
  border-radius: 12px;
  background-color: white;
  border: 1px solid #b9bec3;
  background-clip: padding-box;
  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;
    &:hover {
      color: #ab3c3c;
      background-color: #cb4e4e42;
    }
  }
  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// Wrapper

.main {
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__subtitle {
    color: #4f5959;
    font-weight: 100;
    margin-bottom: 2rem;
  }
  &__link {
    margin-right: 1.5rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }
  &__svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.6;
    color: #94a2b0;
    &:hover {
      color: #cb4e4e;
    }
  }
}
</style>