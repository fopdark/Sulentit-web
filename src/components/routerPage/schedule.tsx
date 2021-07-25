import React from 'react';
import Header from '../mediumComponents/header/header';
import FButton from '../smallComponents/button';
import DropDown from '../smallComponents/dropDown';

function Schedule() {
    return (
        <div>
            <Header></Header>
            <div className='text-center py-5 bg-f0f2f5'>
                <h3 className='py-3 font-weight-bold'>Lịch học</h3>
                <p className='py-1'>Để biết lịch học, vui lòng chọn khoá học, thành phố bạn đang sống và trung tâm bạn muốn học.</p>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className='px-2'>
                            <DropDown title="khoá học (*)"
                                lists={[
                                    'Jumpstart (Dành cho 3 - 6 tuổi)',
                                    'Super Juniors (Dành cho 6 - 11 tuổi)',
                                    'Smart Teens (Dành cho 11 - 16 tuổi)',
                                    'Global English (Tiếng Anh giao tiếp quốc tế)',
                                    'Exam English (Tiếng Anh luyện thi)',
                                    'Corporate English (Tiếng Anh dành cho doanh nghiệp)',
                                    'Học Toán Ở ILA (Tiếng Anh Giao Tiếp Quốc Tế)'
                                ]}>
                            </DropDown>
                        </div>
                        <div className='px-2'>
                            <DropDown title="thành phố (*)"
                                lists={['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']}>
                            </DropDown>
                        </div>
                        <div className='px-2'>
                            <DropDown title="trung tâm đào tạo"
                                lists={['trung tâm đào tạo']}>
                            </DropDown>
                        </div>
                        <div className='px-2'>
                            <FButton title="Tìm Hiểu Thêm"></FButton>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <div className='container py-3 bg-light'>
                        <div className='d-flex justify-content-center'>
                            <div className='py-2 px-2'>
                                BỘ LỌC:
                            </div>
                            <div className='px-2'>
                                <DropDown title="Trình Độ"
                                    lists={['Trình Độ']}>
                                </DropDown>
                            </div>
                            <div className='px-2'>
                                <DropDown title="Thời gian"
                                    lists={['Thời gian']}>
                                </DropDown>
                            </div>
                            <div className='px-2'>
                                <DropDown title="Trạng Thái"
                                    lists={['Lớp mới mở', 'Chờ mở lớp']}>
                                </DropDown>
                            </div>
                            <div className='px-2'>
                                <FButton title="Bộ Lọc"></FButton>
                            </div>
                            <div className='px-2'>
                                <FButton title="Làm Mới"></FButton>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="footer-schedule"></div>
        </div>
    )
}

export default Schedule;