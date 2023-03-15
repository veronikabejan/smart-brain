import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='mt0 mb2 center'>
			<Tilt className="Tilt br2 shadow-2" options={{max: 55}} style={{height: '150px', width: '150px'}}>
	      		<div className='Tilt-inner pa3'>
	      			<img style={{paddingTop: '10px'}} alt='logo' src={brain}/>
	      		</div>
	    	</Tilt>
		</div>
	);
}

export default Logo;