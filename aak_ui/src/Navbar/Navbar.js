import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const commonTextStyle = {
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: 400, 
  };

  return (
    <nav
      style={{
        backgroundColor: 'transparent',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999, 
      }}
    >
      <div style={{ color: '#4B0082', paddingLeft: '50px',paddingTop:'30px',marginRight:'20px',fontSize:'20px' }}>
        <b style={commonTextStyle}>Agenda Aaj Ka</b>
        <hr style={{ width: '110%', borderBottom: '1px solid #000000', margin: '2px 0px' }} />
        <div
          style={{
            color: '#000000',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            ...commonTextStyle,
          }}
        >
          <span>avidevlops@gmail.com</span>
          <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
        </div>
      </div>

      <div style={{ paddingRight: '50px',paddingTop:'30px'  }}>
        {isLoginPage ? (
          <Link to="/signup" style={{ textDecoration: 'none', color: '#4B0082', marginRight: '30px' ,...commonTextStyle}}>
            Sign Up
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: 'none', color: '#4B0082', marginRight: '30px',...commonTextStyle, }}>
            Login
          </Link>
        )}

        <button marginRight={2}
          style={{
            backgroundColor: '#4B0082',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
            cursor: 'pointer',
            ...commonTextStyle,
          }}
          onClick={() => {
            // Handle the click event for the "Request Demo" button here
          }}
        >
          Request Demo
        </button>
      </div>
      
    </nav>
  );
}

export default Navbar;
