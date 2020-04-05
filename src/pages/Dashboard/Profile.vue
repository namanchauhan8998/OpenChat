<template>
  <q-page>
    <q-list bordered dark class="q-gutter-y-lg">
      <q-card bordered square>
        <q-item class="CoverSection">
          <q-img :src="coverImg" class="coverImg col-12" style="max-height: 400px">
            <div class="absolute-bottom text-subtitle1 text-center row">
                <q-img :src="iconImg" class="coverImg col-4" style="border-radius: 50%;max-height: 140px; max-width: 140px"/>
              <div class="col-8">
                    <h4>{{name}}</h4>
              </div>
            </div>
          </q-img>
        </q-item>
<!--        <q-item class="row justify-center">-->
<!--            <q-btn-group  class="text-black" >-->
<!--              <q-btn push label="TimeLine" >-->
<!--                <q-icon name="timeline"></q-icon>-->
<!--              </q-btn>-->
<!--              <q-btn push label="About" >-->
<!--                <q-icon name="user"></q-icon>-->
<!--              </q-btn>-->
<!--              <q-btn push label="Photos" >-->
<!--              <q-icon name="photo"></q-icon>-->
<!--            </q-btn>-->
<!--            </q-btn-group>-->
<!--        </q-item>-->
      </q-card>

        <profile-nav></profile-nav>


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
