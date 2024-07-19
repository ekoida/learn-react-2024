const Button = ({direction}) => {

    return (
        <button onClick={(e) => {
            console.log(e.target.textContent)
        }}>{direction}</button>
    )

}

export default Button;