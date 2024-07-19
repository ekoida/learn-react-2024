import Slide from "./Slide";
import './Track.css'

const Track = ({data}) => {
    return (
    <div className="track">
        {
            data.map((slideData) => (
                <Slide data={slideData} />
            ))
        }
    </div>
    )
}

export default Track;