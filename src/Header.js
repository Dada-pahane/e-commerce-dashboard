import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, { useEffect, useRef } from 'react';

function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'))

    var UserName = undefined;
    const linkRef = useRef(null);




    function LogOut() {

        localStorage.clear();

        linkRef.current.click();
    }



    if (user != null || user != undefined) {
        UserName = user.username;
    } else {
        UserName = "";
    }

    return (
        <>

            <span style={{ display: 'none' }}>
                <Link id="link_add" to="/add" ref={linkRef}>Add Product</Link>
            </span>
            <Navbar expand="lg" className="nav-bar-warpper">
                {
                    localStorage.getItem('user-info') ?
                        <>
                            <Link to="/add">Add Propduct</Link>
                            <Link to="/update">Upadet Propduct</Link>
                            <Link to="/">Product list</Link>
                            
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/regiter">Regitor</Link>
                         
                        </>
                }
                {
                    localStorage.getItem('user-info') ?
                        <>

                            <Navbar>
                                <NavDropdown title={UserName} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={LogOut}> <span style={{ color: 'black', important: 'true' }}>Log Out</span>  </NavDropdown.Item>
                                    <NavDropdown.Item> <span style={{ color: 'black', important: 'true' }}>Profile</span> </NavDropdown.Item>
                                </NavDropdown>
                            </Navbar>
                        </>
                        :
                        <>


                        </>
                }





            </Navbar>

        </>

    );
}

export default Header;