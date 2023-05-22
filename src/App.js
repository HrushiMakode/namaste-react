import React from "react";
import { Header } from './components/Header'
import { Body } from './components/Body'



export const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <Footer/> */}
        </div>
    );
};
