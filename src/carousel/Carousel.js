import Track from "./Track"
import './Carousel.css'
import Button from "./Button"

const Carousel = ({data}) => {
    return (
        <div className="carousel">
            <Button className='left' direction={'Left'} />
            <Button className='right' direction={'Right'} />
            <Track data={data}/>
        </div>
    )
}

export default Carousel;