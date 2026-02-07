"use client"

import {motion, stagger} from "motion/react"

// Container 
const container = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.15, delayChildren: 5}}
}
const item = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
}


export const FeatureList = () =>{
    const features = ["Fast","Declarative","Powerful","Fun"]
    return(
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        >
            {features.map((feature) => (
                 <motion.li
                 key={feature}
                 variants={item}
                 >

                    {feature}
                 </motion.li>
            ))}
        </motion.ul>
    )

}