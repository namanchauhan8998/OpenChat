<template>
    <q-page class="" style="background-color: #EBEDEE" >
      <div class="row justify-center" style="height: 100vh; width: 100ch" >
       <div class="bg-yellow self-center col-xs-12 col-xs-12 col-md-10 col-xl-10" style="width: 80%">
                <h2>{{header}}</h2>
         <p>{{text}}</p>
       </div>
      </div>
    </q-page>

</template>

<script>
    export default {
        name: "Index",
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
