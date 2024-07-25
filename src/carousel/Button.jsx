const Button = ({direction, moveSlide}) => {

    return (
        <button onClick={() => {
            moveSlide(direction)
        }}>{direction}</button>
    )

}

export default Button;