import React from 'react';

const Header = ({ title = 'Webpay Header' }) => {
    return (
        <div
            style={{
                background: 'orange',
                width: '100%',
                height: '100px',
                color: '#313131',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '32px',
            }}
        >
            {title}
        </div>
    );
};

export default Header;
