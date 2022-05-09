import React, { useEffect } from 'react';
import './index.css';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
var flag = true;

function menuOpen(){
    if(flag){
        document.getElementById('sub-menu2').classList.add('sub-menu2-after');
        setTimeout(()=>{
            document.getElementById('sub-menu').classList.remove('sub-menu-before');
            document.getElementById('closeIcon').style = 'display:inline-block';
            document.getElementById('menuIcon').style = 'display:none';
            flag = !flag;
        },200)
    }else{
        document.getElementById('sub-menu').classList.add('sub-menu-before');
        setTimeout(()=>{
            document.getElementById('sub-menu2').classList.remove('sub-menu2-after');
            document.getElementById('menuIcon').style = 'display:inline-block';
            document.getElementById('closeIcon').style = 'display:none';
            flag = !flag;
        },500)
    }
}
const Nav = () => {
    
    useEffect(()=>{
        document.getElementById('sub-menu').classList.add('sub-menu-before');
    })

    return ( <React.Fragment>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1 p-2 d-flex justify-content-center">
                    <img src="logo.png" alt="adyfi logo" srcSet="logo.png" />
                </div>
                <div className="col-md-11">
                    <div className="row p-2 navigation">
                        <div className="col-md-11 p-0">

                            <div id='sub-menu' className="col-md-12 sub-menu d-flex justify-content-between align-items-center">
                                    <a href="/">
                                        <span className='ml-3'>
                                            Home
                                        </span>
                                    </a>
                                    <a href="/about">
                                        <span className=''>
                                            About Us
                                        </span>
                                    </a>
                                    <a href="/contact">
                                        <span className=''>
                                            contact Us
                                        </span>
                                    </a>
                                    <a href="/services">
                                        <span className=''>
                                            Services
                                        </span>
                                    </a>
                                    <a href="/blogs">
                                        <span className=''>
                                            Blogs
                                        </span>
                                    </a>
                                    <a href="/joinus">
                                        <span className=''>
                                            Join Us
                                        </span>
                                    </a>
                                    <a href="/netaji">
                                        <span className=''>
                                            Netaji
                                        </span>
                                    </a>
                                    <a href="/portfolio">
                                        <span className=''>
                                            Portfolio
                                        </span>
                                    </a>
                                    <a href="/signin">
                                        <span className=''>
                                            Sign In
                                        </span>
                                    </a>
                            </div>
                        </div>

                        <div className="col-md-1 d-flex align-items-start h2 p-0 text-white">
                            <div id='sub-menu2' className="sub-menu2 d-flex justify-content-center align-items-center" onClick={menuOpen}>
                                <AiOutlineMenu className='nav-icon' id='menuIcon' />
                                <AiFillCloseCircle className='nav-icon' id='closeIcon' />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>

       <h1>
        </h1>
    </React.Fragment> );




}

export default Nav;