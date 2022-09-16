import React from 'react';

const PopUp = ({pop, popUp, userSelect}) => {
    return (
        <div style={{display:pop?"none":"flex"}}>
            <div className='Pop-Up'>
                <div className='card-pop'>
                <i onClick={popUp} className="fa-solid fa-square-check"></i>
                <p>{userSelect?"User update succesfuly":"User created succesfuly"}</p>
                </div>
            </div>
        </div>
    );
};

export default PopUp;