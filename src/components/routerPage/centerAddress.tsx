import React from 'react';
import Footer from '../mediumComponents/footer/footer';
import Header from '../mediumComponents/header/header';
import Address from '../smallComponents/address';
import DropDown from '../smallComponents/dropDown';

function CenterAddresses() {
    return (
        <div>
            <Header></Header>
            <div className="py-5 bg-f0f2f5">
                <h3 className="text-center font-weight-bold">Trung Tâm Gần Nhất</h3>
                <DropDown
                    title="chọn thành phố"
                    lists={[
                        'Hà Nội',
                        'Hồ Chí Minh',
                        'Đà Nẵng',
                        'Hải Phòng',
                        'Vũng Tàu',
                        'Bình Dương',
                        'Biên Hoà',
                        'Cần Thơ'
                    ]}>
                </DropDown>
                <p className="text-center">nhấp chuột vào dòng địa chỉ</p>
            </div>
            <div className="py-5 bg-f0f2f5">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="bg-light address-group">
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                                <Address></Address>
                            </div>

                        </div>
                        <div className="p-0 col-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                aria-hidden="false"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default CenterAddresses;