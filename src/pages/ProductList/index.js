import DashboardBox from "../Dashboard/components/dashboardBox";
import { FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdDelete, MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from "@mui/material/styles";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Pagination from '@mui/material/Pagination';

import { FaEye } from "react-icons/fa";

import { Chart } from "react-google-charts";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor': 'transparent',
  'chartArea': {'width': '100%', 'height': '100%'},
   
};

// export const options = {
//   title: "Company Performance",
//   hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
//   vAxis: { minValue: 0 },
//   chartArea: { width: "50%", height: "70%" },
// };

//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = 
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];

    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: { 
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
     },
};

const ProductList = () => {

    const [ anchorEl, setAnchorE1 ] = useState(null);
    const [ showBy, setShowBy] = useState('');
    const [ showByCat, setShowByCat] = useState('');
    const [ showByBrand, setShowByBrand] = useState('');
    const [ showBySearch, setShowBySearch] = useState('');
        const open = Boolean(anchorEl);
    
        const ITEM_HEIGHT = 48;


        const context = useContext(MyContext);

        useEffect(() => {
            context.setisHideSidebarAndHeader(false);
        },[]);
    
        const handleClick = (event) => {
            setAnchorE1(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorE1(null);
        };

      
    return(
        <>
            <div className="right-content w-100">

                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product List</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">'
                        <StyledBreadcrumb components="a" href="#" label="Dashboard" icon={<HomeIcon fontSize="small" />} />

                        <StyledBreadcrumb label="Products" href="#" deleteIcon={<ExpandMoreIcon />} />

                        {/* <StyledBreadcrumb label="Product List" deleteIcon={<ExpandMoreIcon />} /> */}
                    </Breadcrumbs>
                </div>


                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                           <DashboardBox color={['#1da256','#48d483']} icon={<FaUserCircle />} grow={true} />
                           <DashboardBox color={['#c012e2','#eb64fe']} icon={<IoMdCart />} />
                           <DashboardBox color={['#2c78e5','#60aff5']} icon={<MdShoppingBag />} />
                           <DashboardBox color={['#e1950e','#f3cd29']} icon={<GiStarsStack />}  />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0 topPart2">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
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

                            <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                            <p className="">$3,787,681.00 in last month</p>

                            <Chart 
                                chartType="PieChart"
                                width="100%"
                                height="170px"
                                data={data}
                                options={options}
                            />
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e)=>setShowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showByCat}
                                    onChange={(e)=>setShowByCat(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showByBrand}
                                    onChange={(e)=>setShowByBrand(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBySearch}
                                    onChange={(e)=>setShowBySearch(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead  className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th style={{ width: '300px' }}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to={"/product/details"}>
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to={"/product/details"}>
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRbuDIIvIv1O1kfrKvuVmG54i5HZsNF_jT7w9-sypnWYDtYMapPiVTf8jZUddHYjP0VMuXcdjx61dRQ3ZyAqcsTMXj6MOHNIPMf10svrL32T8M9oevGIE" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '70px' }}>
                                            <del className="old">$21.00</del> 
                                            <span className="new text-danger">$21.00</span> 
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    <div className="d-flex tableFooter">
                        <p>showing<b>12</b> of <b>60</b> results </p>
                        <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
                    </div>

                    </div>

                </div>
                
            </div>
        </>
    )
}

export default ProductList;
