import Header from '../components/Header';
import FeaturedEvent from '../components/FeaturedEvent';
import SearchBar from '../components/SearchBar';
import UpcomingEvents from '../components/UpcomingEvents';
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="bg-amber-950 h-fit">
            <Header />
            <SearchBar />
            <div className="pt-10">
                <div className="flex gap-4">
                    <FeaturedEvent className="w-1/2" style={{ height: '400px' }} />
                    <UpcomingEvents />
                </div>
            </div>
            {/* The rest of your app */}
        </div>
    );
}

export default Dashboard;
