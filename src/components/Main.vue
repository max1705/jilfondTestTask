<template>
  <div id="app">
    <header>
      <h1>Жилфонд</h1>
      <span>Пользователь</span>
    </header>
    <main>
      <aside class="sidebar">
        <div id="app">
          <h2>Поиск сотрудников</h2>
          <input type="text" v-model="search" v-on:keyup.enter="$store.commit('beforeGet', search)" v-on:keyup.delete="$store.commit('clearActive')" placeholder="Введите Id или имя">
          <h2>Результаты</h2>
          <ul>
            <li v-for="(user) in filteredUsers" :key="user.id"
							:class="{ 'active': $store.state.activeIndex === user.id }"
							@click="$store.commit('setActive', user.id)">
              <img src="../assets/avatar.png" alt="avatar" />
              <div class="userCard">
                <span class="userCardName">{{ user.username }}</span>
                <span class="userCardLightText">{{ user.email }}</span>
              </div>
            </li>
          </ul>
          <span class="userCardLightText">{{ $store.state.errorMsg }}</span>
          <div class="loader" :class="{ 'hiddenLoader': $store.state.preloader === false }"></div>
        </div>        
      </aside>
      <div class="content">
        <div v-if="$store.state.currentUser != null" class="userInfo">
          <InfoMenu :currentUser = $store.state.currentUser />
        </div>
        <span v-else class="userInfoTemp userCardLightText">Выберите сотрудника, чтобы посмотреть его профиль</span>
      </div>
    </main>
  </div>
</template>

<script>
  import InfoMenu from './InfoMenu.vue'
  export default({
    name: 'app',
    components: {
      InfoMenu
    },
    
    computed: {
      filteredUsers() {
        return this.$store.getters.filteredUsers; 
      }
    },
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../styles/styles.scss";
</style>
