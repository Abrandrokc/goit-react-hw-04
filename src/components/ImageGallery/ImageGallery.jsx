import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({items, onClick}) {
  return  <ul className={css.ul}>
        {items.map((item) => 
            <ImageCard key={item.id} item={item} onClick={onClick} />
        )}
	
</ul>

}