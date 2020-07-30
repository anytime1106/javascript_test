<template lang="html">
    <div class="home" v-if="home">
        {{ data }}
    </div>
</template>

<script>
export default {
  data: function () {
    return 'hello vue home'
  }
}
</script>
