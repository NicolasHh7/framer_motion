"use client"

import {motion} from "motion/react"

// Container 
export const Drag = () =>{
    return(
       <div className="drag-container" >
        <motion.div
        drag
        dragElastic={0.2}
        dragConstraints={{left: -80, right: 80, top: -40, bottom: 40}}
        className="card bg-white w-fit text-black p-5 rounded-md"
        >Drag me!</motion.div>
       </div> 
    )
}
