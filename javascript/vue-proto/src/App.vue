<template>
  <div id="app">
    <div>
      <img src="./assets/cover.png" width="250" height="75">
    </div>
    <router-view></router-view>
    <router-view name="homeHead"></router-view>
    <router-view name="homeSide"></router-view>
    <router-view name="homeContent"></router-view>
    <router-view name="serverListSide"></router-view>
    <router-view name="serverListContent"></router-view>
    <router-view name="contentProjectList"></router-view>
    <router-view name="contentHeader"></router-view>
    <router-view name="contentModuleListTreeView"></router-view>
    <router-view name="contentSourceCodeView"></router-view>
    <router-view name="moduleStatus"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .right {
    float:right;
  }
  .solid {
    border-style: solid;
    border-color: red;
  }
  .left {
    float:left;
  }

</style>
