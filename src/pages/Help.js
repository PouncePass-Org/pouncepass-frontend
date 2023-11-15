import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {useNavigate} from "react-router-dom";
import Events from "../components/Help";

Testing

function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="bg-amber-950">
            <Header />
            <SearchBar/>
            <Events className="w-2/3" />
        </div>
    );
}

export default Dashboard;
