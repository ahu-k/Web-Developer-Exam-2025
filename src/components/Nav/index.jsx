import { getSession } from '@/actions/logout';
import NavLink from './NavLink';

import "./nav-style.scss"

export default async function Nav(){
    const session = ( await getSession() );

    return(
        <nav>
            <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn">
                    <span></span>
                </label>
                <label htmlFor="active" className="close"></label>
                <div className="wrapper">
                    <ul>
                        <NavLink href="/home">Home</NavLink>
                        <NavLink href="/search">Search</NavLink>
                        {
                            session && (
                                <NavLink href="/schedule">My Schedule</NavLink>
                            )
                        }
                        {
                            session ? (
                                <NavLink href="/login">Log Out</NavLink>
                            ) : (
                                <NavLink href="/login">Log In</NavLink>
                            )
                        }
                    </ul>
            </div>
        </nav>
    )
}

//Overstående kode er fra en af mine tidligere opgaver.