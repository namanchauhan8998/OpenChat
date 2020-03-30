<template>
  <q-dialog ref="dialog" @hide="onDialogHide" >
    <q-card class="q-dialog-plugin">
     <q-card-section class="text-h6">Title</q-card-section>
      <q-card-section>

        <q-input
          class="q-py-md"
          v-model="title"
          placeholder="Enter a Title"

        />

        <q-input
          class="q-py-md"
          v-model="maxUsers"
          placeholder="Max. Members"

        />

        <div class="q-pt-md">Group Security</div>
        <div>
          <q-radio v-model="protected" val="true" label="Private" />
          <q-radio v-model="protected" val="false" label="Public" />
        </div>


     </q-card-section>

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    props: {
      // ...your custom props
    },
    data(){
      return{
        title: '',
        maxUsers: 99,
        image: '',
        protected: false,

      }
    },
    methods: {
      // following method is REQUIRED
      // (don't change its name --> "show")
      show () {
        this.$refs.dialog.show()
      },

      // following method is REQUIRED
      // (don't change its name --> "hide")
      hide () {
        this.$refs.dialog.hide()
      },

      onDialogHide () {
        // required to be emitted
        // when QDialog emits "hide" event
        this.$emit('hide')
      },

      onOKClick () {
        // on OK, it is REQUIRED to
        // emit "ok" event (with optional payload)
        // before hiding the QDialog
        let vm = this;
        this.$emit('ok',{
          title: vm.title,
          maxUsers: vm.maxUsers,
          image: vm.image,
          protected: vm.protected
        })
        // or with payload: this.$emit('ok', { ... })

        // then hiding dialog
        this.hide()
      },

      onCancelClick () {
        // we just need to hide dialog
        this.hide()
      }
    }
  }
</script>
