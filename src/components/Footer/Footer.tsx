import {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './Footer.css';


interface IProps {

}

const Footer: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    return (
        <div className={`Footer ${theme}`}>
            <div>
                <a href="http://www.freepik.com">Designed by Patrickss / Freepik</a>
            </div>
        </div>
    );
};

export {
    Footer
}