import React from 'react';
const BYODLayout = process.env.PUBLIC_URL + '/pictures/enviroment-layout.jpg'

function BYOD() {
    return (
        <div className="BYOD">
            <div className='container'>
                <div className='position-relative'>
                    <img className="w-100" src={BYODLayout} alt="" />
                    <div className='p-5 text-light position-absolute bn1'>
                        <h3>
                            Chương trình BYOD
                            (Bring Your Own Device - Mang theo thiết bị cá nhân)
                        </h3>
                        <div className=''>
                            Chúng tôi khuyến khích môi trường học BYOD
                            (Bring Your Own Device - Mang theo thiết bị cá nhân).
                            Cam kết của chúng tôi với phụ huynh:
                        </div>
                        <div className=''>
                            - Giáo viên và Trợ giảng sẽ hỗ trợ và hướng dẫn học viên chỉ
                            sử dụng thiết bị cho mục đích học tập.
                        </div>
                        <div className=''>
                            - ILA sẽ cung cấp thời gian biểu của IT Support (hỗ trợ công nghệ)
                            tại trung tâm để học viên có thể kiểm tra thiết bị và chuẩn bị
                            sẵn sàng cho buổi học đầu tiên.
                        </div>
                        <div className=''>
                            - Đội ngũ IT Support (hỗ trợ công nghệ) sẽ luôn sẵn sàng tại
                            trung tâm trong khung giờ theo thời gian biểu để giải đáp
                            thắc mắc của học viên và phụ huynh.
                        </div>
                        <div className=''>
                            - Học viên sẽ được cung cấp một tài khoản ILA Google for
                            Education với thiết lập độ tuổi phù hợp.
                        </div>
                        <div className=''>
                            - Việc sử dụng công nghệ của học viên trong lớp học sẽ được
                            giám sát bởi giáo viên và trợ giảng để chỉ phục
                            vụ duy nhất cho mục đích học tập.
                        </div>
                        <div className=''>
                            - Giáo viên và Trợ giảng của chúng tôi sẽ hướng dẫn học viên
                            cách bảo quản và sử dụng thiết bị một cách cẩn thận.
                        </div>
                        <div className=''>
                            - Quý phụ huynh có thể dễ dàng theo dõi kết quả học tập của con em mình.
                        </div>
                    </div>


                </div>
            </div>
            <div className='container'>
                <div className='p-5 text-light  bn4'>
                    <h3 className='text-center'>Tài nguyên thông tin trực tuyến và lợi ích</h3>
                    <div className='py-2'>
                        Tăng cảm hứng học tập cho học viên khi họ có thể học linh
                        động ngay cả bên ngoài môi trường lớp học.
                    </div>
                    <div className='py-2'>
                        Rút ngắn thời gian đồng thời nâng cao hiệu quả học tập
                        vì học viên có thể làm bài tập ở bất cứ đâu, bất cứ lúc
                        nào ngay trên thiết bị điện thoại thông minh, máy
                        tính xách tay, máy tính bảng cá nhân.
                    </div>
                    <div className='py-2'>
                        Học trực tuyến cho phép học viên thực hành nhiều hơn bên cạnh
                        những giờ lên lớp từ đó và cải thiện nhanh các kỹ năng Anh ngữ.
                    </div>
                    <div className='py-2'>
                        Học viên có thể thấy rõ sự tiến bộ của mình bằng cách nhìn vào
                        thang điểm đánh giá trên hệ thống từ đó dễ dàng xác định và
                        tập trung vào các kỹ năng còn yếu.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BYOD;