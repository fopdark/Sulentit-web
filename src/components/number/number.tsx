import React from "react";
import {StyledNumber} from "./styled";

function Number() {
    return (
        <StyledNumber>
            <section className="py-5 number">
                <div className="container">
                    <div className="text-uppercase font-weight-bold text-center number_title">
                        Tại sao nên học tiếng Anh và 6 kỹ năng thế kỷ 21 cùng ILA
                    </div>
                    <div className=" text-center number_content">
                        ILA Vietnam là một công ty hoạt động trong lĩnh vực giáo dục và đào tạo tiếng Anh có vốn sở hữu
                        nước ngoài, chuyên cung cấp các chương trình học và dịch vụ bao gồm:<br/>
                        Chương trình giảng dạy Anh ngữ dành cho trẻ em và người lớn<br/>
                        Chương trình luyện thi các kỳ thi quốc tế<br/>
                        Chương trình đào tạo giáo viên<br/>
                        Đào tạo doanh nghiệp<br/>
                        Trung Tâm Du Học ILA.<br/>
                    </div>
                    <div className="py-5 row">
                        <div className="col-12 col-md my-2">
                            <div className='position-relative'>
                                <div className='w-100 bg-number bn1'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number">700</h4>
                                    <div className="content text-center">GIÁO VIÊN NƯỚC NGOÀI</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div className='position-relative'>
                                <div className='w-100 bg-number bn2'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number">27.000</h4>
                                    <div className="content text-center">HỌC VIÊN ĐÃ HỌC <br/> TIẾNG ANH NĂM TRƯỚC</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div className='position-relative'>
                                <div className='w-100 bg-number bn3'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number">20</h4>
                                    <div className="content text-center">NĂM KINH NGHIỆM <br/> VÀ CHUYÊN MÔN</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div className='position-relative'>
                                <div className='w-100 bg-number bn4'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number">43</h4>
                                    <div className="content text-center">TRUNG TÂM TẠI <br/> 11 THÀNH PHỐ</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md my-2">
                            <div className='position-relative'>
                                <div className='w-100 bg-number bn5'></div>
                                <div className='position-absolute d-flex justify-content-center flex-column align-items-center text'>
                                    <h4 className="text-center number">1.000.000</h4>
                                    <div className="content text-center">HỌC VIÊN ĐÃ <br/> HỌC TẠI ILA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </StyledNumber>
    )
}

export default Number;