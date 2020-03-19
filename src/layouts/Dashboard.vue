<template>
  <q-layout view="hHh lpR fFf">


    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="true"
      content-class="bg-primary text-white  rounded-drawer"
    >
      <q-scroll-area class="fit" >
        <q-list >
          <q-item clickable v-ripple v-for="(item,index) in drawerItems" :key="item.title" :to="item.to" >
            <q-item-section avatar>
              <q-icon :name="item.icon" color="white" class="q-py-lg q-pt-lg"/>
            </q-item-section>
            <q-item-section>
              {{item.title}}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>



    <q-page-container>
      <div class="row">
        <div v-if="$q.screen.width>1024" class="col-md-3 col-lg-2 bg-grey-1  q-pl-md" style="height: 100vh;">{{$q.screen.width}} and {{$q.screen.name}}</div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-10">
          <router-view />
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="add" color="primary" />
        </q-page-sticky>
      </div>

    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        miniState:true,
        drawerItems:[
          {title:'Home',icon:'home',to:'/home'},
          {title:'Messages',icon:'message',to:'/message'},
          {title:'Profile',icon:'account_circle',to:'/profile'},
          {title:'Settings',icon:'settings',to:'/settings'}
        ]
      }
    }
  }
</script>


<style lang="scss">
  .rounded-drawer{
    border-radius: 0 0 18px 0;
  }
  .some-class{
    color:blue;
  }
</style>
