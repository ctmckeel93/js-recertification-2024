import BookTable from "../components/BookTable";
import Navbar from "../components/Navbar"

const Dashboard = ({books}) => {
    return (
        <div className="d-flex flex-column gap-3">
            <Navbar label={"Book Catalog"}/>
            <BookTable books={books}/>
        </div>
    )
}

export default Dashboard;