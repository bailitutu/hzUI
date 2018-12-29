import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import buttonTest from '@/pages/buttonTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '测试',
      component: buttonTest
    }
  ]
})
