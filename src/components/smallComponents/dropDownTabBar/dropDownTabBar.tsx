import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DropDown(props: any) {
    let listItem = props.lists.map((list: any) =>
        <a className="text-dark" href={list.link}><li>{list.text}</li></a>
    )
    return (
        <div className='drop-down'>
            <div className='drop-down__cover'>
                {listItem}
            </div>
        </div>
    )
}
export default DropDown;