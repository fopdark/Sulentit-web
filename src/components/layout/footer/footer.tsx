import React from "react";

const logo = process.env.PUBLIC_URL + '/pictures/logo.png'
const map = process.env.PUBLIC_URL + '/pictures/map-screenshot.png'

function Footer() {
    return (
        <div className='group-footer'>
            <section className="py-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="d-none d-md-block col-2">
                            <div className="info">
                                <img className='w-75' src={logo} alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-md-10 py-5 row'>
                            <div className="col-md-3 col-6">
                                <div className="info-title">GIỚI THIỆU ILA</div>
                                <div className="info">GIỚI THIỆU ILA</div>
                                <div className="info">GIỚI THIỆU ILA</div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="info-title">GIỚI THIỆU ILA</div>
                                <div className="info">GIỚI THIỆU ILA</div>
                                <div className="info">GIỚI THIỆU ILA</div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="info">
                                    <div className='py-3 row'>
                                        <div className="col-auto">
                                            <img src="https://ila.edu.vn/front/images/upload/cambridge.jpg" alt="" />
                                        </div>
                                        <div className="col">
                                            <div className="text-uppercase text-logo">
                                                HƯỚNG DẪN CHÍNH THỨC VỀ KỲ THI CAMBRIDGE CHO THIẾU NHI & THANH THIẾU
                                                NIÊN
                                            </div>
                                        </div>
                                    </div>
                                    <img className='w-100' src={map} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md col-12">
                            <div className="py-3 copyright">
                                © Copyright 2021 ILA. All rights reserved. <br /><br />
                                Công ty TNHH ILA VIệt Nam, GCN đăng ký đầu tư
                                số 411043000734 ngày cấp 08/09/2017 nơi cấp Sở Kế Hoạch & Đầu Tư TP. HCM.<br />

                                Trụ sở chính: 146 Nguyễn Đình Chiểu, Phường: 06, Quận: 03
                            </div>
                        </div>
                        <div className="col-md-auto col-12">
                            <div className="media">
                                <i className="mr-2 fab fa-facebook-f"></i>
                                <i className="mr-2 fab fa-twitter"></i>
                                <i className="mr-2 fab fa-youtube"></i>
                                <i className="mr-2 fab fa-instagram"></i>
                                <i className="mr-2 fab fa-google-plus-g"></i>
                                <i className="mr-2 fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;