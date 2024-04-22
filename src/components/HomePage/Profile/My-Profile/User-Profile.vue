<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()
console.log(store.count)

</script>
<template>
  <div class="Container">
    <div>
      <div class="user-img">
        <div class="img-div">
          <img src="../../../../../Utils/adamzempa.jpg" alt="An Image of a Man" height="64px" width="64px" class="image">
      </div>
    </div>
    <div class="user-text" >
        <h3 class="name">Adam Zempa</h3>
        <p class="title">Front End Developer</p>
    </div>
    </div>
  </div>
</template>

<style scoped>
.Container {
  height: auto;
  width: 27vw;
  display: flex;
  justify-content: center;
}

.img-div {
  height: 68px;
  width: 68px;
  border-radius: 50%;
  background: #3A3A3A;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image{
  border-radius: 50%;
}

.user-img {
  display: flex;
  justify-content: center;
}
.user-text{
    text-align: center;
}
.name{
    font-size: 14px;
    margin: 0;
    padding: 8px;
    padding-bottom: 0;
}
.title{
    font-size: 12px;
    margin: 0;
    padding: 8px;
}
@media  screen and (max-width: 990px) {
    .Container{
        width: 100vw;
    }
}
</style>
