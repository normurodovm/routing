import React from "react";
import { Link,Outlet } from "react-router-dom";

export const Button = () => {
    return <div className="flex mt-7">
        <div className=" block  border-solid box-border h-[670px] w-[300px] p-4 border-4">
            <div>
                
            <Link to="/button">Button1</Link>
            </div>
            <div>
            <Link to="/button/button2">Button2</Link>

            </div>
            <div>
            <Link to="/button/button3">Button3</Link>

            </div>
            </div>
            <div className=" border-solid box-border h-[670px] w-[960px] p-4 border-4"><Outlet/></div>
    </div>
}