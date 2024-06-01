import Header from './Header'
import React, { useEffect ,useRef} from 'react'
import {Link} from 'react-router-dom'



function Login() {


    const linkRef = useRef(null);






    function trggert_add() {

        linkRef.current.click();

    }


    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            trggert_add()
        } else {

        }
    }, [])
    return (
        <div>

            <span style={{ display: 'none' }}>
                <Link id="link_add" to="/add" ref={linkRef}>Add Product</Link>
            </span>
            <Header />
            <h1>Log In Page</h1>
        </div>

    )
}
export default Login;