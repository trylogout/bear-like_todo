<template>
    <div id="form">
        <article>
            <div class="container" :class="{'sign-up-active' : signUp}">
            <div class="overlay-container">
                <div class="overlay">
                <div class="overlay-left">
                    <h2>Welcome Back!</h2>
                    <p>Please login with your personal info</p>
                    <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
                </div>
                <div class="overlay-right">
                    <h2>Hello, Friend!</h2>
                    <p>Please enter your personal details</p>
                    <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
                </div>
                </div>
            </div>
            <form class="sign-up" action="#">
                <h2>Create login</h2>
                <div>Use your email for registration</div>
                <input type="text" placeholder="Name" v-model="nameReg" required autofocus/>
                <input type="email" placeholder="Email" v-model="emailReg" required/>
                <input type="password" placeholder="Password" v-model="passwordReg" required/>
                <input type="password" placeholder="Password Confirm" v-model="passwordConfirmationReg" required/>
                <button type="submit" @click="handleSubmitRegister">Sign Up</button>
            </form>
            <form class="sign-in" action="#">
                <h2>Sign In</h2>
                <div>Use your account</div>
                <input type="email" placeholder="Email" d="email" v-model="email" required autofocus/>
                <input id="password" type="password" placeholder="Password" v-model="password" required/>
                <a href="#">Forgot your password?</a>
                <button button type="submit" @click="handleSubmit">Sign In</button>
            </form>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        props : ['nextUrl'],
        data(){
            return {
                email : "",
                password : "",
                signUp: false,
                nameReg : "",
                emailReg : "",
                passwordReg : "",
                passwordConfirmationReg : "",
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    this.$http.post('http://localhost:3000/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        let is_admin = response.data.user.is_admin
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)
                        
                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== 1){
                                    this.$router.push('admin')
                                }
                                else {
                                    this.$router.push('/')
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            },
            handleSubmitRegister(e) {
                e.preventDefault()
                
                if (this.passwordReg === this.passwordConfirmationReg && this.passwordReg.length > 0)
                {
                    let url = 'http://localhost:3000/register'
                    if(this.is_admin != null || this.is_admin == 1) url = 'http://localhost:3000/register-admin'
                    this.$http.post(url, {
                        name: this.nameReg,
                        email: this.emailReg,
                        password: this.passwordReg,
                        is_admin: this.is_admin
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)
                        
                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                } else {
                    this.passwordReg = ""
                    this.passwordConfirmationReg = ""
                    
                    return alert('Passwords do not match')
                }
            },
            register(){
                this.$router.go('/register');
            }
        }
    }
</script>
<style lang="scss" scoped>
#form {
  display: flex;
  background: #fafafa;
  width:100%;
  height: 75vh;
}

.container {
  position: absolute;
  width: 768px;
  height: 480px;
  overflow: hidden;
  background: #fafafa;
  margin-top: -240px;
  margin-left: -384px;

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
    color: #fff;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #cb4e4e;
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    color: #fff;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2 {
  margin: 0;
}

p {
  margin: 20px 0 30px;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  border-radius: 20px;
  border: 1px solid #cb4e4e;
  background-color: #cb4e4e;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: #fafafa;
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #f0f0f0;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 2px;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #e0e0e0;
    }
  }
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>