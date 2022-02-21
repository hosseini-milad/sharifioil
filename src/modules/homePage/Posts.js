import { CATEGORY_QUERY } from "../../components/Query";
import SimpleFetch from '../../components/simpleFetch'
import env from "../../env";
import PostDetail from "./postDetail";

function Posts(){
	const queryLists = SimpleFetch(env.blogPostList)
    return(
        <section className="blogParts">
			<div className="blogTitle">
				<h2 >
				اجازه دهید به رشد کسب و کار شما کمک کنیم.
				</h2>
				<p>
				کیفیت روغن نقش اساسی در نگهداری خودرو دارد. ببینید چرا هزاران مشتری برای کمک به موفقیت به ما اعتماد می کنند.
				</p>
			</div>
			{queryLists&&queryLists.slice(0,3).map((catData,i)=>(
			  <PostDetail productData={catData} index={i} key={i}/>
			))}
		</section>
    )
}
export default Posts