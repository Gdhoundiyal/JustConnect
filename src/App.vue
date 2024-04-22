<script setup>

import HeaderSec from './components/HomePage/Header/Main-Header.vue'
import ProfileSec from './components/HomePage/Profile/Profile-Sec.vue';
import ChatScreen from './components/HomePage/ChatScreen/Main-ChatScreen.vue'
import utilities from '../Utils/utilities.js'


console.log('utilities',utilities)

</script>

<template>
  <div id="App-Container">
    <div id="Header-Sec">
      <HeaderSec />
    </div>
    <div id="Profile-Sec">
      <ProfileSec />
    </div>
    <div id="Chat-Sec">
      <ChatScreen />
    </div>
  </div>
</template>

<style scoped>

#App-Container {
  display: flex;
}

#Header-Sec {
  height: 100vh;
  width: 5vw;
  background-color: #2E2E2E;
  color: #878A92;
}
#Profile-Sec {
  height: 100vh;
  width: 27vw;
  background: #262626;
  color: #878A92;
}
#Chat-Sec {
  height: 100vh;
  width: 70vw;
  background: #2E2E2E;
  color: #878A92;
}

@media screen and (max-width: 990px) {
  #Container {
    display: block;
  }
  #Header-Sec {
    /* position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100vw; */
  display: none;

  }
  #Profile-Sec {
  /* height: 93vh;
  width: 100vw; */
  display: none;

}
#Chat-Sec {
  /* display: none; */
  height: 100vh;
  width: 100vw;
}
}
</style>
