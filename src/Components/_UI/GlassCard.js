import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {motion,AnimatePresence} from "framer-motion"

import styles from "./GlassCard.module.css"

const cardAnimation = {
    hide:{
        height:0,
        opacity:0,
        transition:{
            height:{
                ease:"easeInOut",
                delay:.5
            }
        }},
    show:{
        height:"500px",
        opacity:1,
        transition:{
            height:{
                ease:"easeInOut",
            },
            opacity:{
                delay:.2
            }
        }}
}

const GlassCard = (props) => {
    return (
        <AnimatePresence>
            {props.isShown && (
                <motion.div
                    key={ "glassCard" }
                    variants={ cardAnimation }
                    initial={"hide"}
                    animate={"show"}
                    exit={"hide"}>
                    <Card className={styles.glassCard} sx={{ maxWidth: "lg" }}>
                        <CardMedia
                            component="img"
                            image={props.src}
                            alt="Live from space album cover"
                            className={styles.cardImage}
                        />
                        <CardContent style={{ width:"50%" }}>
                            <Typography gutterBottom align={"center"} variant="h3" color={"primary.dark"}>
                                {props.year}
                            </Typography>
                            <Typography variant="justifiedText" component={"p"} color={"text.secondary"}>
                                {props.children}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default GlassCard;