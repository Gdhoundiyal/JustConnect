<script setup>
import { useCounterStore } from '@/stores/counter.js';
// import { storeToRefs } from 'pinia';

const store = useCounterStore()

// const Screen = storeToRefs(store)
function ChangeScreenValue(name) {
  console.log(store.screen.name)

    store.changeVal(name)

  console.log(store.screen,name)

}
console.log(store.screen)
</script>
<template>
  <div id="header-Container">
    <div id="icons">
      <i class="pi pi-inbox" id="styles"></i>
      <i class="pi pi-envelope" id="styles" @click="ChangeScreenValue('Profile')"></i>
      <i class="pi pi-comment" id="styles" @click="ChangeScreenValue('Chat')"></i>
      <i class="pi pi-address-book" id="styles" ></i>
      <i class="pi pi-phone" id="styles"></i>
      <i class="pi pi-bookmark bookmark" id="styles"></i>
      <i class="pi pi-cog setting" id="styles"></i>
      <i class="pi pi-moon added moon" id="styles"></i>
      <i class="pi pi-user added profile" id="styles"></i>
    </div>
    <div id="icons">
      <i class="pi pi-moon" id="styles"></i>
      <i class="pi pi-user" id="styles"></i>
    </div>
  </div>
</template>

<style scoped>
#header-Container {
  display: flex;
  flex-direction: column;
  height: 97vh;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

#icons {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 3rem;
}

#styles {
  font-size: 1rem;
}

.added {
  display: none;
}

@media screen and (max-width: 990px) {

  .pi-inbox,
  .pi-moon,
  .pi-user {
    display: none;
  }

  .added {
    display: flex;

  }

  #header-Container {
    display: flex;
    height: 10vh;
    flex-direction: row;
    align-items: center;
    padding: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  #icons {
    display: flex;
    flex-direction: row;
    gap: 0;
  }

  #styles {
    font-size: 1rem;
    width: 14.8vw;
  }
}

@media screen and (max-width: 540px) {
  .profile {
    display: none;
  }

  #styles {
    width: 16.8vw;
  }
}

@media screen and (max-width: 400px) {
  .moon {
    display: none;
  }

  #styles {
    width: 19.8vw;
  }
}

@media screen and (max-width: 300px) {
  .setting {
    display: none;
  }

  #styles {
    width: 23.8vw;
  }
}
</style>
