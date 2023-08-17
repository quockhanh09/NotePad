<template>
  <div>
    <p>To access your notes from anywhere and never lose them, just create an account (it will take less than a minute). If you already have an account, you can log in below.</p>
    <div v-if="!isLoggedIn">
      <h2>Create an Account</h2>
      <form @submit.prevent="handleRegistration" class="form-horizontal">
        <div class="Username-from">
          <label for="reg-username" class="control-label">Email</label>
          <input type="text" id="reg-username" class="form-control" placeholder="Enter Email" v-model="regUsername" required />
        </div>

        <div class="Password-from">
          <label for="reg-password" class="control-label">Password</label>
          <input type="password" id="reg-password" class="form-control" placeholder="New Password" v-model="regPassword" required />
        </div>
        <div class="button-from">
          <button type="submit" class="create-button">Create an Account</button>
        </div>
      </form>
    </div>

    <div v-if="!isLoggedIn">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin" class="form-horizontal">
        <div class="Username-from">
          <label for="login-username" class="control-label">Email</label>
          <input type="text" id="login-username" class="form-control" placeholder="Enter Email" v-model="loginUsername" required />
        </div>

        <div class="Password-from">
          <label for="login-password" class="control-label">Password</label>
          <input type="password" id="login-password" class="form-control" placeholder="Enter Password" v-model="loginPassword" required />
        </div>
        <div class="checkbox">
              <label>
                  <input type="checkbox" name="remember" checked="checked" class="checkbox-from"> Remember me
              </label>
        </div>
        <div class="button-from">
          <button type="submit" class="create-button">Login</button>
          <a href=""> Forgot password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regUsername: "",
      regPassword: "",
      loginUsername: "",
      loginPassword: "",
      isLoggedIn: false,
    };
  },
  methods: {
    handleRegistration() {
      const userInfo = {
        username: this.regUsername,
        password: this.regPassword,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.isLoggedIn = true;
      this.$emit("onRegistration", userInfo); // Emit the registration event
    },
    handleLogin() {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
        const userInfo = JSON.parse(storedUserInfo);
        if (userInfo.username === this.loginUsername && userInfo.password === this.loginPassword) {
            this.isLoggedIn = true;
        } else {
            alert("Invalid login credentials.");
        }
    } else {
        alert("No account found. Please register first.");
    }
},
  },
};
</script>

  
  <style scoped>
 
 p{
 
  padding-top: 30px;
  text-align: center;
 }

 h2{
  position: relative;
  left: 150px;
 }

 .form-horizontal{
  position: relative;
  left: 100px;
  bottom: 20px;
 }

 .button-from{
  padding-top: 15px;
  
 }

.create-button{
    background: #337ab7;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 70px;
    height: 32px;
    font-size: 14px;
    padding: 6px 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    text-align: center;
    position: relative;
    left: 90px;
 }

 .create-button:hover{
  background-color:#3275fc ;
 }

#regiser-button{
  width: 150px;
}

label{
    text-align: left;
}

.Username-from{
  padding-bottom: 15px;
}

 .form-control{
    display: inline;
    margin-right: 10px;
    width: 500px;
    height: 34px;
    
 }

 .Username-from input{
    position: relative;
    left: 50px;
 }

 .Password-from input{
  position: relative;
    left: 22px;
 }

.checkbox{

}

 .checkbox-from{
    width: 15px;
    height: 15px;
    border: 2px solid #3498db ;
    background: #337ab7;
 }

 .checkbox-from input{
  background-color: blue; /* Hoặc bất kỳ màu nào bạn muốn */
}

form input{
  width: 800px;
  padding: 4px;
  height: 34px;
  font-size: 1.0em;
  font-family: inherit;
  resize: none;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: inset 2px 2px 2px rgba(33, 33, 33, 0.3);

}


form textarea {
  width: 100%;
  height: 400px;
  padding: 4px;
  font-size: 1.0em;
  font-family: inherit;
  resize: none;
  border-radius: 4px;
  box-shadow: inset 2px 2px 4px rgba(33, 33, 33, 0.3);
}

form input:focus{
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}


form textarea:focus {
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}

  </style>
 