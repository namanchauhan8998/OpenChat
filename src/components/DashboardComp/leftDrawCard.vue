<template>
  <q-card class="my-card shadow-15 full-width"  v-ripple style="border-radius: 19px; background-color: #0559FD">
  <q-card-section horizontal>
    <q-card-section class="col-3 ">
    <circle-image :imgurl="imgurl"></circle-image>
    </q-card-section>
    <q-card-section class=" col-9">
      <div class="text-overline text-white">{{name}}</div>
      <div class="text ellipsis text-white">{{text}}</div>
      <div class="text-caption text-grey">
      </div>
    </q-card-section>


  </q-card-section>
  </q-card>
</template>

<script>
    import CircleImage from "./circleImage";
    export default {
        name: "leftDrawCard",
      components: {CircleImage},
      props:{
          imgurl: '',
          name:'',
        text:'',
      }
    }
</script>

<style scoped>

</style>
