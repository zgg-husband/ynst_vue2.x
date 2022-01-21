<template>
  <div id="login">
    <div id="loginFrom">
      <login-from></login-from>
    </div>
  </div>
</template>

<script>
// import {mapActions} from "vuex"

export default {
  mounted(){
  //  $axios({
  //     postName:"loginyz",
  //     method:"post",
  //     data:{
  //       account:"123",
  //       password:"123"
  //       }
  //   }).then(res=>{
  //     console.log("jj",res)
  //   })
  },
  methods: {
  },
  computed:{
    // loginyz:()=>this.$store.state.post.loginyz
  },
  components:{
    LoginFrom:()=>import("../components/loginFrom.vue")
  }
}
</script>

<style>
#login{
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 20%;
  justify-content: center;
  background-color: rgba(0,255,255,0.1);
}
#loginFrom{
   /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  padding: 50px 100px 0 50px;
  background-color: #eee;

}
</style>