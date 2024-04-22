<script setup>
import UserProfile from './User-Profile.vue';
import UserInfo from './User-Info.vue';
import userMedia from './User-Media.vue'
import AttachedFile from './Attached-file.vue';

</script>

<template>
  <div id="Container">
    <div id="header">
      <img src="../../../../../Utils/backdrop.jpg" id="image" />
      <div id="header-content">
        <h4 id="header-text">My Profile</h4>
        <i class="pi pi-ellipsis-v" id="styles"></i>
      </div>
    </div>
    <div class="user-profile">
      <UserProfile class="profile" />
    </div>
    <div class="user-info">
      <div>

        <UserInfo />
        <userMedia />
        <AttachedFile />
      </div>

    </div>
  </div>
  <div>

  </div>
</template>

<style scoped>
#header {
  height: 22vh;
  width: inherit;
}

#img-div {
  max-width: 90%;
  height: auto;
  position: relative;
  display: block;
  margin: 0 auto;
  min-width: 30%;
}

#image {
  width: 100% !important;
  height: 22vh !important;
  display: block;
}

#header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 25vw;
  padding-left: 1%;
}

#header-text {
  color: white;
}

#styles {
  color: white;
  font-size: 15px;
}

.user-profile {
  height: 16vh;
  width: 27vw;
  border-bottom: 1px solid #454547;
}

.profile {
  position: relative;
  bottom: 35px;
}

.user-info {
  height: 58vh;
  padding: 10px 30px;
  overflow: auto;
  scrollbar-width: none; 
}

@media screen and (max-width: 990px) {
  #header {
    height: 22vh;
    width: 100%;
  }

  #header-content {
    width: 94vw;
    padding-left: 3%;
  }

  .user-profile {
    width: 100vw;

  }

  #styles {
    color: white;
  }

  .user-info {
    padding: 10px 30px;
    height: 49vh;
   
  }
}
</style>
