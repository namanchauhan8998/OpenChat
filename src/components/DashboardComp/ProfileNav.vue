<template>
      <q-card>
        <q-tabs
         v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="about" label="About" />
          <q-tab name="photos" label="Photos" />
          <q-tab name="settings" label="Settings" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab"  animated>
          <q-tab-panel name="about">
            <div class="text-h6 text-black">About</div>
            <p class="text-black">In About</p>
          </q-tab-panel>

          <q-tab-panel name="photos">
            <div class="text-h6 text-black">Photos</div>
            <p class="text-black">In Alarms</p>
          </q-tab-panel>

          <q-tab-panel name="settings">
            <div class="text-h6 text-black">Settings</div>
            <p class="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

</template>
<script>
  export default {
    data () {
      return {
        tab: 'mails'
      }
    }
  }
</script>
