<template>

  <q-item clickable v-ripple clickable class="bg-grey-2  shadow-23 full-width" style="border-radius: 20px 0 20px 0; ">
    <q-item-section side>
      <q-avatar rounded size="48px">
        <img :src="imgurl" />
        <q-badge floating color="teal">new</q-badge>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label >{{name}}</q-item-label>
      <q-item-label caption class="ellipsis-2-lines text-black">{{text}}</q-item-label>
    </q-item-section>
    <q-item-section side class="text-black">
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
