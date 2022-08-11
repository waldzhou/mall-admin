<template>
  <div class="logon-container">
    <a-form
      class="logon-form"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名!' }]"
      >
        <a-input v-model="formState.username" />
      </a-form-item>
      <a-form-item
        label="邮箱"
        name="email"
      
      >
        <a-input v-model="formState.email" />
      </a-form-item>
      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model="formState.password" />
      </a-form-item>
      <div class="role">
        角色：
        <label>
          <input
            type="radio"
            value="customer"
            v-model="formState.role"
          />普通用户
        </label>
        <label>
          <input type="radio" value="admin" v-model="formState.role" />管理员
        </label>
      </div>
      <div class="code">
        <label>验证码：</label>
        <a-input v-model="formState.code" />
        <button @click="handleClick">获取验证码</button>
      </div>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button class="logon-btn" type="primary" html-type="submit" @click="handleSubmit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { logon,getCode } from "@/api/index";
export default {
  data() {
    return {
      formState: {
        email: "",
        password: "",
        username: "",
        role: "",
        code: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      const emailReg = /^[\w-]+@[\w.-]+.com$/;

      if (!emailReg.test(this.formState.email)) {
        alert("请输入正确的邮箱！");
      } else if (this.formState.password == "") {
        alert("请输入密码！");
      } else if(this.formState.username == ''){
        alert("请输入用户名！");
      } else if(this.formState.code == ''){
        alert("请输入验证码！")
      }
      else {
        const res = logon(this.formState);
        console.log(res);
      }
    },

    handleClick(){
         getCode(this.formState.email).then((res)=>{
          console.log(res);
         }).catch((error)=>{
          this.$message.error(error);
         })
    }
  },
};
</script>

<style lang="less" scoped>
.logon-container {
  width: 450px;
  height: 400px;
  border: 1px solid #eee;
  margin: 40px auto;
  .logon-form {
    padding: 40px 60px 0 0;
  }
  .logon-btn {
    margin-left: 60px;
  }
  .role {
    width: 100%;
    margin-left: 90px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    label {
      margin-right: 30px;
    }
  }
  .code {
    width: 388px;
    margin: 24px 90px;
    .ant-input {
      width: 100px;
      margin-right: 20px;
    }
  }
}
</style>