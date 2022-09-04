import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {motion,AnimatePresence} from "framer-motion"

import styles from "./GlassCard.module.css"

const cardAnimation = {
    key:"glassCard",
    initial:{ height:"0", opacity:0 },
    animate:{height:"500px", opacity:1},
    exit:{ height:"0", opacity:0 }
}

const GlassCard = (props) => {
    return (
        <AnimatePresence>
            {props.isShown && (
                <motion.div {... cardAnimation}>
                    <Card className={styles.glassCard} sx={{ maxWidth: "lg" }}>
                        <CardMedia
                            component="img"
                            image={props.src}
                            alt="Live from space album cover"
                            className={styles.cardImage}
                        />
                        <CardContent>
                            <Typography gutterBottom align={"center"} variant="h3">
                                {props.year}
                            </Typography>
                            <Typography variant="justifiedText" component={"p"} color="text.secondary">
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