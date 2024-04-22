<script setup>
import {useCounterStore} from '@/stores/counter'
const store = useCounterStore()
console.log(store.count, store.name)
store.name = "harish"

const {colors} = store;
console.log(colors)

// setTimeout(() => {
//     store.increment()
//     console.log(store.count, store.name)
// }, 3000);

</script>
<template>
    <div class="Container">
        <div class="header-box">
            <h3 class="text-chat">Chats</h3>
            <i class="pi pi-plus"></i>
        </div>
        <div class="search-box">
            <input placeholder="Search here.." class="search" />
            <div class="iconDiv">
                <i class="pi pi-search "></i>
            </div>
        </div>
    </div>
</template>

<style scoped>

.Container {
    padding: 0px 30px;
}
.header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
}

.pi-plus {
    padding: 5px;
    background-color: #151A16;
}

.search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171717;
    padding: 11px 10px;
}

.search {
    background-color: #171717;
    border: none;
    font-size: 14px;
    color: #878A92;
}
.pi-search {
   cursor: pointer;
}
input:focus {
    outline: none;
 
}
</style>