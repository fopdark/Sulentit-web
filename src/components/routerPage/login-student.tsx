import React from 'react';

const loginBackground = process.env.PUBLIC_URL + '/pictures/Login_Photo.jpg'
function LoginStudent() {
    return (
        <div style={{ backgroundImage: `url(${loginBackground})` }} className="vh-100 login-student" >
            <div className="row">
                <div className="col-12 col-lg-6"></div>
                <div className="col-12 col-lg-6 vh-100 login d-flex justify-content-center align-items-center">
                    <div>
                        <div className="py-5 w-100 d-flex justify-content-center m-0 logo">
                            <img src="/pictures/logo-ila.png" alt="" />
                        </div>
                        <div className="py-2">
                            <input className='text-center form-control' placeholder='Tên Tài Khoản' type="text" />
                        </div>
                        <div className="py-2">
                            <input className='text-center form-control' placeholder='Mật khẩu' type="text" />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label" >
                                Nhớ tên tài khoản
                            </label>
                        </div>
                        <div className="font-weight-bold font-16 text-blue py-2">
                            Bạn quên kí danh hoặc mật khẩu?
                        </div>
                        <button className="font-16">
                            Đăng nhập
                        </button>
                        <div className="d-flex text-center justify-content-center align-items-center py-2 px-1">
                            <div className="col-md-4 border-top border-dark"></div>
                            <p className="col-md-4 mt-1 pt-1">OR</p>
                            <div className="col-md-4 border-top border-dark"></div>
                        </div>
                        <div className="potentialidplist">
                            <div className="potentialidp">
                                <a href="picture/favicon.icon" title="Login with ILA GMail" className="btn btn-secondary btn-block">
                                    <img className="mx-2" src="https://accounts.google.com/favicon.ico" alt="" width="24" height="24" />
                                    Login with ILA GMail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default LoginStudent;