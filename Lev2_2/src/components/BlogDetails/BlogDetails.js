import { useParams } from "react-router-dom";
import BlogData from '../../BlogData';



function BlogDetails() {
    let params = useParams();
    // console.log(BlogData.indexOf(params.name));
    let cbd = BlogData[params.name];
    return (
        <div>
            <img src={cbd.img_url} alt={cbd.title}></img>
            <h2>{cbd.title}</h2>
            <p>{cbd.description}</p>
            <p>{cbd.author}</p>
            <p>{cbd.published_date}</p>
        </div>
    );
}

export default BlogDetails;