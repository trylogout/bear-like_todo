<template>
	<div class="container__item">
		<form class="form" @submit.prevent="onSubmit">
			<input  v-model="title" type="text" class="form__field" required placeholder="Your pretty ToDo" />
			<button type="sumbit" class="btn btn--primary btn--inside uppercase">Add</button>
		</form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodoItem = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        console.log(newTodoItem);
        this.$emit("addToDo", newTodoItem);
        this.title = "";
      }
    },
  },
};
</script>

<style scopped lang='scss'>
//** variables
$background: #f5f6fa;
$text: #9c9c9c;
$input-bg-color: #fff;
$input-text-color: #a3a3a3;
$button-bg-color: #cb4e4e;
$button-text-color: #fff;

.container__item {
	height: 100%;
}

a {
	color: inherit;
	
	&:hover {
		color: $button-bg-color;
	}
}

//** helper
.container__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.uppercase {
	text-transform: uppercase;
}

//** button
.btn {
	display: inline-block;
	background: transparent;
	color: inherit;
	font: inherit;
	border: 0;
	outline: 0;
	padding: 0;
	transition: all 200ms ease-in;
	cursor: pointer;
	
	&--primary {
		background: $button-bg-color;
		color: $button-text-color;
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
		border-radius: 2px;
		padding: 12px 36px;
		
		&:hover {
			background: darken($button-bg-color, 4%);
		}
		
		&:active {
			background: $button-bg-color;
			box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
		}
	}
	
	&--inside {
		margin-left: -96px;
	}
}

//** form
.form {	
	&__field {
        margin-top: -25px;
		width: 360px;
        height: 10px;
		background: #fff;
		color: $input-text-color;
		font: inherit;
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
		border: 0;
		outline: 0;
		padding: 22px 18px;
	}
}
</style>