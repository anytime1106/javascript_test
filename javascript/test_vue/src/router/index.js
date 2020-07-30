// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post.vue'
import Hello from '@/components/Hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      props: true
    }
  ]
})
