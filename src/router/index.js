import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import readcontent from '../components/readcontent/readcontent.vue'
import author from '../components/author/author.vue'

Vue.use(Router)

export default new Router({
  modeL: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/readcontent/',
      component: readcontent
    },
    {
      path: '/author/',
      component: author
    }
  ]
})
