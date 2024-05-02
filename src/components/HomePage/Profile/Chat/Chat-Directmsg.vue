<script setup></script>

<template>
  <div class="Container">
    <div class="header-box">
      <p class="text-chat">Direct Messages</p>
      <i class="pi pi-plus"></i>
    </div>
    <div class="User-container">
      <div class="User-box">
        <div class="img-div">
          <img
            src="../../../../../Utils/adamzempa.jpg"
            alt="An Image of a Man"
            height="34px"
            width="34px"
            class="image"
          />
          <div class="Status"></div>
        </div>
      </div>
      <p>Catherine Langford</p>
    </div>
    <div class="User-container">
      <div class="User-box">
        <div class="img-div">
          <img
            src="../../../../../Utils/adamzempa.jpg"
            alt="An Image of a Man"
            height="34px"
            width="34px"
            class="image"
          />
          <div class="Status"></div>
        </div>
      </div>
      <p>Lousis carten</p>
    </div>
    <div class="User-container">
      <div class="User-box">
        <div class="img-div">
          <img
            src="../../../../../Utils/adamzempa.jpg"
            alt="An Image of a Man"
            height="34px"
            width="34px"
            class="image"
          />
          <div class="Status"></div>
        </div>
      </div>
      <p>shonk adem</p>
    </div>
    <div class="User-container">
      <div class="User-box">
        <div class="img-div">
          <img
            src="../../../../../Utils/adamzempa.jpg"
            alt="An Image of a Man"
            height="34px"
            width="34px"
            class="image"
          />
          <div class="Status"></div>
        </div>
      </div>
      <p>steve ruth Bee</p>
    </div>
    <div class="User-container">
      <div class="User-box">
        <div class="img-div">
          <img
            src="../../../../../Utils/adamzempa.jpg"
            alt="An Image of a Man"
            height="34px"
            width="34px"
            class="image"
          />
          <div class="Status"></div>
        </div>
      </div>
      <p>charlie</p>
    </div>
  </div>
</template>

<style scoped>
.Container {
  padding: 0px 30px;
  margin-top: 20px;
}
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
}

.User-container {
  display: flex;
  align-items: center;
  margin: 2px 8px;
}
.User-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pi-plus {
  font-size: 12px;
  padding: 5px;
  background-color: #151a16;
}

.img-div {
  margin-right: 10px;
  display: flex;
}

.image {
  border-radius: 50%;
}

.Status {
  height: 7px;
  width: 7px;
  background-color: green;
  border-radius: 50%;
  position: relative;
  top: 25px;
  right: 7px;
}
</style>
