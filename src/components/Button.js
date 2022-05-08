function Button({ content, logMessage, disabled }) {

    return (
        <button disabled = {disabled} onClick={() => console.log(logMessage)}>{content}</button>
    )
}

export default Button;