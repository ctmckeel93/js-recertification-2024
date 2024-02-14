import { Link } from "react-router-dom";
const Navbar = (props) => {
    return (
        <nav class="p-2 navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                {props.label}
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to={"/"} class="nav-link" href="#">
                            Catalog
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/books"}class="nav-link" href="#">
                            Add Book
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
