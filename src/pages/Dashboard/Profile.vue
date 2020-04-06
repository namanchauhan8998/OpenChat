<template>
  <q-page>
    <q-list bordered dark class="q-gutter-y-lg">
      <q-card bordered square>
        <q-item class="CoverSection">
          <q-img :src="coverImg" class="coverImg col-12" style="max-height: 400px">
            <div class="absolute-bottom text-subtitle1 text-center row">
                <q-img :src="iconImg" class="coverImg col-4" style="border-radius: 50%;max-height: 140px; max-width: 140px"/>
              <div class="col-5">
                    <h4>{{name}}</h4>
              </div>
              <q-btn class="col-2 absolute-right" label="Edit Image">
                <q-separator></q-separator>
                <q-icon name="edit"></q-icon>
              </q-btn>
            </div>
          </q-img>
        </q-item>
      </q-card>
        <profile-nav :name="name" :icon-img="iconImg"></profile-nav>
    </q-list>
  </q-page>
</template>

<script>
  import ProfileNav from "../../components/DashboardComp/ProfileNav";
  export default {
    name: "Profile",
    components: {ProfileNav},
    data(){
      return{
        coverImg:'https://placeimg.com/500/300/nature',
        iconImg:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name:'Naman Singh'

      }
    }
  }
</script>

<style scoped>

</style>
