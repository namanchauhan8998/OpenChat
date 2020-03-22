<template>
  <q-page :style-fn="myTweak" >
    <div class="row justify-center" >
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-grey-1 shadow-12  absolute-center  " style="min-height: 95%; ">
        <div class="row justify-center">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 absolute-center ">
                <h3>Hello Form Home</h3>
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
          // "offset" is a Number (pixels) that refers to the total
          // height of header + footer that occupies on screen,
          // based on the QLayout "view" prop configuration

          // this is actually what the default style-fn does in Quasar
          return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
          }
        }
      },
      data(){
          return{
            header:'About BBPS ',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
              'when an unknown printer took a galley of type and scrambled it to make a type specimen ' +
              'book. It has survived not only five centuries, but also the leap into electronic typesetting,' +
              ' remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets' +
              ' containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
              'including versions of Lorem Ipsum.'
          }
      }
    }
</script>

<style scoped>

</style>
