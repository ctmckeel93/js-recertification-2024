import Advertisement from "./Advertisement";
import SubContent from "./SubContent";


const MainContent = () => {
    return (
        <div className="main">
            <SubContent/>
            <SubContent/>
            <SubContent/>
            <Advertisement/>
        </div>
    )
}

export default MainContent;