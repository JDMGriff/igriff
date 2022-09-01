import * as React from 'react';

const XpCard = ({ companyName, descrp, dateFromTo }) => {
    return (
        <div>
            <p>XP Card:</p>
            <p>{companyName}</p>
            <p>{descrp}</p>
            <p>{dateFromTo}</p>
        </div>
    );
};

export default XpCard;
