import React, { useState } from "react";
import LoginForm from "./components/LoginUserComponent/LoginUserComponent";
import Header from "./components/Header/Header";
function LoginPage(props) {
  return (
    <div>
      <Header />
      <LoginForm></LoginForm>
    </div>
  );
}

export default LoginPage;
