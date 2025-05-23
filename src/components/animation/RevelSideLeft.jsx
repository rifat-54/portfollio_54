import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';


const RevelSideLeft = ({children}) => {
    const ref=useRef(null)

    const isInView=useInView(ref,{once:true});
    const mainControls=useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible')
        }
    },[isInView])

    return (
        <div ref={ref} className='relative overflow-hidden'>
            <motion.div
            variants={{
                hidden:{opacity:0,x:-80},
                visible:{opacity:1,x:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:1.5,delay:.5}}
            
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevelSideLeft;