import React, {FC, useState} from 'react';

import './DropDownList.css';

interface IProps {

}

const DropDownList: FC<IProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('popularity.asc');
    const [classOnChange, setClassOnChange] = useState<boolean>(true);

    const selectChange = (event: string): void => {
        setSelectedOption(event);
        handleToggle()
        console.log(event);
    };

    const handleToggle = () => {
        setClassOnChange(!classOnChange);
    };

    return (
        <div onClick={()=>handleToggle()} className={`DropDownList ${classOnChange ? 'raised' : 'drop'}`}>
            <div className={`sort-btn__select`}>{selectedOption}</div>
            <div className={'select-list'}>
                <div className={classOnChange ? 'raised-list' : 'drop-down-list'}>
                    <div onClick={() => selectChange('popularity.asc')}
                         className={'sort-btn__option'}>popularity.asc
                    </div>

                    <div onClick={() => selectChange('popularity.desc')}
                         className={'sort-btn__option'}>popularity.desc
                    </div>

                    <div onClick={() => selectChange('revenue.asc')}
                         className={'sort-btn__option'}>revenue.asc
                    </div>

                    <div onClick={() => selectChange('revenue.desc')}
                         className={'sort-btn__option'}>revenue.desc
                    </div>

                </div>
            </div>
        </div>
    );
};

export {
    DropDownList
}