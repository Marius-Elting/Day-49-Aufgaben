import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <section className="sectionTop"></section>
            <section className="sectionBottom">
                <h1>Welcome to my simple Blog</h1>
                <Link to="./blog">Go to articles</Link>
            </section>
        </div>
    );
}

export default Home;