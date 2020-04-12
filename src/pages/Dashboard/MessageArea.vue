<template>
  <q-page :style-fn="myTweak">
 <div class="row  flex flex-center">
  <q-card class="col-10 bg-grey-2" style="margin-top: 20px">
  <q-card-section>
    <div class="row">
      <q-scroll-area class="col-12" style="height:80vh" :onload="onLoad"
      visible
      >
        <div class="q-pa-md row text-black">
          <q-infinite-scroll  reverse class="col-12" >
            <template slot="loading">
              <div class="row justify-center q-my-md">
                <q-spinner color="primary" name="dots" size="40px" />
              </div>
            </template>
            <q-chat-message v-for="(mes,index) in object"
                            :key="mes.name"
                            :name=[mes.name]
                            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                            stamp="7 minutes ago"
                            :text=[mes.message]
                            :sent="mes.sent"
                            text-color="black"
                            bg-color="secondary"
            >
            </q-chat-message>
          </q-infinite-scroll>
        </div>
      </q-scroll-area>
      <div class="col-12">
        <q-toolbar class=" text-black row">
          <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
          <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="message" placeholder="Type a message" />
          <q-btn round flat icon="send" color="black" @click="sendMsg"/>
        </q-toolbar>
      </div>
    </div>
  </q-card-section>
</q-card>
 </div>

  </q-page>
</template>

<style scoped>

</style>


<script>

  import io from "socket.io-client";
  import jwt_decode from "jwt-decode";
  export default {
    name:"Index",
    data(){
      return{
        message:'',
        handle:'',
        mysocket:'',
        isconnected:false,
        object:[],
        sokid:'',
        sentCheck:false,
        Details:[]

      }
    },
    created() {
      let vm=this;
      let socket=io.connect('http://localhost:3001');
      this.mysocket=socket;
      console.log("before",socket.id)
      var toked = localStorage.getItem('token');
      var decoded=jwt_decode(toked);
      console.log(decoded)
      this.Details=decoded;
      this.handle=this.Details.username;

      socket.on('connect',()=>{
        vm.sokid=socket.id;

        console.log("before",socket.id)

      });
      socket.on('chat',function (data) {
        vm.isconnected=true;

        console.log(data.handle+' message '+data.message);

        vm.object.push(
          {
            name: data.handle,
            message: data.message,
            sent:(data.id === vm.sokid)
          });
        console.log(vm.object);
      });

    },

    methods:{
      onLoad (index, done) {
          if (this.object.length>7) {
            this.object.splice(0, 0, {},{},{},{},{},{})
            done()
          }
      },

      myTweak(offset) {
        return {minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      },
      scroll () {
        this.$refs.scrollArea.setScrollPosition(this.$q.screen.height)

      },
      sendMsg(){
        let vm=this;
        // vm.sentCheck=true
        vm.mysocket.emit('chat',{
          handle:vm.handle,
          message:vm.message,
          id:vm.sokid

        })
        this.scroll();
      }
    }
  }

</script>
