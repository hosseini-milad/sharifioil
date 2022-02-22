import env from "../../env"
import '../../css/slider.css'
import ImageGallery from 'react-image-gallery';
import FetchGraph from "../../components/fetchGraph";
import { SLIDER_QUERY } from "../../components/Query";
function Slider(){
	const sliders = FetchGraph(SLIDER_QUERY)
	console.log(sliders)
	const linkNow=(e)=>{
		console.log(e)
	}
	const images = [
		sliders&&sliders.slides.nodes.map(slide=>(
			{
				original: slide.featuredImage.node.sourceUrl,
			}
		))
	  ];
    return(
        <section className="banner">
		  {sliders&&<ImageGallery 
			showFullscreenButton={false} 
			showPlayButton={false} 
			showThumbnails={false} 
			onClick={(e)=>linkNow(e)}
			items={
				sliders&&sliders.slides.nodes.map(slide=>(
					{
						original: slide.featuredImage.node.sourceUrl,
					}
				))	
			}
			/>}
		</section>
    )
}
export default Slider