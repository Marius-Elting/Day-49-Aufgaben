import { Link } from "react-router-dom";

const style = {
    wrapper: {
        padding: "10px",
        margin: "10px",
        border: "2px solid black",
        width: "200px"
    },
};
function BlogItem(props) {
    return (
        <div style={style.wrapper}>
            <img src={props.img} alt={props.name}></img>
            <p>{props.name}</p>
            <Link to={`/blogdetails/${props.pageNumber}`}>Read More</Link>
        </div>
    );
}

export default BlogItem;