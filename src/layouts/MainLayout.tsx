import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import {useAppSelector} from "../hooks";
import './MainLayout.css';


const MainLayout: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    return (
        <div className={`MainLayout ${theme}`}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {
    MainLayout
}