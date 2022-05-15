import React from 'react';
const method1 = process.env.PUBLIC_URL + '/pictures/method-1.jpg'
const method2 = process.env.PUBLIC_URL + '/pictures/method-2.jpg'
const method3 = process.env.PUBLIC_URL + '/pictures/method-3.jpg'
const method4 = process.env.PUBLIC_URL + '/pictures/method-4.jpg'
const method5 = process.env.PUBLIC_URL + '/pictures/method-5.jpg'
const method6 = process.env.PUBLIC_URL + '/pictures/method-6.jpg'

function NecessarySkill() {
    return (
        <div className='necessarySkill'>
            <div className='container'>
                <h3 className='py-3 w-100 text-center'>
                    Lớp học của chúng tôi chú trọng phát triển 6 kỹ năng thiết yếu:
                </h3>
                <div className='position-relative'>
                    <img src={method1} alt="" />
                    <div className='p-5 text-light position-absolute bn1 infoClipboard1'>
                        <h3>KHẢ NĂNG SÁNG TẠO</h3>
                        <div className=''>
                            Kết hợp kiến thức từ sách vở và thực tế, học viên
                            phải chủ động tìm tòi và đưa ra giải pháp cho các
                            vấn đề. Điều này kích thích tối đa khả năng sáng tạo,
                            giúp học viên tự tin thích nghi với những thay đổi không
                            ngừng để đạt được thành công.
                        </div>
                    </div>
                    <div className='p-5 text-light position-absolute bn2 infoClipboard2'>
                        <h3>TƯ DUY PHẢN BIỆN</h3>
                        <div className=''>
                            Tư duy phản biện đòi hỏi học viên khả năng phân
                            tích, đánh giá nguồn thông tin để đưa ra được giải
                            pháp tốt nhất và những quyết định phù hợp cho các vấn đề.
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center method2'>
                    <img src={method2} alt="" />
                </div>
                <div className='d-flex py-4 position-relative justify-content-end'>
                    <img src={method3} alt="" />
                    <div className='p-5 text-light position-absolute bn3 infoClipboard3'>
                        <h3>KỸ NĂNG GIAO TIẾP</h3>
                        <div className=''>
                            Học viên sử dụng tiếng Anh để trình bày ý tưởng,
                            bảo vệ quan điểm từ đó phát triển kỹ năng diễn
                            đạt và giao tiếp hiệu quả để có thể tương tác, hội
                            nhập với nhiều nền văn hoá khác nhau.
                        </div>
                    </div>
                </div>
                <div className='d-flex py-4 position-relative justify-content-start'>
                    <img src={method4} alt="" />
                    <div className='p-5 text-light position-absolute bn4 infoClipboard4'>
                        <h3>KHẢ NĂNG TỰ HOÀN THIỆN BẢN THÂN</h3>
                        <div className=''>
                            Khả năng tự hoàn thiện bản thân giúp học viên rút
                            ra bài học từ cả thành công và thất bại để khắc phục
                            những yếu điểm và tiến xa hơn trong tương lai.
                        </div>
                    </div>
                </div>
                <div className='d-flex py-4 position-relative justify-content-center'>
                    <img src={method5} alt="" />
                    <div className='p-5 text-light position-absolute bn5 infoClipboard5'>
                        <h3>KỸ NĂNG HỢP TÁC</h3>
                        <div className=''>
                            Học viên được khuyến khích làm việc theo nhóm để cùng học hỏi,
                            phát triển và trình bày các ý tưởng. Kỹ năng làm việc nhóm
                            hiệu quả đóng vai trò vô cùng quan trọng trong môi trường
                            học tập và làm việc chuyên nghiệp.
                        </div>
                    </div>
                </div>
                <div className='d-flex py-4 position-relative justify-content-start'>
                    <img src={method6} alt="" />
                    <div className='p-5 text-light position-absolute bn6 infoClipboard4'>
                        <h3>KIẾN THỨC CÔNG NGHỆ</h3>
                        <div className=''>
                            Học viên được làm quen với các thiết bị công nghệ cũng như
                            phần mềm hỗ trợ để thực hiện các dự án, đồng thời được hướng
                            dẫn cách tìm kiếm, sử dụng nguồn tài nguyên
                            số một cách an toàn, có định hướng.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NecessarySkill;