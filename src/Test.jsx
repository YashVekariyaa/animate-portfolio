import { motion } from "framer-motion"
import { useState } from "react"

const Test = () => {

    const [open, setOpen] = useState(false)
    // const variants = {
    //     visible: { opacity: 1, x: 500, transition: { type: "spring", stiffness: 100, damping: 100 } },
    //     hidden: { opacity: 0 }
    // }

    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 100,
            // transition: { staggerChildren: 0.2 }
            transition: { delay: i * 0.3 },
        }),
        hidden: { opacity: 0 },
    };

    const items = ["item1", "item2", "item3", "item4"];

    return (
        <div className='course'>
            {/* <motion.div className="box"
                variants={variants}
                // initial="hidden"
                // animate="visible"
                // initial={{ opacity: 0.5, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1, x: 200, y: 500 }}
                transition={{ duration: 2 }}
                animate={open ? "visible" : "hidden"}
            // whileTap={{ opacity: 1, scale: 2 }}
            // drag
            >
            </motion.div>
            <button onClick={() => setOpen(prev => !prev)}>Click</button> */}

            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item, i) => (
                    <motion.li variants={variants} key={item} custom={i}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div >
    )
}

export default Test