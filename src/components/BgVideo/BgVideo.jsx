import React from "react";
import PowerSlap from 'components/video/video-converter.mp4';
import VideoWeb from 'components/video/video.mp4';

import st from 'components/BgVideo/BgVideo.module.css';

const BgVideo = () => {
    return(
        <div className={st.video}>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          className={st.fullScreenVideo}
        >
          <source type="video/mp4" src={PowerSlap} />
          <source type="video/webm" src={VideoWeb} />
        </video>
      </div>
    )
};

export default BgVideo;