<script setup>
import UserComponent from './My-Profile/User-Component.vue';
import ChatComponent from './Chat/Chat-Component.vue'
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()

const {screen} = storeToRefs(store)
console.log("from Profile sec", screen)
</script>

<template>
    <div>
      <template v-if="screen === 'Profile'">
      <UserComponent />
    </template>
      <template v-else-if="screen === 'Chat'">
      <ChatComponent />
    </template>
      <template v-else>
    <p>nothing</p>
    </template>
    </div>
</template>

<style>
</style>