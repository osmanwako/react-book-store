import BookForm from "./books/bookform";
import BookInformation from "./books/booklists";

const Home = () => {
    return <div className="container">
        <div>
            <BookInformation />
            <div className="horizontal-divider"></div>
            <BookForm />
        </div>
    </div>
}

export default Home;