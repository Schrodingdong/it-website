const MainDiv = ({ children }) => {
    // Styling
    const divStyle = {
        width:"100%",
        position:"relative",
        margin:"150px 0"
    }

    return (
        <div style={ divStyle }>
            { children }
        </div>
    )
}

export default MainDiv;