import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    // console.log(user)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/allItems'>All Items</NavLink> </li>
        <li> <NavLink to='/addItem'>Add Item</NavLink> </li>
        <li> <NavLink to='/myList'>My Item List</NavLink> </li>
    </>

    return (
        <div className="navbar max-w-7xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'>Artisan Clayworks</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end z-10	">
                {
                    user ? <button onClick={handleSignOut} className="btn">Log out</button> : <Link to='/login'><button className="btn">Login</button></Link>
                }
                {/* <Link to='/register'><button className="btn">Register</button></Link> */}

                {
                    user && <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt={user.displayName}
                                src={user.photoUrl}/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Edit Profile</a></li>
                        <li><a>Settings</a></li>
                    </ul>
                </div> 
                }
                
            </div>
        </div>
    );
};

export default NavBar;