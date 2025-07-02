import * as motion from "motion/react-client";

export default function BackgroundVideo() {
    return (
      <motion.video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-sm opacity-90"
        src="./media/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0  , scale: 0.5}}
        animate={{ opacity: 1 , scale: 1}}
        transition={{ duration: 1.5 , ease: "easeInOut" }}
      />
    );
  }
  