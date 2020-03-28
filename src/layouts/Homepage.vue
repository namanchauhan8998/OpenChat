<template>
  <div class="">
    <q-layout view="rHh Lpr lff"  class="shadow-6 rounded-borders">
      <q-header elevated class="row" elevated bordered >
        <q-toolbar class="col ">
          <q-toolbar-title class="q-dialog__title">Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

<!--      <q-drawer-->
<!--        content-style="background-color:#1976D2"-->
<!--        v-model="drawer"-->
<!--        show-if-above-->
<!--        :mini="true"-->
<!--        :breakpoint="500"-->
<!--        width="200"-->
<!--        bordered-->
<!--      >-->

<!--        <q-list >-->
<!--          <q-item clickable v-ripple v-for="(item,index) in drawerItems" :key="item.title" :to="item.to" >-->
<!--            <q-item-section avatar>-->
<!--              <q-icon :name="item.icon" color="white" class="q-py-lg q-pt-lg"/>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              {{item.title}}-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </q-list>-->

<!--      </q-drawer>-->

      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        miniState: true,
        drawerItems:[
          {title:'Home',icon:'home',to:'/'},
          {title:'Messages',icon:'message',to:'/message'},
          {title:'Profile',icon:'account_circle',to:'/profile'},
          {title:'Settings',icon:'settings',to:'/setting'}
        ]
      }
    }
  }
</script>
