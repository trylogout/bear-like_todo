<template>
  <div id="app">
    <br />
    <h1>Simple Bear-like ToDo list</h1>
    <div id="nav" v-if="show">
      <router-link to="/">ToDo</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/home">AdminTest</router-link>|
      <a id="logout-link" href="#" @click.prevent="logout">Logout</a>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.$router.go('/login');
    }
  },
  computed:{
    show(){
        return this.$route.name !== 'SignIn'
      }
    }
  }
</script>

<style>
body {
  background: #fafafa;
  color: #545454;
  text-rendering: optimizeLegibility;
  font-family: "AvenirNext-Regular";
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-family: "AvenirNext-Medium";
  color: #333;
  font-size: 1.6em;
  line-height: 1.3em;
  margin-bottom: 0.78571em;
}

h2 {
  font-family: "AvenirNext-Medium";
  color: #333;
  font-size: 1.3em;
  line-height: 1em;
  margin-bottom: 0.62857em;
}

h3 {
  font-family: "AvenirNext-Medium";
  color: #333;
  font-size: 1.15em;
  line-height: 1em;
  margin-bottom: 0.47143em;
}

p {
  margin-bottom: 1.57143em;
  hyphens: auto;
}

hr {
  height: 1px;
  border: 0;
  background-color: #dedede;
  margin: -1px auto 1.57143em;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #de4c4f;
  font-weight: bold;
}

html {
  background: url(images/wallapaper.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
