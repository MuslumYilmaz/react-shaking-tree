import React from 'react';

const Basket = ({appleCount}) => {
    return(
        <div className="apples collection">
            <p>There are <span>{appleCount}</span> apples in the basket</p>
        </div>
    )
}

export default Basket;