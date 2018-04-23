import Vue from 'vue'
import Router from 'vue-router'
import ClassTeams from '@/components/ClassTeams'
import LoyaltyTeam from '@/components/LoyaltyTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClassTeams',
      component: ClassTeams
    },
    {
      path: '/LoyaltyTeam',
      name: 'LoyaltyTeam',
      component: LoyaltyTeam
    }
  ]
})
