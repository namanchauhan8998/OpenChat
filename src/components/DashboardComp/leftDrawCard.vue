<template>
<!--  <q-card class="my-card shadow-15 full-width"  v-ripple style="border-radius: 19px; background-color: #0559FD">-->
<!--  <q-card-section horizontal>-->
<!--    <q-card-section class="col-3 ">-->
<!--    <circle-image :imgurl="imgurl"></circle-image>-->
<!--    </q-card-section>-->
<!--    <q-card-section class=" col-9">-->
<!--      <div class="text-overline text-white">{{name}}</div>-->
<!--      <div class="text ellipsis text-white">{{text}}</div>-->
<!--      <div class="text-caption text-grey">-->
<!--      </div>-->
<!--    </q-card-section>-->
<!--  </q-card-section>-->
<!--  </q-card>-->
  <q-item clickable v-ripple clickable class="shadow-23 full-width" style="background-color: #0559FD;border-radius: 20px 0 20px 0; ">
    <q-item-section side>
      <q-avatar rounded size="48px">
        <img :src="imgurl" />
        <q-badge floating color="teal">new</q-badge>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label >{{name}}</q-item-label>
      <q-item-label caption class="ellipsis-2-lines text-white">{{text}}</q-item-label>
    </q-item-section>
    <q-item-section side class="text-white">
      3 min ago
    </q-item-section>
  </q-item>
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
