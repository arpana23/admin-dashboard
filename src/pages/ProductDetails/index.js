import React, { useRef } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardBox from "../Dashboard/components/dashboardBox";
import { color, fontWeight } from "@mui/system";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import userIcon from '../../assets/images/user.png';

import Slider from "react-slick";
import UserAvatarImgComponent from "../../components/userAvtarImg";
import { BsFillTagsFill } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";

import Rating from '@mui/material/Rating';
// import { Button } from "bootstrap";
import Button from '@mui/material/Button';
import { FaReply } from "react-icons/fa";
import { CgSize } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdFlower } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { HiBadgeCheck } from "react-icons/hi";

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

const ProductDetails = () =>{

    const productSliderBig = useRef();
    const productSliderSml = useRef();

    var ProductSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var ProductSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    const goToSlide=(index)=>{
        productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);
    }

    return(
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Product View</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb
                            label="Products"
                            component="a"
                            href="#"
                           
                        />

                        <StyledBreadcrumb
                            label="Product View"
                           
                        />
                        </Breadcrumbs>
                       
                </div>

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className="mb-4">Product Gallery</h6>
                            </div>
                            <Slider {...ProductSliderOptions} ref={productSliderBig} className="sliderBig mb-3">
                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item">
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                            </Slider>
                            <Slider {...ProductSliderSmlOptions}  ref={productSliderSml} className="sliderSml">
                                <div className="item" onClick={()=>goToSlide(1)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>
                            
                            
                                <div className="item" onClick={()=>goToSlide(2)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>
                            
                            
                                <div className="item" onClick={()=>goToSlide(3)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>
                            
                            
                                <div className="item" onClick={()=>goToSlide(4)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>
                            
                            
                                <div className="item" onClick={()=>goToSlide(5)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item" onClick={()=>goToSlide(6)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item" onClick={()=>goToSlide(7)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>

                                <div className="item" onClick={()=>goToSlide(8)}>
                                    <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100" />
                                </div>
                            </Slider>
                          
                        </div>
                    <div className="col-md-7">
                        <div className="pt-3 pb-3 pl-4 pr-4">
                            <h6 className="mb-4">Product Details</h6>

                            <h4>Formal suits for men wedding slim fit 3 piece dress buisness party jacket</h4>

                            <div className="productInfo mt-3">
                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><MdBrandingWatermark /></span>
                                        <span className="name">Brand</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>Ecstasy</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><BiSolidCategoryAlt /></span>
                                        <span className="name">Category</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>Women's</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><IoMdFlower /></span>
                                        <span className="name">Tags</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :   <span>
                                            <ul className="list list-inline tags sml">
                                                <li className="list-inline-item">SUITE</li>
                                                <li className="list-inline-item">PARTY</li>
                                                <li className="list-inline-item">DRESS</li>
                                                <li className="list-inline-item">SMART</li>
                                                <li className="list-inline-item">MAN</li>
                                                
                                            </ul>
                                        </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><IoMdColorPalette /></span>
                                        <span className="name">Color</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :   <span>
                                            <ul className="list list-inline tags sml">
                                                <li className="list-inline-item">RED</li>
                                                <li className="list-inline-item">BLUE</li>
                                                <li className="list-inline-item">WHITE</li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><CgSize /></span>
                                        <span className="name">Size</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>
                                            <ul className="list list-inline tags sml">
                                                <li className="list-inline-item">SM</li>
                                                <li className="list-inline-item">MD</li>
                                                <li className="list-inline-item">L</li>
                                                <li className="list-inline-item">XL</li>
                                                <li className="list-inline-item">XXL</li>
                                            </ul>
                                         </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><BsFillTagsFill /></span>
                                        <span className="name">Price</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>$37</span>&nbsp;&nbsp;<strike>$42</strike>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><FaCartShopping /></span>
                                        <span className="name">Stock</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>68 Piece</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><IoStarHalfSharp /></span>
                                        <span className="name">Review</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>(03)Review</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><HiBadgeCheck /></span>
                                        <span className="name">Published</span>
                                    </div>
                                    <div className="col-sm-9">
                                    :    <span>02 Feb 2020</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    </div>

                <div className="p-4">
                    <h6 className="mt-4">Product Description</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <br/>

                    <h6 className="mt-4 mb-4">Rating Analytics</h6>

                    <div className="ratingSection">
                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                                5 Star
                            </span>

                            <div className="col-2">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: '70%'}}></div>
                                </div>
                              
                            </div>

                            <span className="col3">
                                (22)
                            </span>

                        </div>

                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                                4 Star
                            </span>

                            <div className="col-2">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: '50%'}}></div>
                                </div>
                              
                            </div>

                            <span className="col3">
                                (2)
                            </span>

                        </div>

                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                                3 Star
                            </span>

                            <div className="col-2">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: '30%'}}></div>
                                </div>
                              
                            </div>

                            <span className="col3">
                                (2)
                            </span>

                        </div>

                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                                2 Star
                            </span>

                            <div className="col-2">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: '20%'}}></div>
                                </div>
                              
                            </div>

                            <span className="col3">
                                (2)
                            </span>

                        </div>

                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                                1 Star
                            </span>

                            <div className="col-2">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: '10%'}}></div>
                                </div>
                              
                            </div>

                            <span className="col3">
                                (2)
                            </span>

                        </div>
                    </div>

                    <br />

                    <h6 className="mt-4 mb-4">Customer_reviews</h6>

                    <div className="reviewsSection">
                        <div className="reviewsRow">
                            <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                            <UserAvatarImgComponent img={userIcon}  lg={true} />

                                            <div className="info pl-3">
                                                <h6>Miron Mahmud</h6>
                                                <span>25 minutes ago!</span>
                                            </div>
                                        </div>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>
                                    
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>
                                   
                                    
                                
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            </div>
                        </div>

                        <div className="reviewsRow reply">
                            <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                            <UserAvatarImgComponent img={userIcon}  lg={true} />

                                            <div className="info pl-3">
                                                <h6>Miron Mahmud</h6>
                                                <span>25 minutes ago!</span>
                                            </div>
                                        </div>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>
                                    
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>
                                   
                                    
                                
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            </div>
                        </div>

                        <div className="reviewsRow reply">
                            <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                            <UserAvatarImgComponent img={userIcon}  lg={true} />

                                            <div className="info pl-3">
                                                <h6>Miron Mahmud</h6>
                                                <span>25 minutes ago!</span>
                                            </div>
                                        </div>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>
                                    
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>
                                   
                                    
                                
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            </div>
                        </div>

                        <div className="reviewsRow">
                            <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                            <UserAvatarImgComponent img={userIcon}  lg={true} />

                                            <div className="info pl-3">
                                                <h6>Miron Mahmud</h6>
                                                <span>25 minutes ago!</span>
                                            </div>
                                        </div>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>
                                    
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>
                                   
                                    
                                
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            </div>
                        </div>

                        <br />

                        <h6 className="mt-4 mb-4">Review Reply Form</h6>

                        <form className="reviewForm">
                            <textarea placeholder="write here">
                            </textarea>

                            <Button className="btn-blue btn-big btn-lg mb-4 w-100 mt-4">drop your replies</Button>
                        </form>

                    </div>

                </div>
                    

                </div>


            </div>

           
        </>
    )
}


export default ProductDetails;