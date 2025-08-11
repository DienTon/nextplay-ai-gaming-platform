import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <>
    <div style={{width: 1920, height: 53.50, position: 'relative', background: 'white', borderBottom: '1px rgba(0, 0, 0, 0.10) solid'}}>
      <Link to='/'>
        <div style={{width: 28, height: 28, left: 302, top: 12.25, position: 'absolute', background: 'linear-gradient(135deg, #2B7FFF 0%, #9810FA 100%)', borderRadius: 8.75}}>
    <div style={{width: 17.34, height: 14, left: 5.48, top: 5.25, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 12.30, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 17.50, wordWrap: 'break-word'}}>NP</div>
  </div>
  <div style={{width: 72.73, height: 21, left: 337, top: 14, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 17.50, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 24.50, wordWrap: 'break-word'}}>Nextplay</div>
      </Link>
  <div style={{width: 223.47, height: 21, left: 568.66, top: 15.75, position: 'absolute'}}>
    <Link to='/games/list'><div style={{width: 33.45, height: 17, left: 0, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Store</div></Link>
    <div style={{width: 40.49, height: 17, left: 54.11, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Forum</div>
    <div style={{width: 52.65, height: 17, left: 115.29, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Reviews</div>
    <div style={{width: 35.15, height: 17, left: 188.65, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>News</div>
  </div>
  <div style={{width: 392, height: 31.50, left: 972.31, top: 10.50, position: 'absolute', background: '#F3F3F5', overflow: 'hidden', borderRadius: 6.75}}>
    <div style={{width: 344.50, height: 14, left: 36, top: 8.75, position: 'absolute', overflow: 'hidden'}}>
      <div style={{width: 158.95, height: 12, left: 0, top: 1, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#717182', fontSize: 12.30, fontFamily: 'Segoe UI Symbol', fontWeight: '400', wordWrap: 'break-word'}}>Search games, discussions...</div>
    </div>
    <div style={{width: 344.50, height: 14, left: 36, top: 8.75, position: 'absolute'}} />
  </div>
  <div style={{width: 14, height: 14, left: 982.81, top: 19.25, position: 'absolute'}}>
    <div style={{width: 2.53, height: 2.53, left: 9.72, top: 9.72, position: 'absolute', outline: '1.17px #717182 solid', outlineOffset: '-0.58px'}} />
    <div style={{width: 9.33, height: 9.33, left: 1.75, top: 1.75, position: 'absolute', outline: '1.17px #717182 solid', outlineOffset: '-0.58px'}} />
  </div>
  <div style={{width: 14, height: 14, left: 1595.25, top: 19.25, position: 'absolute'}}>
    <FontAwesomeIcon icon={faUser} />
  </div>
  <div style={{width: 31.50, height: 28, left: 1544.50, top: 12.25, position: 'absolute', borderRadius: 6.75}}>
    <div style={{width: 14, height: 14, left: 8.75, top: 7, position: 'absolute'}}>
        <FontAwesomeIcon icon={faCartShopping} />
    </div>
    <div style={{width: 17.50, height: 17.50, left: 21, top: -7, position: 'absolute', background: '#030213', overflow: 'hidden', borderRadius: 6.75}}>
      <div style={{width: 6.04, height: 11, left: 5.83, top: 2.75, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 10.50, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>2</div>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;
