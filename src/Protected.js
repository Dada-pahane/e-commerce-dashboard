import Header from './Header'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'




function Protected(props) {

    const linkRef = useRef(null);
    const ref_Regitration = useRef(null);

    function trggert_add() {

        linkRef.current.click();

    }
    function trggert_Regitration() {

        ref_Regitration.current.click();

    }

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            trggert_add()
        } else {
            trggert_Regitration()
        }
    }, [])

    let Componet = props.cmp;
    return (
        <div>
            <span style={{ display: 'none' }}>
                <Link id="link_add" to="/" ref={linkRef}>t</Link>
            </span>

            <span style={{ display: 'none' }}>
                <Link id="regiterid" to="/regiter" ref={ref_Regitration}></Link>
            </span>

            <Componet />
        </div>
    )
}
export default Protected;