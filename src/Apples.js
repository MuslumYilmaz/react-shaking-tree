import React from 'react';
import appleImage from './apple.png';

const Apples = ({apples, shakeClass}) => {

    const appleList =  apples.map(apple => {
            return(
                <div key={apple.id}>
                    <img src={appleImage} alt="Apple" width="50px" className={apple.class} />
                </div>
            )
        })
    return(
        <div className={shakeClass}>
            {appleList}
        </div>
    )
}

export default Apples;