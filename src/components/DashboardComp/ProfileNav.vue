<template>
  <div>
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

        <q-tab-panels v-model="tab"  animated class="text-black">
          <q-tab-panel name="about" class="">
            <div class="row">
            <q-list bordered class="text-black col-6 bg-grey-3" >
              <q-item>
                  <q-item-section avatar top>
                    <q-avatar  color="primary" text-color="black">
                    <img :src="iconImg">
                    </q-avatar>
                  </q-item-section>
                <q-item-section class="cursor-pointer bg-grey-3 text-black full-width" side>
                  <span>{{name}}</span>
                  <q-popup-edit v-model="name" content-class="bg-grey text-black">
                    <q-input color="black" v-model="name" dense autofocus counter>
                    </q-input>
                  </q-popup-edit>
                </q-item-section>
                  <q-item-section top side flat>
                    <q-btn class="gt-xs " size="12px" color="black" flat round icon="edit" />
                  </q-item-section>

              </q-item>
            </q-list>
            </div>
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
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tab: 'about',

      }
    },
    props:{
      name:'',
      iconImg:'',


    }
  }
</script>

<style scoped>
  #rounded-borders1{
    max-height: 50px;
    max-width: 50px;
    border-radius: 100%;
  }
</style>
