<template>
  <q-page  class="bg-grey-4 q-pt-xl">
    <div class=" row justify-center " style="" >
      <div class="col-xs-12 col-sm-12 col-md-12 col-xl-12 bg-white">
        <div class="col-xs-12 col-sm-12 col-md-4 col-xl-4 absolute-center">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              v-for="detail in newAccount" v-bind:key="detail"
              filled
              rounded
              v-model="detail.firstName"
              :label="detail.lable"
              :hint="detail.hint"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>

  export default {
    data () {
      return {
        newAccount:[
          {firstName:'',lable:'First Name',hint:'First Name'},
          {lastName: '',lable:'Last Name ',hint:'Last Name'},
          {username:'',lable:'User Name',hint:'User Name'},
          {email:'',lable:'Email Id ',hint:'Email Id'},
          {password:'',lable:'Password',hint:'Password'},
        ],
      passed:false,
      accept: false,

      }
    },
    computed:{

    },

    methods: {

      myTweak (offset) {
        // "offset" is a Number (pixels) that refers to the total
        // height of header + footer that occupies on screen,
        // based on the QLayout "view" prop configuration

        // this is actually what the default style-fn does in Quasar
        return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
      },
      onSubmit:function () {
        let vm=this;
        let body = {
          FirstName: vm.newAccount.firstName,
          LastName: vm.newAccount.LastName,
          email: vm.newAccount.email,
          password: vm.newAccount.password
        };

        this.$axios({
          method: 'post',
          url: 'https://boardinf.herokuapp.com/users/signup',
          data: body
        }).then(value => {
          vm.passed=true;
          vm.$router.push('')
          this.$q.dialog({
              title: 'Success',
              message: 'Your Account was Successfully Created',
            }

          )

        }).catch((err)=>{

          this.$q.dialog({
            title: 'Error',
            message: 'Account already exists'

          })
        })
      }
    }

  }
</script>
