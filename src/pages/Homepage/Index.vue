<template>
  <q-page :style-fn="myTweak" style="background-image: linear-gradient(to bottom right,#1976D2, #FFFDE4);">

    <div class="row justify-center" >
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10  shadow-23 absolute-center  " style="min-height: 80%; border-radius: 18px; ">
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
    methods:{
      authentication:function(){
        if(this.emailId=='naman'&& this.password=='naman'){
          this.$router.push('/home')
        }
        // else this.to='Error404'
        // let vm=this;
        // let body={
        //   email:vm.emailId,
        //   password: vm.password
        // }
        //
        // this.$axios({
        //   method: 'post',
        //   url: 'https://boardinf.herokuapp.com/users/login',
        //   data: body
        // }).then(value => {
        //   vm.passed=true;
        //   vm.$router.push('/');
        //     }).catch((err)=>{
        //   vm.$q.dialog({
        //     title: 'Error',
        //     message: 'Wrong ID'
        //   })
        // })

      },
      myTweak (offset) {
        // "offset" is a Number (pixels) that refers to the total
        // height of header + footer that occupies on screen,
        // based on the QLayout "view" prop configuration

        // this is actually what the default style-fn does in Quasar
        return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
           }
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

</style>
