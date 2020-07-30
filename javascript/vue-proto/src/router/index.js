import Vue from 'vue'
import Router from 'vue-router'
import TopNavBar from '@/components/TopNavBar'
import ServerListSide from '@/components/ServerListSide'
import ServerListContent from '@/components/ServerListContent'
import ModuleStatus from '@/components/ModuleStatus'
import HomeSide from '@/components/HomeSide'
import HomeHead from '@/components/HomeHead'
import HomeContent from '@/components/HomeContent'
import ContentSourceCodeView from '@/components/ContentSourceCodeView'
import ContentProjectList from '@/components/ContentProjectList'
import ContentModuleListTreeView from '@/components/ContentModuleListTreeView'
import ContentHeader from '@/components/ContentHeader'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: TopNavBar,
        homeHead: HomeHead,
        homeContent: HomeContent,
        homeSide: HomeSide
      },
      children: [
        {
          path: '/home',
          components: {
            serverListContent: ServerListContent,
            moduleStatus: ModuleStatus
          } 
        }
      ]
    },
    {
      path: '/dashboard',
      props: true,
      components: {
        default: TopNavBar,
        serverListSide: ServerListSide,
        contentProjectList: ContentProjectList
      }
    },
    {
      path: '/dashboard/module/:id',
      name: 'moduleList',
      props: true,
      components: {
        default: TopNavBar,
        serverListSide: ServerListSide,
        contentHeader: ContentHeader,
        contentModuleListTreeView: ContentModuleListTreeView,
        contentSourceCodeView: ContentSourceCodeView,
        moduleStatus: ModuleStatus
      }
    }
  ]
})
