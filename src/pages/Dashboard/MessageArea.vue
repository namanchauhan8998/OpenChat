<template>

  <q-page>
    <div class="messagePrint row">
      <q-list style="width: 100%;">
        <!-- <q-spinner-dots size="2rem" />-->
        <p>socket id ={{sokid}}</p>
        <q-chat-message v-for="mes in object"
                        :key="mes.name"
                        :name=[mes.name]
                        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                        stamp="7 minutes ago"
                        :text=[mes.message]
                        :sent="mes.sent"
                        text-color="white"
                        bg-color="primary"
        >
        </q-chat-message>

      </q-list>
    </div>
    <div class="absolute-bottom row">

      <q-input dense v-model="handle" label="Name" rounded bg-color="grey-2" class="col-3"></q-input>
      <q-input dense v-model="message" label="Type Here" rounded bg-color="grey-2" class="col-10"></q-input>
      <q-btn @click="sendMsg" class="col-2" rounded label="SEND" ripple="true" ></q-btn>
    </div>
  </q-page>

</template>

<style scoped>

</style>


<script>

  import io from "socket.io-client";
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
        sentCheck:false

      }
    },
    created() {
      let vm=this;
      let socket=io.connect('http://localhost:3001');
      this.mysocket=socket;
      console.log("before",socket.id)

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
