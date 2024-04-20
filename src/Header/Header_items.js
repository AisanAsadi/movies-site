import React from "react";
import "./Header_items.css";

const Header_items = (props) => {
    return (
        <div className="Header_items">
            <label><button>جست و جو</button><input name="search" placeholder="نام فیلم مورد نظر را وارد کنید"/></label>
            <ul>
               <li>فیلم ایرانی</li>
               <li>فیلم خارجی</li>
               <li>انیمیشن</li>
               <li> فیلم دوبله فارسی</li>
            </ul>
            

        </div>)



}


export default Header_items