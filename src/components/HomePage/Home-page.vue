<script setup>
// import ProfileSec from './Profile/Profile-Sec.vue'
import HeaderSec from './Header/Main-Header.vue'
import MainChatScreen from './ChatScreen/Main-ChatScreen.vue'
</script>

<template>
  <div id="App-Container">
    <div id="Header-Sec">
      <HeaderSec />
    </div>

    <div id="Chat-Sec">
      <MainChatScreen />
    </div>
  </div>
</template>

<style scoped>
#App-Container {
  display: flex;
  overflow: hidden;
}

#Header-Sec {
  height: 100vh;
  width: 5vw;
  background-color: #2e2e2e;
  color: #878a92;
}
#Profile-Sec {
  height: 100vh;
  width: 27vw;
  background: #262626;
  color: #878a92;
}
#Chat-Sec {
  height: 100vh;
  width: 70vw;
  background: #2e2e2e;
  color: #878a92;
}

@media screen and (max-width: 990px) {
  #Container {
    display: block;
  }
  #Header-Sec {
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100vw;
    /* display: none; */
  }
  #Profile-Sec {
    height: 93vh;
    width: 100vw;
    /* display: none; */
  }
  #Chat-Sec {
    display: none;
    /* height: 100vh;
    width: 100vw; */
  }
}
</style>
