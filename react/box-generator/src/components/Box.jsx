
const Box = (props) => {
    const boxStyle = {
        height: "100px",
        width: "100px",
        backgroundColor: props.color
    }

    return (
        <div style={boxStyle}></div>
    )
}

export default Box;