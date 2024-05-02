<script setup>
import { storeToRefs } from 'pinia'
import { useSignupStore } from '@/stores/signup'

const store = useSignupStore()
const { formValues } = storeToRefs(store)

console.log('from store', formValues)
const Values = {
  useremail: '',
  username: '',
  password: ''
}

function formsubmit(event) {
  event.preventDefault()
  store.changeVal(Values)
}
// console.log(Values)
</script>

<template>
  <div class="Container">
    <div class="left-container">
      <div>
        <i class="pi pi-message"></i>
        <h2>JustConnect</h2>
      </div>
      <div>
        <p>Where every word brings healing.</p>
      </div>
      <div class="imgdiv">
        <!-- <img src="../../../Utils/backgroundlogin.png" height="20rem" width="20rem" /> -->
      </div>
    </div>
    <div class="Right-cont">
      <div class="logindiv">
        <div>
          <div class="heading">
            <h3>Register Account</h3>
            <p>Get your free JustConnect account now</p>
          </div>

          {{ JSON.stringify(formValues, null, 2) }}
        </div>
        <form @submit="formsubmit">
          <div class="useremaildiv">
            <label class="useremailtext" for="email">Email</label>
            <input
              class="useremailinputbox"
              placeholder="Enter Email"
              type="text"
              v-model="Values.useremail"
            />
          </div>
          <div class="usernamediv">
            <label class="usernametext" for="name">Username</label>
            <input
              class="usernameinputbox"
              placeholder="Enter Username"
              type="text"
              v-model="Values.username"
            />
          </div>
          <div class="userpassworddiv">
            <label class="userpasswordtext" for="password">Password</label>
            <input
              class="userpasswordinputbox"
              placeholder="Enter Password"
              v-model="Values.password"
            />
          </div>
          <div class="RememberMediv">
            <input type="checkbox" class="Remembercheckbox" />
            <p class="RememberMetext">Remember me</p>
          </div>
          <div class="Loginbtndiv">
            <button class="loginbtn">Register</button>
          </div>
          <div class="Signinwithdiv">
            <div class="leftLine"></div>
            <div class="signinwithtext">Sign up using</div>
            <div class="rightLine"></div>
          </div>
          <div class="socialicons">
            <i class="pi pi-facebook"></i>
            <i class="pi pi-twitter"></i>
            <i class="pi pi-google"></i>
          </div>
        </form>
        <div class="Registerdiv">
          <p class="Registercontent">
            Already have an account ? <RouterLink to="/">Login</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Overall container */
.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

/* Left container */
.left-container {
  padding: 20px;
  text-align: center;
}

.left-container div {
  margin-bottom: 10px;
}

.left-container h2 {
  margin-top: 0;
}

/* Right container */
.Right-cont {
  margin-left: 20px;
}

.logindiv {
  width: 300px; /* Adjust as needed */
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.heading {
  text-align: center;
}

.usernamediv,
.useremaildiv,
.userpassworddiv,
.RememberMediv,
.Loginbtndiv {
  margin-bottom: 15px;
}

.usernameinputbox,
.useremailinputbox,
.userpasswordinputbox {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.Remembercheckbox {
  margin-right: 10px;
}

.loginbtn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.Signinwithdiv {
  display: flex;
  align-items: center;
}

.leftLine,
.rightLine {
  flex: 1;
  height: 1px;
  background-color: #ccc;
}

.signinwithtext {
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 12px;
  color: #777;
}

.socialicons {
  display: flex;
  justify-content: center;
}

.pi {
  font-size: 24px;
  margin: 0 5px;
  color: #777;
}

/* Media Query for responsiveness */
@media (max-width: 768px) {
  .Container {
    flex-direction: column;
    align-items: stretch;
  }

  .Right-cont {
    margin-left: 0;
    margin-top: 20px;
  }

  .logindiv {
    width: 100%;
  }
}
</style>
