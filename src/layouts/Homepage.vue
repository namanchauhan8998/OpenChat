<template>
  <q-layout   class="shadow-6 rounded-borders">
      <q-header elevated class="row" elevated bordered style="background-color: #100E17">
        <q-toolbar class="col ">
          <q-toolbar-title class="q-dialog__title">Open Chat</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>

</template>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
