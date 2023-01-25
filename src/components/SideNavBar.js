import { click } from '@testing-library/user-event/dist/click'
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './SideNavBar.css';


export default function SideNavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
    const showButton =() => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
useEffect(()=>{
    showButton();
},[]);
    window.addEventListener('resize', showButton)
  return (
   <table>
            <ul className='side--navbar'>
                <li className='side--navbarcontainer'>
                    <Link to='/imageslider' className='nav-item' onClick={closeMobileMenu}>
                        Image Slider
                    </Link>
                </li>
                <li className='side--navbarcontainer'>
                    <Link to='/imagecircle'  className='nav-item' onClick={closeMobileMenu}>
                        Image Circle 
                    </Link>
                </li>
                <li className='side--navbarcontainer'>
                    <Link to='/'  className='nav-item' onClick={closeMobileMenu}>
                        Home 3
                    </Link>
                </li>
            </ul>
    </table>
   
  )
}
