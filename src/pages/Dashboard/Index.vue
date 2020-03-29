<template>
  <q-page :style-fn="myTweak" >
    <div class="row justify-center" >
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-grey-1 shadow-12  absolute-center  " style="min-height: 95%; ">
        <div class="row justify-center  ">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                <q-input class="q-my-sm" outlined placeholder="Enter the resource tag here" v-model="resTag"/>
                <q-input class="q-my-sm" outlined placeholder="Enter the params object here" v-model="params"/>
            <q-btn class="q-my-sm" color="primary" label="send socket" @click="sendSocket"/>

          </div>
        </div>
      </div>
    </div>
  </q-page>


</template>

<script>
    export default {
        name: "Index",
      methods:{
        myTweak (offset) {
          return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
        },
        sendSocket(){
          this.myProps.emit(this.resTag,this.params)
        }
      },
      props:{
          myProps:{}
      },
      data(){
        return {
          resTag:'',
          params:''

        }
      },

      created() {
        console.log('in child',this.myProps)
      },

    }
</script>

<style scoped>

</style>
