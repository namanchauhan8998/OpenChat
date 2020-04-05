<template>
  <q-page class="bg" :style-fn="myTweak" style="background-color: #100E17" >
    <div class="row justify-center" >
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10  shadow-23 absolute-center bg-card">
        <div class="row justify-center">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 absolute-center ">
              <login></login>
          </div>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script>

  import Login from "../../components/HomePageComp/login";
  export default {
    name: 'PageIndex',
    components: {Login},
    data(){
      return{
        imgloc:'../statics/natureDark.jpg',
        emailId:'',
        password:'',
        to:'',
        size:'',

      }
    },
    created(){

    },
    methods:{

      myTweak (offset){
        return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      }
    },
    computed:{
      cColor(){
        let rtx = {};
        rtx.color = 'red';
        return rtx;
      }

    }

  }
</script>
<style>
.bg{
  /*background-image: linear-gradient(to bottom right,#1976D2, #FFFDE4);*/
}
.bg-card{
  min-height: 80%; border-radius: 18px;
}
</style>
