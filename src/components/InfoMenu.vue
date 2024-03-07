<template>
  <div class="userInfoPhoto">
    <img src="../assets/bigAvatar.png" alt="avatar" />
  </div>
  <div class="userInfoDesc">
    <h2 class="userCardName">{{ $store.state.currentUser.name }}</h2>
    <div class="userCardEmailBlock"><span class="userCardName">email:</span> <span class="userCardLightText">{{ $store.state.currentUser.email }}</span></div>
    <div><span class="userCardName">phone:</span> <span class="userCardLightText">{{ $store.state.currentUser.phone }}</span></div>
    <div class="userCardAboutBlock"><span class="userCardName">О себе:</span></div>
    <div><span class="userCardLightText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.
    </span></div>
  </div>
</template>

<script>
export default {
  props: ['currentUser']
}

</script>

<style lang="scss">
  @import "../styles/styles.scss";
</style>