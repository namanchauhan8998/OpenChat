<template v-slot:avatar>
  <img
    class="q-message-avatar q-message-avatar--sent"
    :src="imgurl"
  >
</template>

<script>
    export default {
        name: "circleImage",
        props:{
            imgurl:''
        }
    }
</script>

<style scoped>

</style>
