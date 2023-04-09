import React from "react";

function LoginParent() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg-dk-blue login-parent">
      <div>
        <div className="py-2">
          <img src={"/pictures/ila-logo-m.png"} alt="" />
        </div>
        <div className="py-2">
          <input className="form-control" placeholder="Username" type="text" />
        </div>
        <div className="py-2">
          <input className="form-control" placeholder="Password" type="text" />
        </div>
        <div className="py-2">
          <button className="py-2 px-5 w-100">Đăng nhập/ login</button>
        </div>
        <div className="py-2 font-12 text-secondary">
          Quên mật khẩu / Forgot your password ?
        </div>
        <div className="pt-4 pb-2 font-12 text-light text">
          Bạn gặp vấn đề với tài khoản đăng nhập? Vui lòng liên hệ với trung tâm
          ILA gần nhất theo liên kết bên dưới để được hỗ trợ / Any issues?
          Please contact your friendly centre support at below link
        </div>
        <div className="py-2">
          <a href="font-12 ">
            <div className="text-secondary">https://ila.edu.vn/centers</div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default LoginParent;
