<template>
  <div>
    <div class="login">
      <div class="login_content">
        <div class="login_title">{{ $t("login.LoginSystemIsUnderConstruction") }}</div>
        <div class="login_btn">
          <nuxt-link
            class="to-home-link back_home"
            :to="localePath('/')"
          >{{ $t("login.BackToHomepage") }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  background-image: url(/images/login.jpg);
  background-size: cover;
  width: 100%;
  height: 82vh;
  margin: 0;
  position: relative;
}
.login_content {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_title {
  font-size: 60px;
  color: #fff;
}
.login_btn {
  color: #fff;
  background: rgba(159, 143, 124, 1);
  width: 34%;
  font-size: 30px;
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s;
}
.login_btn:hover {
  background: rgb(177, 139, 92);
}
.back_home {
  display: block;
  margin: 0 auto;
}
@media screen and (max-width: 500px) {
  .login {
    height: 100vh;
  }
  .login_title {
    font-size: 30px;
  }
  .login_btn {
    width: 80%;
    font-size: 20px;
  }
}
</style>