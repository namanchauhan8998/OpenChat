<template>
  <div>
    <div v-if="loading" class="absolute-center text-center">
      <div class="text-h6">Connecting to the server...</div>
      <q-circular-progress
        indeterminate
        size="50px"
        color="primary"
        class="q-ma-md"
      />
    </div>
    <q-layout v-else view="hHh lpR fFf">


      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="true"

        content-class="bg-primary text-white  rounded-drawer"
      >
        <q-scroll-area class="fit" >
          <q-list >
            <q-item clickable v-ripple v-for="(item,index) in drawerItems" :key="item.title" :to="item.to" @click="item.callback" >
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
          <LeftDrawer></LeftDrawer>
          <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <router-view  :myProps="myProps"></router-view>
          </div>
          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary" />
          </q-page-sticky>
        </div>
      </q-page-container>

    </q-layout>
  </div>
</template>

<script>
  import LeftDrawCard from "../components/DashboardComp/leftDrawCard";
  import LeftDrawer from "./LeftDrawer";
  import io from 'socket.io-client';
  export default {
    components: {LeftDrawer, LeftDrawCard},
    data () {
      return {
        loading:'true',
        socket:{},
        drawer: true,
        miniState:true,
        token:'arjun',
        drawerItems:[
          {title:'Home',icon:'home',to:'/home',callback:false},
          {title:'Messages',icon:'message',to:'/message',callback:false},
          {title:'Profile',icon:'account_circle',to:'/profile',callback:false},
          {title:'Settings',icon:'settings',to:'/settings',callback:false},
          {title:'logout',icon:'exit_to_app',callback:this.logout}
        ]
      }
    },
    watch:{

    },
    created() {
      let vm = this;
      this.token = localStorage.getItem('token');
      let socket = io(`http://localhost:3000?token=${this.token}`);
      socket.on('connect',()=>{console.log('connected to server');vm.loading = false});

      this.socket = socket;
      this.connected = socket.connected;
      socket.on('data',(query)=>{console.log(query)});

      console.log('in Layout',this.socket)
      socket.on('disconnect',()=>{
        vm.$q.dialog({
        title: 'Disconnected',
        message: 'You are now disconnected from the server'
      })})
    },
    methods:{
      logout(){
        localStorage.removeItem('token')
        this.$router.push('/')
      }
    },
    computed:{

      myProps(){
        return this.socket;
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
