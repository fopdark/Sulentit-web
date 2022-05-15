import React from 'react';

function PathStudy() {
    return (
        <div className="position-relative d-flex justify-content-center container">
            <div className="group-dropdown">
                <div className="p-2 text-center dropdown_title">
                    Xây dựng lộ trình học dành riêng cho con bạn
                </div>
                <div className="p-3 dropdown_content">
                    <div className='col-12 px-xl-5 flex-nowrap row'>
                        <div className='d-flex justify-content-center text-center col-auto'>
                            <div className='d-none d-lg-block py-1 mr-xl-2'>Con tôi</div>
                            <div className="d-none d-lg-block dropdown mr-xl-2">
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
                        </div>
                        <div className='d-flex justify-content-center text-center col-auto'>
                            <div className='d-none d-lg-block py-1 mr-xl-2'>tuổi. Trình độ hiện nay</div>
                            <div className="d-none d-lg-block dropdown mr-xl-2">
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
                        <div className='d-flex justify-content-center text-center col-auto'>
                            <div className='d-none d-lg-block py-1 mr-xl-2'>ước mơ đạt được</div>
                            <div className="d-none d-lg-block dropdown">
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
                    </div>
                    <div className='d-flex w-100 pt-3 justify-content-center col-auto'>
                        <button className='text-uppercase p-2 px-3 info'>tìm hiểu thêm</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PathStudy;