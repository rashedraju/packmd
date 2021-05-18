import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';

const Error = ({ msg }) => (
    <div
        style={{
            display: 'flex',
            fontSize: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            color: '#6c757d',
        }}
    >
        <BiErrorCircle style={{ marginTop: '0.3rem' }} />
        &nbsp;{msg}
    </div>
);

export default Error;
