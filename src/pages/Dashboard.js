import Header from '../components/Header';
import FeaturedEvent from '../components/FeaturedEvent';
import SearchBar from '../components/SearchBar';
import UpcomingEvents from '../components/UpcomingEvents';
import {useNavigate} from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="bg-amber-950">
            <Header />
            <SearchBar/>
            <div className="flex mt-4">
                <FeaturedEvent className="w-2/3" />
                <UpcomingEvents />
            </div>
            {/* The rest of your app */}
        </div>
    );
}

export default Dashboard;
