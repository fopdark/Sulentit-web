import React from 'react'
import FButton from './button'

function Address() {
    return (
        <div className="p-5 address">
            <div className='row'>
                <div className="col-auto">
                    <img src="https://ila.edu.vn/front/images/icons/ic-map-pin.svg" alt="" />
                </div>
                <div className="col">
                    <h5>ILA Aeon Long Biên</h5>
                    <div>
                        Tầng 2, TTTM AEON MALL, số 27, đường Cổ Linh, Quận Long Biên, TP. Hà Nội
                    </div>
                    <div className="py-1 d-flex">
                        <img className='pr-2' src="	https://ila.edu.vn/front/images/icons/ic-call-us.svg" alt="" />
                        <div className='px-2 font-16 text-blue'>0901 426 986</div>
                    </div>
                    <div className="py-1 d-flex">
                        <img src="https://ila.edu.vn/front/images/icons/ic-mail.svg" alt="" />
                        <div className='px-2 font-16 text-blue'>info@ilavietnam.edu.vn</div>
                    </div>
                    <FButton ></FButton>
                    {/* <div>
                        <button className='text-light bg-blue py-2 px-3 text-uppercase register-btn'>đăng ký ngay</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Address;