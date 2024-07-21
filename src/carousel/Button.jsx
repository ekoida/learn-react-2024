const Button = ({direction, moveSlide}) => {

    return (
        <button onClick={(e) => {
            moveSlide(direction)
        }}>{direction}</button>
    )

}

export default Button;