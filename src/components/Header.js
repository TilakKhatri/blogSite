import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className=' sticky-top mb-5'>
            <nav className="navbar bg-dark shadow-box-example z-depth-2  ">
                <div className="container-fluid d-flex justify-content-between">
                    <Link to="/">    <span className="mb-0 fs-3 fw-bold text-white text-uppercase">Begineers guides</span></Link>
                    <Link to='/addblog'>    <button className='m-3 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>
                        <span className=" fs-3 fw-bold text-white text-uppercase">+</span>
                    </button></Link>

                </div>
            </nav>

        </div>
    )
}

export default Header