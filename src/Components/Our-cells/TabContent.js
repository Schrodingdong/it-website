import {Container, Typography} from "@mui/material";

const TabContent = (props) => {
    return (
        <Container maxWidth={"xl"} sx={{ display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", alignItems:"center" }}>
            <img src={props.img} alt={"cell"} style={{
                height:"50%"
            }}/>
            <Typography variant={"justifiedText"} color={"text.primary"}>
                <p>{props.children}</p>
            </Typography>
        </Container>
    )
}


export default TabContent;