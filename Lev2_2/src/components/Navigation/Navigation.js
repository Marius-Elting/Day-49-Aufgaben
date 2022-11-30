import { Link } from "react-router-dom";

const style = {
    navItem: {
        margin: "10px"
    }
};

function Navigation() {
    return (
        <div>
            <h1>My Life</h1>
            <nav >
                <ul>
                    <Link style={style.navItem} to="/">Home</Link>
                    <Link style={style.navItem} to="/Blog">Blog</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;