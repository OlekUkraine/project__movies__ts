import React, {FC} from 'react';

import avatar from "../../images/avatar/ava.jpg";
import {useAppSelector} from "../../hooks";
import './UserInfo.css';

interface IProps {
    
}

const UserInfo: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    return (
        <div className={`UserInfo ${theme}`}>
            <div className={'user-avatar'}>
                <img src={avatar} alt="ava"/>
            </div>
            <div className={'user-name'}>User name</div>
        </div>
    );
};

export {
    UserInfo
}