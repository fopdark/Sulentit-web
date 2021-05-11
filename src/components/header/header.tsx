import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logo = process.env.PUBLIC_URL + '/pictures/logo.png'
const carousel1 = process.env.PUBLIC_URL + '/pictures/media_155246671173845.jpg'
const carousel2 = process.env.PUBLIC_URL + '/pictures/media_155246680133527.jpg'
const carousel3 = process.env.PUBLIC_URL + '/pictures/media_155246681644305.jpg'
const carousel4 = process.env.PUBLIC_URL + '/pictures/media_155246741041767.jpg'
const singlePicture = process.env.PUBLIC_URL + '/pictures/web_banner_14Dec.jpg'

const StyledHeader = styled.div`
// @media screen and (max-width: 991px){
//    .carousel{
//       img{
//           height: 90vh;
//           object-fit: cover;
//       }
//    }
//    .group-dropdown{
//       text-wrap: normal;
//       bottom: -140px;
//       width: 90%;
//    }
//    .img{
//       padding: 160px 0px;
//    }
// }
// @media screen and (min-width: 992px){
//     .img{
//       padding: 70px 0px;
//    }
//     .group-dropdown{
//        bottom: -50px;
//        width: 100%;
//    }
//    .group-navTab{
//         position: absolute;
//    }
// }
// section.header {
//   .group-navTab{
//       top: 0;
//       z-index: 1;
//   }
//   img {
//
//   }
//   div.group-tab {
//   div.tab {
//       color: #fff;
//   }
//   div.language {
//
//   }
//   div.contact {
//       div{
//           color: #fff;
//           background-color: #45c0f8;
//           border-radius: 50px;
//       }
//   }
//   div.navTab {
//        span {
//
//        }
//   }
// }
//   div.carousel {
//       background-color: #000;
//       img{
//           opacity: 0.5;
//       };
//   }
//   div.title {
//   }
//   div.group-dropdown {
//     background-color: #45c0f8;
//     border-radius: 10px;
//     z-index: 1;
//     color: #fff;
//     font-size: 1.4em;
//     div.dropdown_title {
//
//     }
//     div.dropdown_content {
//       div {
//
//       }
//
//       div.dropdown {
//         button{
//            width: 150px;
//            :after{
//            }
//         }
//       }
//       button.info {
//         border: none;
//         border-radius: 20px;
//         padding-left: 0.4em;
//         padding-right: 0.4em;
//         font-size: 0.7em;
//         color: #45c0f8;
//       }
//     }
//   }
//   .img{
//
//       background-color: #f0f2f5;
//   }
// }
`
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
};

