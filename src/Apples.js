import React from 'react';
import appleImage from './apple.png';

const Apples = ({apples}) => {

    const appleList =  apples.map(apple => {
            return(
                <div className="collection-item" key={apple.id}>
                    <img src={appleImage} alt="Apple" />
                </div>
            )
        })
    return(
        <div className="apples collection">
            {appleList}
        </div>
    )
}

export default Apples;