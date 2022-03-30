<template>

  <div class="mainContainer">
    <div class="imgContainer">
      <img class="pcShow" src="../assets/PC.jpg" alt="Role Display" />
      <img class="ipadShow" src="../assets/ipad.jpg" alt="Role Display" />
      <img class="moblieShow" src="../assets/moblie.png" alt="Role Display" />
    </div>

    <div class="ajaxDataShow">
      <img alt="imgDisplay" />
    </div>
  </div>
  
</template>

<script>
export default {
  name: "CssMedia",
};
</script>

<style>
    * {
    margin: 0;
    padding: 0;
    }
    div > img {
    width: 100vw;
    display: none;
    }
    @media screen and (max-width: 767px) {
    .imgContainer .moblieShow {
        display: inline-block;
    }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    .imgContainer .ipadShow {
        display: inline-block;
    }
    }
    @media screen and (min-width: 1024px) {
    .imgContainer .pcShow {
        display: inline-block;
    }
    }
</style>