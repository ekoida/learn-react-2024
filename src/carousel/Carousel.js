import Track from "./Track"
import './Carousel.css'

const Carousel = ({data}) => {
    return (
        <div className="carousel">
            <Track data={data}/>
        </div>
    )
}

export default Carousel;