function Header() {
    return (
        <StyledHeader className='group-header'>
            <section className="position-relative header">
                <div className='w-100 group-navTab'>
                    <div className="px-4 row">
                        <div className="d-none d-md-block px-5 col-auto">
                            <img src={logo} alt=""/>
                        </div>
                        <div className='d-block d-flex align-items-center d-md-none col-auto'>
                            <img src="https://m.ila.edu.vn/front/mobile/images/logo.svg" alt=""/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div className="d-flex justify-content-end px-md-5 group-tab">
                                <div className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">Beyond english</div>
                                <div className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">các khóa học</div>
                                <div className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">trung tâm đào tạo
                                </div>
                                <div className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">lịch học</div>
                                <div className="d-none d-md-block mr-3 my-2 py-4 font-weight-bold text-uppercase tab">cơ hội nghề nghiệp
                                </div>
                                <div className="mr-3 my-2 py-4 font-weight-bold text-uppercase language">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="21" height="15" viewBox="0 0 21 15">
                                        <title>79F01A6E-D065-4BAC-A881-D489E5A44986</title>
                                        <defs>
                                            <path id="a" d="M0 0h21v15H0z"/>
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                            <mask id="b" fill="#fff">
                                                <use xlinkHref="#a"/>
                                            </mask>
                                            <use fill="#22438B" xlinkHref="#a"/>
                                            <path fill="#FFF" mask="url(#b)"
                                                  d="M-.386-.334L-.36 1.64l19.587 13.708 2.037-.037-.037-1.963L1.64-.36z"/>
                                            <path fill="#C7152A" mask="url(#b)"
                                                  d="M-1.61-.135l22.882 16.04 1-1L-.61-1.136z"/>
                                            <path
                                                d="M21.476-.418v2S6.666 11.907 1.434 15.54c-.064.044-1.998.003-1.998.003l-.156-1.904L19.476-.418h2z"
                                                fill="#FFF" mask="url(#b)"/>
                                            <path fill="#C7152A" mask="url(#b)"
                                                  d="M22.897-.268L-1.134 16.495l-1-1L21.94-1.295z"/>
                                            <path fill="#FFF" mask="url(#b)" d="M8 0h5v5h8v5h-8v5H8v-5H0V5h8z"/>
                                            <path fill="#C7152A" mask="url(#b)" d="M9 0h3v6h9v3h-9v6H9V9H0V6h9z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="mr-3 my-2 py-3 font-weight-bold text-uppercase contact">
                                    <div className='px-3 py-2 text-center'>
                                        liên hệ
                                    </div>
                                
                                </div>
                                <div className="d-flex py-4 my-2 navTab">
                                    <p className='d-flex align-items-center flex-column d-inline'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 bg-light slider-bar'>
                            <div className='m-2 p-2 bg-blue login'>
                                <div className='text-light mb-3 font-18 font-weight-bold text-uppercase'>
                                    đăng nhập vào ila
                                </div>
                                <a href="">
                                    <div className='text-dark my-2 py-2 px-5 bg-light text-uppercase font-16 form'>
                                        tôi là phụ huynh
                                    </div>
                                </a>
                                <a href="">
                                    <div className='text-dark my-2 py-2 px-5 bg-light text-uppercase font-16 form'>
                                        tôi là học viên
                                    </div>
                                </a>
                            </div>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    ILA ELITE
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    CÁC GIẢI THƯỞNG
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    TIN TỨC ILA
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    SỰ KIỆN ILA
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    CHUYỆN HAY CỦA ILA
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    GIỚI THIỆU ILA
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    TẠI SAO NÊN CHỌN ILA
                                </div>
                            </a>
                            <a href="">
                                <div className='text-dark my-2 p-2 bg-light text-uppercase font-16'>
                                    LIÊN HỆ
                                </div>
                            </a>
                            <button
                                className='bg-blue border-0 px-5 py-2 text-uppercase text-light font-weight-bold font-16 form'>
                                đăng ký
                            </button>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <Slider {...settings}>
                        <img src={carousel1} alt=''/>
                        <img src={carousel2} alt=''/>
                        <img src={carousel3} alt=''/>
                        <img src={carousel4} alt=''/>
                    </Slider>
                </div>
                <div className="position-relative d-flex justify-content-center container">
                    <div className=" position-absolute group-dropdown">
                        <div className="p-2 text-center dropdown_title">Xây dựng lộ trình học dành riêng cho con bạn</div>
                        <div className="row p-3 dropdown_content">
                            <div className='col-auto d-flex'>
                                <div className='d-none d-md-block py-1 mr-2'>Con tôi</div>
                                <div className="d-none d-md-block dropdown mr-2">
                                    <div className="btn-group">
                                        <button type="button"
                                                className="d-flex justify-content-between align-items-center px-2 py-1 btn btn-info dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            chọn
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="/">A</a>
                                            <a className="dropdown-item" href="/">B</a>
                                            <a className="dropdown-item" href="/">C</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-none d-md-block py-1 mr-2'>tuổi. Trình độ hiện nay</div>
                                <div className="d-none d-md-block dropdown mr-2">
                                    <button type="button"
                                            className="d-flex justify-content-between align-items-center px-2 py-1 btn btn-info dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        chọn
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/">A</a>
                                        <a className="dropdown-item" href="/">B</a>
                                        <a className="dropdown-item" href="/">C</a>
                                    </div>
                                </div>
                                <div className='d-none d-md-block py-1 mr-2'>ước mơ đạt được</div>
                                <div className="d-none d-md-block dropdown">
                                    <button type="button"
                                            className="d-flex justify-content-between align-items-center px-2 py-1 btn btn-info dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        chọn
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/">A</a>
                                        <a className="dropdown-item" href="/">B</a>
                                        <a className="dropdown-item" href="/">C</a>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center col-auto'>
                                <button className='text-uppercase p-2 px-3 info'>tìm hiểu thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='img'>
                    <div className='d-flex justify-content-center container'><img src={singlePicture} alt=""/></div>
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header;