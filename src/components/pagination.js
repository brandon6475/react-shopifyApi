
import React from 'react'

export default function Pagination(props) {
    const perPageNum = 6;
    let lastPageNum = Math.ceil(props.products.length / perPageNum);

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    let eachPage = range(1, lastPageNum);

    const onChangePage = (value) => {
        props.onChangePage(value);
    }

    return (
        <div className="paginate">
            <button disabled={props.curPageNum === 1} onClick={() => onChangePage(props.curPageNum - 1)}>Prev</button>
            {eachPage.map((eachPageNum, idx) =>
                <button
                    key={Math.random()}
                    className={` pagination-btn ${eachPageNum === props.curPageNum ? "active" : ""}`}
                    value={eachPageNum}
                    onClick={() => {
                        props.onChangePage(eachPageNum);
                    }}
                >
                    {eachPageNum}
                </button>
            )}
            <button disabled={props.curPageNum === lastPageNum} onClick={() => onChangePage(props.curPageNum + 1)}>Next</button>
        </div>
    );
}

