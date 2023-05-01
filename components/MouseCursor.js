import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MouseCursor = () => {
    const [mousePostion , setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [mouseVariant, setMouseVariant] = useState("default")

    console.log(mousePostion)
    useEffect(()=> {

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })

        }


        window.addEventListener("mousemove", mouseMove)

        return ()=> {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default : {
            x: mousePostion.x -16,
            y: mousePostion.y -16,
        }
    }

  return (
    <motion.div className='cursor'
    variants={variants}
    animate={mouseVariant}
    />
  )
}

export default MouseCursor