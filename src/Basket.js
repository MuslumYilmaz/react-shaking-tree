import React from 'react';

const Basket = ({appleCount}) => {
    return(
        <div className="basket">
            <p>There are <span>{appleCount}</span> apples in the basket</p>
        </div>
    )
}

export default Basket;