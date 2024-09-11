import React, {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 


const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<div className='fixed w-[100%] left-[95%] bottom-[10%] h-[20px] text-[3rem] z-[1] cursor-pointer'> 
	<FaArrowCircleUp onClick={scrollToTop} 
	style={{display: visible ? 'inline' : 'none'}} /> 
	</div> 
); 
} 

export default ScrollButton; 
