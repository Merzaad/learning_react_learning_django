import { Outlet, Link } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="navbar">
                    <div className="logo">
                        <h1>NEWS</h1>
                    </div>
                    <div className="sb-items">
                        <ul> 
                            <li> 
                                <Link to="/">News</Link>
                            </li>
                            <li>
                                <Link to="/offers" target="_self">Offers</Link>
                            </li>
                            <li>
                                <Link to="/awards" target="_self">Awards</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
export default Sidebar;

// does nav bar list need key?