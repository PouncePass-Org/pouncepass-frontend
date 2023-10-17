import Header from '../components/Header';
import FeaturedEvent from '../components/FeaturedEvent';
import SearchBar from '../components/SearchBar';
import UpcomingEvents from '../components/UpcomingEvents';

function EventDetail() {
    return (
        <div className="bg-amber-950">
            <Header />
            <SearchBar/>
            {/* The rest of your app */}
        </div>
    );
}

export default EventDetail;
