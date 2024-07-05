import React from "react";
import { Outlet,Link } from "react-router-dom";

export const Input = () => {
    return <div className="flex mt-7">
                   <div className="block  border-solid box-border h-[670px] w-[300px] p-4 border-4">
                <div>

                <Link to="/input">Input1</Link>
                </div>
                <div>

                <Link to="/input/input2">Input2</Link>
                </div>
                </div>
                <div className="border-solid box-border h-[670px] w-[960px] p-4 border-4">
                    <Outlet/>
                </div>
    </div>
}