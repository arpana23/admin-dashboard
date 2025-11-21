import React,{ useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/user.png';

import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import SearchBox from "../SearchBox";
import { IoMenu } from "react-icons/io5";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalfSharp } from "react-icons/io5";
import Divider from '@mui/material/Divider';
import { MyContext } from "../../App";
import UserAvatarImgComponent from "../userAvtarImg";


const Header = () =>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationsDrop, setisOpenNotificationsDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationsDrop);

    const context = useContext(MyContext);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
    const handleOpenNotificationsDrop = () => {
        setisOpenNotificationsDrop(true);
    };
    const handleCloseNotificationsDrop = () => {
        setisOpenNotificationsDrop(false);
    };

    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100 flex-row">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>


                        {
                            context.windowWidth>992 && 

                             <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? <MdMenuOpen /> : <MdMenu />
                                }
                            </Button>
                            {/* <MdMenu /> */}
                            <SearchBox />
                        </div>
                        }
                       

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setthemeMode(!context.themeMode) }><MdOutlineLightMode /></Button>
                            {/* <Button className="rounded-circle mr-3"><MdDarkMode /></Button> */}
                            {/* <Button className="rounded-circle mr-3"><IoCartOutline /></Button> */}
                            
                            {/* <Button className="rounded-circle mr-3"><MdOutlineMail /></Button> */}
                            
                            <Button className="rounded-circle mr-3" onClick={handleOpenNotificationsDrop}><FaRegBell /></Button>
                            <Button className="rounded-circle mr-3 mobMenuVisible" onClick={()=>context.openNav()}><IoMenu /></Button>
                            <Menu
                                anchorEl={isOpenNotificationsDrop}
                                className="notifications dropdown_list"
                                id="notifications"
                                open={openNotifications}
                                onClose={handleCloseNotificationsDrop}
                                onClick={handleCloseNotificationsDrop}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className='head pl-3 pb-0'>
                                    <h4>Orders (12) </h4>
                                </div>

                                <Divider className="mb-1" />

                                <div className="scroll">
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <UserAvatarImgComponent img={userIcon} />
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex">
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userIcon} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b>
                                                        added to his favorite list <b>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>

                                <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                                    <Button className="btn-blue w-100">View all notifications</Button>
                                </div>
                               
                            </Menu>

                            {
                               context.isLogin !== true ? 
                               <Link to={'/login'}><Button className="btn-blue btn-lg btn-round">Sign In</Button></Link>
                                :
                                    <div className="myAccWrapper">
                                    <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                        <div className="userImg">
                                            <span className="rounded-circle">
                                                <img src={userIcon} />
                                            </span>
                                        </div>

                                        <div className="userInfo res-hide">
                                            <h4>Rahul Verma</h4>
                                            <p className="mb-0">@rahul11</p>
                                        </div>
                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={openMyAcc}
                                        onClose={handleCloseMyAccDrop}
                                        onClick={handleCloseMyAccDrop}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                    
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My account
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <IoShieldHalfSharp />
                                        </ListItemIcon>
                                        Reset Password
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                        </MenuItem>
                                    </Menu>
                                </div>
                            }
                                      
                            

                         </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;