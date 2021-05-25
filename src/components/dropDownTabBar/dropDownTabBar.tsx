import React from 'react';

function DropDown(props: any) {
    let listItem = props.lists.map((list:any) =>
        <li>{list}</li>
    )
    return(
        <div className='drop-down'>
            <div className='drop-down__cover'>
                {listItem}
            </div>
        </div>
    )
}
export default DropDown;