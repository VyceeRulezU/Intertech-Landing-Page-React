import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';

const Counter = ({ value, direction = "up" }) => {
    const ref = useRef(null);
    // Parse value to handle strings like "500k" or "15+"
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    
    const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [motionValue, isInView, numericValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

export default Counter;
