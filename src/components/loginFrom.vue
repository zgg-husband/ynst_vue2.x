<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="account">
    <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var accountValidate = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } 
          callback();
        
      };
      var paddwordValidate = (rule, value, callback) => {
        if (value === "") {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          account: '',
          password: ''
        },
        rules: {
          account: [
            { validator: accountValidate, trigger: 'blur' }
          ],
          password: [
            { validator: paddwordValidate, trigger: 'blur' }
          ]
        }
      };
    },
    computed:{
      userInfo(){
        return this.$store.state.userInfo;
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios({
             postName:"loginyz",
             data:{
             account:this.ruleForm.account,
             password:this.ruleForm.password
           }
           }).then(response=>{
             if(response.status===200&&response.data.code===200){
                // console.log(this.$store)
                  this.$store.commit("setUserInfo",response.data.data)
                  this.$router.push("/home")
             }
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>