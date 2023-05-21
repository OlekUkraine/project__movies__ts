import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {DropDownList} from "../dropDownList";
import {findActions} from "../../redux";
import './Pagination.css';


const Pagination: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {total_page} = useAppSelector(state => state.movieReducer);
    const {addGenres, page} = useAppSelector(state => state.findMoviesReducer);
    const dispatch = useAppDispatch();

    const thisPageNumber: number = page || 1;
    const totalPage: number = total_page > 500 ? 500 : total_page;

    const goToPage = (pageNumber: number) => {
        dispatch(findActions.togglePage(pageNumber));
    };

    const renderPageButtons = () => {
        const buttons = [];

        buttons.push(
            <button
                key='first'
                className={thisPageNumber <= 1 ? 'none-num' : 'btn'}
                disabled={thisPageNumber <= 1}
                onClick={() => goToPage(1)}
            >
                &#171;
            </button>
        );

        buttons.push(
            <button
                key='prev'
                className={thisPageNumber <= 1 ? 'none-num' : 'btn'}
                disabled={thisPageNumber <= 1}
                onClick={() => goToPage(thisPageNumber - 1)}
            >
                &#8249;
            </button>
        );

        for (let i = thisPageNumber - 2; i <= thisPageNumber + 2; i++) {
            if (i <= 0 || i > totalPage) {
                buttons.push(
                    <button
                        key={i}
                        className={`none-num`}
                        disabled={false}
                    >
                        _
                    </button>
                );
            } else if (i >= 1 && i <= totalPage) {
                buttons.push(
                    <button
                        key={i}
                        className={`num ${i === thisPageNumber ? 'Pagination__this-page' : ''}`}
                        disabled={thisPageNumber === i}
                        onClick={() => goToPage(i)}
                    >
                        {i}
                    </button>
                );
            }
        }


        buttons.push(
            <button
                key='next'
                className={thisPageNumber >= totalPage ? 'none-num' : 'btn'}
                disabled={thisPageNumber >= totalPage}
                onClick={() => goToPage(thisPageNumber + 1)}
            >
                &#8250;
            </button>
        );

        buttons.push(
            <button
                key='last'
                className={thisPageNumber >= totalPage ? 'none-num' : 'btn'}
                disabled={thisPageNumber >= totalPage}
                onClick={() => goToPage(totalPage)}
            >
                &#187;
            </button>
        );

        return buttons;
    };

    const resetGenresAndPage = () => {
        dispatch(findActions.delGenres());
        dispatch(findActions.togglePage(1));
    };

    return (
        <div className={'Pagination__wrap'}>
            <div className={`${!!!addGenres.length ? 'stopgap' : 'genres-btn'}`}
                 onClick={() => resetGenresAndPage()}>Reset genres
            </div>
            <div className={`Pagination ${theme}`}>{renderPageButtons()}</div>
            <DropDownList/>
        </div>
    );
};

export {
    Pagination
};
