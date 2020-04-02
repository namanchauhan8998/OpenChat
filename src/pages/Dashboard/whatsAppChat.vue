
<template>
  <q-page>
    <div class="q-pa-lg row">
      <q-list style="width: 100%;">

        <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          bg-color="amber"
          :text="['heloo der']"
          stamp=""
        >
          <!-- <q-spinner-dots size="2rem" />-->
        </q-chat-message>
        <q-chat-message v-if="sentVal"
                        name=""
                        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                        stamp="7 minutes ago"
                        :text="['Hey there!']"
                        sent
                        text-color="white"
                        bg-color="primary"
        >Have you seen Quasar?
        </q-chat-message>
      </q-list>
      <!--div for sent messages -->

      <div class="absolute-bottom row">
        <q-input class="col-10 bg-grey-3" label="Type here" rounded v-model="sentMessage"></q-input>
        <q-btn class="col-2 bg-grey-3"  rounded dense label="Send" @click="sendMessage"></q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>

  export default {
    data(){
      return{
        sentVal:false,
        sentMessage:'',
      }
    },
    methods:{
      sendMessage(){
        this.sentVal=true
      }
    },
    created() {
      let vm=this;



    },
    props: {
      myProps: {},

    },
  }
</script>
