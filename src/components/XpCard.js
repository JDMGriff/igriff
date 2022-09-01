import * as React from 'react';

const XpCard = ({ companyName, descrp, dateFromTo }) => {
    return (
        <div className='xpcard'>
            <h4>{companyName}</h4>
            <p>{descrp}</p>
            <p>{dateFromTo}</p>
        </div>
    );
};

export default XpCard;
