import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { IoIosTimer } from "react-icons/io";
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const DashboardBox = (props) => {

    const [ anchorEl, setAnchorE1 ] = useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE1(null);
    };

 
    return(
        <>
            <Button className="dashboardBox" style={{ 
                // backgroundImage: `linear-gradient(to right, red, yellow)`
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
            }}>

                {
                    props.grow === true ?

                    <span className="chart"><TrendingUpIcon /></span>

                    :

                    <span className="chart"><TrendingDownIcon /></span>
                }

                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className="text-white mb-0">Total Users</h4>
                        <span className="text-white">277</span>
                    </div>
                    <div className="ml-auto">
                        {
                            props.icon ? 
                            <span className="icon">
                                { props.icon ? props.icon : '' }
                            </span>

                            :

                            ''

                        }
                        
                    </div>
                </div>

                <div className="d-flex align-items-center w-100 bottomEle">
                    <h6 className="text-white mb-0 mt-0">Last Month</h6>
                    <div className="ml-auto">
                        <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical /></Button>
                            <Menu
                                className="dropdown_menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                paper: {
                                    style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                    },
                                },
                                list: {
                                    'aria-labelledby': 'long-button',
                                },
                                }}
                            >
                                
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer /> Last Day
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer /> Last Week
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer /> Last Month
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <IoIosTimer /> Last Year
                                </MenuItem>
                               
                            </Menu>
                    </div>
                </div>

            </Button>
            
        </>
    )
}

export default DashboardBox;