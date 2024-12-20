import { FaUser, FaBars, FaWallet, FaHistory, FaGamepad, FaUniversity, FaPhone, FaExchangeAlt, FaRegComment, FaShareAlt, FaSignOutAlt } from 'react-icons/fa';
import "./navbar.css";
import { useEffect, useRef, useState } from 'react';
import {motion, spring} from "framer-motion";
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';

const Navbar=()=>{

    const [showMenuBar, setShowMenuBar]= useState(false);
    const nevigate= useNavigate();
    const menuRef = useRef(null);

    // Function to toggle the menu
    const menuBAr = () => {
        setShowMenuBar(!showMenuBar);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenuBar(false);
          }
        };
    
        if (showMenuBar) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [showMenuBar]);
    

    
    return(
        <>
        <div className='navbar-container'>
            <div onClick={menuBAr} className="menuBox">
                <FaBars size={30} className='menu-icon' />
            </div>
            <h1 className="websiteName"><b>Website</b></h1>
            <div onClick={()=>nevigate("/wallet")} className="walletBox">
                <FaWallet color='white' size={30}/>
                <div className='wallet'>0</div>
            </div>
        </div>
        {showMenuBar && (<motion.div ref={menuRef} className='menuBar-container' initial={{x: "-30vw"}} animate={{x:0}} transition={{type: spring, duration: 2}} >
            <div className='menu-header'>
                <div className='id-container'>
                    <div className='name'>Name</div>
                    <div className='number'>Number</div>
                </div>
            
                <img className="logo" src="/images/websiteLogo.png" alt="website-logo"/>
                
            </div>

            <div className='notification'>
                <div ><b>App Notification</b></div>
                <Switch className='notification-button' />
            </div>

            <div className='menus'>
                <div onClick={()=>nevigate("/profile")} className='menu'>
                    <div className='menu-logo'><FaUser color='white' scale={30} /></div>
                    <div> My Profile</div>
                </div>
                <div onClick={()=>nevigate("/wallet")} className='menu'>
                    <div className='menu-logo'><FaWallet color='white' scale={30} /></div>
                    <div> My Wallet</div>
                </div>
                <div onClick={()=>nevigate("/played")} className='menu'>
                    <div className='menu-logo'><FaHistory color='white' scale={30} /></div>
                    <div> Game History</div>
                </div>
                <div onClick={()=>nevigate("/GameRate")} className='menu'>
                    <div className='menu-logo'><FaGamepad color='white' scale={30} /></div>
                    <div> Game Rate</div>
                </div>
                <div onClick={()=>nevigate("/addFunds")} className='menu'>
                    <div className='menu-logo'><FaWallet scale={30} color="white"/><div className="plus-icon"> <AiOutlinePlus size={10} color="white" /></div></div>
                    <div> Add Points</div>
                </div>
                <div onClick={()=>nevigate("/withdrawal")}  className='menu'>
                    <div className='menu-logo'><FaUniversity color='white' scale={30} /></div>
                    <div> Withdrawal</div>
                </div>
                <div onClick={()=>nevigate("/transfer")} className='menu'>
                    <div className='menu-logo'><FaExchangeAlt color='white' scale={30} /></div>
                    <div> Transfer Coins</div>
                </div>
                <div onClick={()=>nevigate("/info")} className='menu'>
                    <div className='menu-logo'><FaRegComment color='white' scale={30} /></div>
                    <div> How To Play</div>
                </div>
                <div onClick={()=>nevigate("/info")} className='menu'>
                    <div className='menu-logo'><FaPhone color='white' scale={30} /></div>
                    <div> Contact Us</div>
                </div>
                <div 
                    className='menu' 
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: 'Website',
                                text: 'Check out this amazing website!',
                                url: 'https://yourwebsite.com', // Replace with your website URL
                            }).then(() => {
                                console.log('Thanks for sharing!');
                            }).catch((error) => {
                                console.error('Error sharing:', error);
                            });
                        } else {
                            alert('Sharing not supported on this browser.');
                        }
                    }}
                >
                    <div className='menu-logo'><FaShareAlt color='white' scale={30} /></div>
                    <div> Share Now</div>
                </div>
                <div className='menu'>
                    <div className='menu-logo'><AiFillStar color='white' scale={30} /></div>
                    <div> Rate us</div>
                </div>
                <div onClick={()=>nevigate("/")} className='menu'>
                    <div className='menu-logo'><FaSignOutAlt color='white' scale={30} /></div>
                    <div> Logout Account</div>
                </div>
            </div>

        </motion.div>)}
        </>
    )
}

export default Navbar;