<script setup>
import ChatDirectmsg from './Chat-Directmsg.vue';
import ChatHeader from './Chat-header.vue';
import ChatBody from './Chat-Fav.vue';
import ChatGropus from './Chat-Groups.vue'
</script>

<template>
    <div >
        <ChatHeader class="chat-container" />
        <div class="body">
            <ChatBody/>
            <ChatDirectmsg/>
            <ChatGropus/>
        </div>
    </div>
</template>

<style scoped>
.chat-container{
    height: 20vh;
}

.body{
    height: 80vh;
    overflow: auto;
    scrollbar-width: none;
}
</style>