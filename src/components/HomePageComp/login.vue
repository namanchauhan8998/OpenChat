<template>
  <div class="row justify-center">
    <q-card bordered class="col-xs-11 col-sm-11 col-md-8 col-lg-6 shadow-20  self-center bg-grey-2 "   style="min-width:40%;border-radius: 15px" >
      <q-card-section>
        <div class="col-10">
          <q-input class="col-12  q-py-md " rounded filled outlined v-model="email"  label="Email">
            <template v-slot:append>
              <q-avatar>
<!--                <q-img src=""></q-img>-->

              </q-avatar>
            </template>
          </q-input>
          <q-input class="col-12  q-py-md " rounded filled outlined v-model="password" label="Password" >
            <template v-slot:append>
              <q-avatar>
<!--                <q-img src="../statics/icons/https-24px.svg"></q-img>-->
              </q-avatar>
            </template>
          </q-input>


        </div>
        <div class="row justify-center q-py-lg">
          <q-btn class="col-5 center " rounded push elevated color="" text-color="black" label="Login"  :to="'/home'" />
        </div>
        <div class="row justify-center ">
          <q-btn class="col-7 justify-end "  unelevated  text-color="black" label="Create Account" :to="'/create-account'" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        email:'',
        password:'',
        color:'#eeeeee',
        to:''

      }
    },
    methods:{
      route:function(){
      },
      check:function(){
        if(this.emailId=='naman'&& this.password=='naman'){
            this.to='/'
        }


        // let vm=this;
        // let body = {
        //   email: vm.email,
        //   password: vm.password
        // };
        //
        // this.$axios({
        //   method: 'post',
        //   url: 'https://boardinf.herokuapp.com/users/login',
        //   data: body
        // }).then(value => {
        //   vm.passed=true;
        //   vm.$router.push('/');
        //   this.$q.dialog({
        //     title: 'Success',
        //     message: 'Your Account was Successfully Created'
        //
        //   })
        //
        // }).catch((err)=>{
        //
        //   this.$q.dialog({
        //     title: 'Error',
        //     message: 'Account already exists'
        //
        //   })
        // })
      }
    }

  }
</script>

<style scoped>

</style>
