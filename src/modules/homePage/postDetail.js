import SimpleFetch from "../../components/simpleFetch";
import env from "../../env";

function PostDetail(props){
    const catData = props.productData;
    const index = props.index;
    const catImg = SimpleFetch(env.blogMedia+catData.featured_media);
    const category=SimpleFetch(env.blogCategory+catData.categories[0])
    return(
<div className="blogPart" key={index}
    style={{direction: index===1?"ltr":"rtl"}}>
    <div className="blogText">
        <div className="topTitle">
            {category&&category.name}
        </div>
        <h2>
            {catData.title&&catData.title.rendered}	
        </h2>
        <p className="postContent" 
        dangerouslySetInnerHTML={{__html:catData.content.rendered.split('<h')[0]}}>
        </p>
        <a href={catData.link} >مشاهده مطلب</a>
    </div>
    <div className="blogImg">
        <div className="blogimg-anim">
            <img className=""  alt={catData.title.rendered} 
            src={catImg&&catImg.media_details.sizes.medium_large?
                 catImg.media_details.sizes.medium_large.source_url:
                 catImg.source_url} />
        </div>
    </div>
</div>
    )
}
export default PostDetail;