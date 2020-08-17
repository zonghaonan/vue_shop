<template>
  <div class="login_container">
    <div class="login_box">
      <img class="avatar_img" src="~assets/img/log.jpg" />
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password>
          </el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button class="login_button" type="primary" @click="login">登录</el-button>
          <el-button class="" type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //表单数据绑定
        loginForm: {
          username: "",
          password: ""
        },
        //表单验证规则
        loginFormRules: {
          username: [{
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            },
            {
              min: 3,
              max: 10,
              message: "长度在 3 到 10 个字符",
              trigger: "blur"
            }
          ],
          password: [{
              required: true,
              message: "请输入密码",
              trigger: "blur"
            },
            {
              min: 6,
              max: 15,
              message: "长度在 6 到 15 个字符",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      resetForm() {
        this.$refs.loginFormRef.resetFields();
      },
      login() {
        this.$refs.loginFormRef.validate(valid => {
          if (!valid) return;
          this.$axios.request1({
              url: "login",
              method: "post",
              params: this.loginForm
            })
            .then(res => {
              // console.log(res.data);
              if (res.data.meta.status != 200)
                return this.$message.error("登陆失败");
              this.$message.success("登陆成功");
              window.sessionStorage.setItem('token',res.data.data.token)
              this.$router.push('/home')
            })
            .catch(err => {
              console.log(err);
            });
          // this.$axios.post('login',this.loginForm).then(res=>{
          //   if (res.data.meta.status != 200)
          //     return this.$message.error("登陆失败");
          //   this.$message.success("登陆成功");
          // })
        });
      }
    }
  };

</script>
<style scoped>
  .login_container {
    background-image: url("~assets/img/login_bg.jpeg");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    height: 100%;
  }

  .login_box {
    width: 400px;
    height: 260px;
    background-color: white;
    border-radius: 7px;
    position: absolute;
    /* margin:auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0; */
    /* left: 50%; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .avatar_img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #ddd;
    background-color: #eee;
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 30px;
  }

  .btns {
    display: flex;
    justify-content: center;
  }

  .login_button {
    margin-right: 50px;
  }

</style>
