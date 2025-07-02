export default function BackgroundVideo() {
    return (
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-sm opacity-90"
        src="./media/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  