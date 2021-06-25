import React from 'react';

const Basket = ({appleCount}) => {
    return(
        <div className="basket">
            <span className="apple-count">{appleCount}</span>
        </div>
    )
}

export default Basket;