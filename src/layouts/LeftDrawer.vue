<template>
  <div v-if="$q.screen.width>1024" class="col-md-3 col-lg-3 bg-grey-3 q-pa-sm" style="height: 100vh;">
    <div class="row q-gutter-y-sm q-pt-md q-scrollarea">

    <left-draw-card imgurl="https://cdn.quasar.dev/img/avatar2.jpg" name="Parul"  text="Aur sab Badiya"></left-draw-card>
    <left-draw-card imgurl="https://cdn.quasar.dev/img/avatar4.jpg" name="Arjun"  text="mei ghar bar hun bhai"></left-draw-card>
    <left-draw-card imgurl="https://cdn.quasar.dev/img/avatar3.jpg" name="Bhavya" text="Yo kachree kesa hai"></left-draw-card>
    <left-draw-card imgurl="https://cdn.quasar.dev/img/avatar6.jpg" name="Naman"  text="kya haal   hain bhai aajkal"></left-draw-card>
<!--    <left-draw-card v-for="(friend,index) in friendsDetails" :imgurl="friend.imageurl" :name="friend.name" :text="friend.text"></left-draw-card>-->
     </div>
    </div>
</template>
  <script>

    import LeftDrawCard from "../components/DashboardComp/leftDrawCard";
    export default {
        name: "LeftDrawer",
      components: {LeftDrawCard},
      data(){
          return{
            friendsDetails:[
              //format as imageurl:''
              //  name:'',
              //  text:''
            ]
          }
      },
      created() {
          //Do something for Contact Details and put in friendsDetails
      }
    }
</script>

<style scoped>

</style>
