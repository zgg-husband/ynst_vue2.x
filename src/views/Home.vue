<template>
  <div id="Home">
    <div class="home-nav">
        <div class="p-title">
          <i class="el-icon-picture-outline-round"></i>
         <span>人脸轨迹拟合</span>
        </div>
    </div>
    <div class="home-main">
      <div class="home-search-bar">
          <Search :configData="configData"></Search>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    Search:()=>import("../components/Search.vue")
  },
  data(){
    return {
      configData:{
          title:"搜索框",
          labelFlag:true,
          width:"100%",
          size:"mini"
        }
    }
  }
}
</script>

<style lang="scss">
#Home{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    .home-nav{
      height: 48px;
      width: 100%;
      box-shadow: 0px 2px 10px 2px #999;
      background-color: rgb(245, 237, 237);
      .p-title{
        height: 100%;
        padding: 24px;
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        color: #999;
      }
    }
    .home-main{
      width: 100%;
      height: calc(100% - 48px);
      background-image: url("../assets/images/1616602932395-pg1.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
    }
}

</style>