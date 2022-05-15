import React from 'react'
function FButton(props: any) {
    let title = 'đăng ký ngay'
    if (props.title) {
        title = props.title;
    }

    return (
        <div>
            <div>
                <button className='text-light bg-blue py-3 px-3 text-uppercase register-btn'>{title}</button>
            </div>
        </div>
    )
}
export default FButton;