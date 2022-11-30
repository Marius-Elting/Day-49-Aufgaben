import BlogData from '../../BlogData';
import BlogItem from '../BlogItem/BlogItem';

const style = {
    wrapper: {
        display: "flex"
    }
};

function Blog() {
    console.log(BlogData);
    return (

        <div>This is a Blog
            <sectio style={style.wrapper}>
                {BlogData.map((dataItem, index) => {
                    return (
                        <BlogItem name={dataItem.title} img={dataItem.img_url} key={index} pageNumber={index} />
                    );
                })}
            </sectio>
        </div>
    );
}

export default Blog;