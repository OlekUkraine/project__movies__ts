import {FC} from 'react';

import {useAppSelector} from "../../hooks";

interface IProps {
    
}

const UserInfo: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    return (
        <div className={`UserInfo ${theme}`}>
            UserInfo
        </div>
    );
};

export {
    UserInfo
}