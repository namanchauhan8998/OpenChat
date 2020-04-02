<template>
  <q-page :style-fn="myTweak">
    <q-scroll-area style="height: 100vh; ">
    <div class="text-h6 q-pa-lg ">Groups</div>
    <q-list bordered class="rounded-borders " >
      <q-item-label header>All Groups</q-item-label>

      <q-item clickable class="q-py-lg" v-for="(group,index) in groups" :to="'/whatsapp'">
        <q-item-section avatar top>
          <q-avatar  color="primary" text-color="white">
            <div v-if="group.image===''">{{group.title.substring(0,1)}}</div>
            <img v-else src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{group.title}}</span>
            <span class="text-grey-8"> - {{group.createdBy}}</span>
          </q-item-label>
          <q-item-label caption lines="1">
            add group description in the group model in database
            {{group.id}}
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator v-if="index>0" spaced />


    </q-list>


    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="addGroupDialog" />
    </q-page-sticky>

    </q-scroll-area>
  </q-page>


</template>

<script>
  import CreateGroupDialog from "../../components/DashboardComp/CreateGroupDialog";

  export default {
    name: "Index",
    data(){
      return{
        title:'',
        maxUsers:99,
        image:'data:image/png;base64,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',
        protected:false,
        groups:[]
      }
    },
    created() {
      this.allGroups()
      console.log(this.groups)
    },
    methods: {
      myTweak(offset) {
        return {minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      },
      allGroups(){
        this.myProps.emit('/groups/all')
        this.myProps.on('all_groups',(res)=>{

            if(res.status===200){
              console.log("response is ",res)
              this.groups = res.data.groups
            }

        })
      },
      addGroupDialog(){
        let vm = this;
        this.$q.dialog({
          component: CreateGroupDialog,
          parent: this,
          text: 'something',
        }).onOk((formData) => {
            vm.addGroup(formData)
        }).onCancel(() => {
          console.log('Cancel')
        }).onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
      },
      addGroup(data) {
        let vm = this;
        const query =
          {
            title: data.title,
            maxUsers: data.maxUsers,
            image: data.image,
            protected: data.protected
          };
        this.myProps.emit('/groups/add', query)
        this.myProps.on('add_groups',(res)=>{

          if(res.status===201){
            console.log("response is ",res)
            vm.$q.notify({message: 'Group Added Successfully'})
            vm.allGroups()
          }
          else vm.$q.notify({
            type: 'negative',
            message: `Some Error has Occured!`
          })
        })
      }
    },
    props: {

      myProps: {}
    },

  }
</script>

<style scoped>

</style>
