<template>
  <q-page :style-fn="myTweak">
    <div class="row">
   <q-scroll-area class="col-12 " style="height: 100vh">
    <q-list bordered dark class="q-gutter-y-lg text-black">
    <q-card>
      <q-card-section>
        <h4 class="text-black text-weight-bold">Profile</h4>
      </q-card-section>
    </q-card>
      <q-card square class="bg-grey-3">
        <q-item-section class="row flex-center flex q-my-lg">
          <q-img :src="coverImg" class="coverImg col-12 self-center shadow-23" style="width: 300px;height: 300px; border-radius: 50%"/>
        </q-item-section>
        <q-card-section class="flex flex-center">
          <h4 class="self-center text-weight-bolder101">{{profileData.username}}</h4>
        </q-card-section>
      </q-card>
        <profile-nav :name="profileData.username" :icon-img="iconImg"></profile-nav>
    </q-list>
   </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
  import ProfileNav from "../../components/DashboardComp/ProfileNav";
  import jwt_decode from "jwt-decode"
  export default {
    name: "Profile",
    components: {ProfileNav},
    data(){
      return{
        coverImg:'https://placeimg.com/500/300/nature',
        iconImg:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        profileData:[]
      }

    },
    props: {
      myProps: {},
    },
    created() {
      var cat = localStorage.getItem('token');
      var decoded=jwt_decode(cat);
      console.log(decoded)
      this.profileData=decoded;
    },
    methods:{
      myTweak(offset) {
        return {minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      },
    }
  }
</script>

<style scoped>

</style>
