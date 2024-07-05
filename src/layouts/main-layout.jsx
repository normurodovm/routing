import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "./header";
export const MainLayout = () => {
    return <div>
        <header>
            <Header/>
        </header>
<main>
    <Outlet/>
</main>
    </div>
}