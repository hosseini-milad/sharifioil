import { CATEGORY_QUERY } from "../../components/Query";
import FetchApi from '../../components/fetchGraph'

function Posts(){
	const queryLists = FetchApi(CATEGORY_QUERY)
    return(
        <section className="blogParts">
			<div className="blogTitle">
				<h2 >
				اجازه دهید به رشد کسب و کار شما کمک کنیم.
				</h2>
				<p>
				برچسب های آنلاین منبع قابل اعتماد اینترنت برای برچسب ها است. ببینید چرا هزاران مشتری برای کمک به موفقیت به ما اعتماد می کنند.
				</p>
			</div>
			{queryLists&&queryLists.productCategories.nodes.map((catData,i)=>(
			  <div className="blogPart" key={i}
			  style={{direction: i===1?"ltr":"rtl"}}>
				<div className="blogText">
					<div className="topTitle">
						{catData.description.split('-')[0]}
					</div>
					<h2>
						{catData.description.split('-')[1]}	
					</h2>
					<p>
						{catData.description.split('-')[2]}
					</p>
				</div>
				<div className="blogImg">
					<div className="blogimg-anim">
						<img className=""  alt="The right size labels" src={catData.image.sourceUrl} />
					</div>
				</div>
			</div>
			))}
		</section>
    )
}
export default Posts