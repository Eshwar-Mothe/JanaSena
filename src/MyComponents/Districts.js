// DistrictList.js
import React from 'react';

const District = ({ districts, onDistrictSelect }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {districts.map((district, index) => (
                <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }} onClick={() => onDistrictSelect(district)}>
                    {district}
                </div>
            ))}
        </div>
    );
};

export default District;
