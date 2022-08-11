<template>
  <div class="login-container">
    <a-form
      class="login-form"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <a-form-item
        label="邮箱"
        name="email"
        :rules="[{ required: true, message: '请输入用户名!' }]"
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
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model="formState.remember">记住密码</a-checkbox>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button class="login-btn" type="primary" html-type="submit"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { login } from "@/api/index";
export default {
  data() {
    return {
      formState: {
        email: "",
        password: "",
        remember: "",
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
      } else {
        login(this.formState)
          .then((res) => {
            console.log(res);
            this.$store.dispatch("setUserInfo", res);
            this.$router.push({ name: "home" });
          })
          .catch((error) => {
            this.$message.error(error);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 450px;
  height: 300px;
  border: 1px solid #eee;
  margin: 40px auto;
  .login-form {
    padding: 40px 60px 0 0;
  }
  .login-btn {
    margin-left: 60px;
  }
}
</style>