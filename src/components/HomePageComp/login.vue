<template>
  <div class="row justify-center">
    <div class="text-white">{{error}}</div>
    <q-card bordered class="col-xs-11 col-sm-11 col-md-8 col-lg-6 shadow-20 self-center bg-grey-2 "   style="min-width:40%;border-radius: 15px; color: #ff" >
      <q-card-section>
        <div class="col-10">
          <q-input class="col-12  q-py-md text-accent"rounded filled outlined label-color="" v-model="email"  label="Email">
            <template v-slot:append>
              <q-avatar>
                <q-img src="statics/icons/mail-24px.svg"></q-img>

              </q-avatar>
            </template>
          </q-input>
          <q-input class="col-12  q-py-md text-black" rounded filled outlined v-model="password" label="Password" >
            <template v-slot:append>
              <q-avatar>
                <q-img src="statics/icons/lock.svg"></q-img>
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="row justify-center q-py-lg">
          <q-btn class="col-5 center " rounded push  text-color="black" label="Login" @click="login" />
        </div>
        <div class="row justify-center ">
          <q-btn class="col-7 justify-end "  unelevated  text-color="black" label="Create Account" :to="'/create-account'" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  import ApiRepository from "../../Repository/repository";

  export default {
    name: "login",
    data(){
      return{
        email:'',
        password:'',
        color:'#eeeeee',
        to:'',


      }
    },
    methods:{
      login(){
        let vm = this;
        ApiRepository
          .login(this.email,this.password)
          .then(res=>{
            if(res.status===200){
              localStorage.setItem('token',res.data.token);

              vm.$router.push('/home')
            }
            else {throw new Error('do something with cases in login');}
            console.log(res)
          })
          .catch(err=>{
            this.$q.dialog({
              title: 'Help Us Help You ',
              message: 'We might require something more than that to log you in...'

            })
          });
      }
    }

  }
</script>

<style scoped>

</style>
