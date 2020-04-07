<template>
  <q-page  class="bg-grey-4 ">
    <div class=" row justify-center " style="" >
          <div class="self-center q-my-md">
            <q-form
              @submit="onSubmit"
              class="q-gutter-md"
            >
<!--              <q-input-->
<!--                v-for="(detail,index) in newAccount" :key="detail.title+index"-->
<!--                filled-->
<!--                rounded-->
<!--                v-model="detail.val"-->
<!--                :label="detail.lable"-->
<!--                :hint="detail.hint"-->
<!--                lazy-rules-->
<!--                :rules="[ val => val && val.length > 0 || 'Please type something']"-->
<!--              />-->
              <q-input
                filled
                rounded
                v-model="firstName"
                label="First Name"
                hint="First Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                rounded
                v-model="lastName"
                label="Last Name"
                hint="Last Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                rounded
                v-model="userName"
                label="User Name"
                hint="User Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                rounded
                v-model="email"
                label="Email Id"
                hint="Email Id"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                rounded
                v-model="password"
                label="Password"
                hint="Password"
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
      <p>{{url}}</p>
    </div>
  </q-page>
</template>
<script>

  import ApiRepository from "../../Repository/repository";

  export default {
    data () {
      return {
        // newAccount:[
        //   {val:'',  title:'firstName',    lable:'First Name',hint:'First Name'},
        //   {val:'',  title:'LastName',     lable:'Last Name ',hint:'Last Name'},
        //   {val:'',  title:'userName',     lable:'User Name',hint:'User Name'},
        //   {val:'',  title:'email',        lable:'Email Id ',hint:'Email Id'},
        //   {val:'',  title:'password',     lable:'Password',hint:'Password'},
        // ],
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
      passed:false,
      accept: false,
        url:''

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
        let vm = this;
        let foo = {};
        newAccount.map(element=>{
          foo[element.title] = element.val;
        });
        // vm.newAccount.map((input)=>{
        //     vm.url+=input.val+','
        //
        // })
        // console.log(vm.url)
        let object = this.data.val;

        ApiRepository
        // vm.firstName,vm.lastName,vm.email,vm.username,vm.password
          ('Arjun','bhd','')
          .signup(vm.firstName,vm.lastName,vm.userName,vm.email,vm.password)
          .then(res=>{
                console.log(res.data)
          }).catch(err=>{
            console.log('dkjasbkdjhlashl'+err.status)
            this.$q.dialog({
              title:"OPPS",
              message:"I am hungry"
            })
          });


      }
    }
  }
</script>
