<template>
  <div id="searchBar" class="searchBar" :class="[configData.size]" :style="{width:configData.width}">
   <div class="searchLabel" v-if="configData.showFlag">
     <span class="com-text" >
       {{configData.title}}
     </span>
   </div>
   <div class="searchInp">
      <input type="text">
      <div class="searchBtn">
          <i class="el-icon-search">
          </i>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  props:["configData"],
    data(){
      return {
        
      }
    }
}
</script>

<style lang="scss">
#searchBar{
  display: flex;
  justify-content: start;
  
    .searchLabel{
      height: 100%;
      width: 80px;
      padding-right:16px ;
      text-align: right;
      color: #999;
      .com-text{
        line-height: 100%;
      }
    }

    .searchInp{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: start;
      input{
        width: 88%;
        font-size: 16px;
        color:#986655;
        outline:0;
      }
      .searchBtn{
        width: 18%;
        font-size: 24px;
        color: #fff;
        background-color: cornflowerblue;
        display: flex;
        align-items: center;
        cursor: pointer;
        i{
          display: inline-block;
          text-align: center;
          width: 100%;
          line-height: 100%;
        }
      }

    }
}
.mini{
    height: 36px;
    font-size: 14px;
    width: 300px!important;
  }
  .midden{
    height: 48px;
    font-size: 16px;
    width: 350px!important;

  }
  .max{
    height: 56px;
    font-size: 18px;
    width: 450px!important;

  }
</style>