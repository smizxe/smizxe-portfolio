import { motion } from 'framer-motion';

const BackgroundDecoration = () => {
    // Positioning shapes randomly or strategically across the screen space
    // Using 'fixed' to cover the viewport, but z-index low to stay behind content
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

            {/* Top Left Area */}
            <motion.div
                initial={{ opacity: 0.1, scale: 0.8, rotate: 0 }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.1, 0.8],
                    rotate: 360
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="absolute top-[10%] left-[5%] w-64 h-64 border border-white/5 rounded-full"
            />

            {/* Middle Right Area */}
            <motion.div
                initial={{ opacity: 0.1, scale: 0.8, rotate: 0 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [0.8, 1.2, 0.8],
                    rotate: -360
                }}
                transition={{
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="absolute top-[40%] right-[10%] w-96 h-96 border border-white/5 rounded-full dashed-border"
            />

            {/* Bottom Left Area */}
            <motion.div
                initial={{ opacity: 0.1, scale: 0.8 }}
                animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scale: [0.8, 1, 0.8],
                    x: [-20, 20, -20]
                }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="absolute bottom-[20%] left-[15%] w-48 h-48 border border-white/5 rounded-full"
            />

            {/* Extra subtle shape */}
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                    duration: 15,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="absolute top-[60%] right-[30%] w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"
            />
        </div>
    );
};

export default BackgroundDecoration;
