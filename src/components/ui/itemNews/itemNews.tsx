import React from 'react';
const news1 = process.env.PUBLIC_URL + '/pictures/media_161763751877096-360x234.jpg'

function ItemNews() {
    return (
        <div className="col-md-4 col-12">
            <div data-aos='fade-up' className="mb-5 group-img"><img className='w-100' src={news1} alt="" />
                <div className='px-4 py-4'>
                    <div className="py-2 text-uppercase font-weight-bold title">HỌC SINH ILA GÂY ẤN TƯỢNG KHI TRỞ THÀNH NHÀ ĐẦU TƯ TRIỆU
                    USD
                                    </div>
                    <div className="py-2 date"><img
                        src="https://ila.edu.vn/front/images/icons/ic-calendar.svg" alt="" /> 05/04/2021
                                    </div>
                    <div className="py-2 content">
                        Với một đề bài “hóc búa" khi phải lên kế hoạch sử dụng 1
                        triệu USD để mang đến những giải pháp thay đổi thế giới, các bạn học sinh ILA đã
                        chứng minh được bản lĩnh, trí tuệ, kỹ năng của những nhà lãnh đạo tương lai.
                                    </div>
                    <div className="py-2 text-uppercase font-weight-bold link">xem thêm</div>
                </div>
            </div>
        </div>
    )
}

export default ItemNews;