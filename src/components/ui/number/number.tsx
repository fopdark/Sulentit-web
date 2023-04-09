import React from "react";
import CountUp from 'react-countup';

const backgroundImg = process.env.PUBLIC_URL + '/pictures/media_149268683648236.jpg'
function Number() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})` }} className='group-number'>
            <section className="py-5 number">
                <div className="container">
                    <div className="text-uppercase font-weight-bold text-center number_title">
                        Tại sao nên học tiếng Anh và 6 kỹ năng thế kỷ 21 cùng ILA
                    </div>
                    <div className=" text-center number_content">
                        ILA Vietnam là một công ty hoạt động trong lĩnh vực giáo dục và đào tạo tiếng Anh có vốn sở hữu
                        nước ngoài, chuyên cung cấp các chương trình học và dịch vụ bao gồm:<br />
                        Chương trình giảng dạy Anh ngữ dành cho trẻ em và người lớn<br />
                        Chương trình luyện thi các kỳ thi quốc tế<br />
                        Chương trình đào tạo giáo viên<br />
                        Đào tạo doanh nghiệp<br />
                        Trung Tâm Du Học ILA.<br />
                    </div>
                    <div className="py-5 row">
                        <div className="col-12 col-md my-2">
                            <div data-aos='fade-up' className='position-relative group-number2'>
                                <div className='w-100 bg-number bn1'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number"><CountUp end={700} start={0} duration={5}></CountUp> </h4>
                                    <div className="content text-center">GIÁO VIÊN NƯỚC NGOÀI</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div data-aos='fade-up' className='position-relative group-number2'>
                                <div className='w-100 bg-number bn2'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number"><CountUp end={27000} start={0} duration={5}></CountUp></h4>
                                    <div className="content text-center">HỌC VIÊN ĐÃ HỌC <br /> TIẾNG ANH NĂM TRƯỚC</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div data-aos='fade-up' className='position-relative group-number2'>
                                <div className='w-100 bg-number bn3'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number"><CountUp end={20} start={0} duration={5}></CountUp></h4>
                                    <div className="content text-center">NĂM KINH NGHIỆM <br /> VÀ CHUYÊN MÔN</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div data-aos='fade-up' className='position-relative group-number2'>
                                <div className='w-100 bg-number bn4'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number"><CountUp end={43} start={0} duration={5}></CountUp></h4>
                                    <div className="content text-center">TRUNG TÂM TẠI <br /> 11 THÀNH PHỐ</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div data-aos='fade-up' className='position-relative group-number2'>
                                <div className='w-100 bg-number bn5'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number"><CountUp end={1000000} start={0} duration={5}></CountUp></h4>
                                    <div className="content text-center">HỌC VIÊN ĐÃ <br /> HỌC TẠI ILA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Number;