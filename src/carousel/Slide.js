import './Slide.css'

const Slide = ({data}) => {
    const {title, image} = data
    return (<div className='slide'>
        <h2>{title}</h2>
        <img src={image} alt=""/>
    </div>)
}

export default Slide;