import React from "react";
import MuxPlayer, { MinResolution } from "@mux/mux-player-react";

export const VideoPlayer = () => {
  return (
    <MuxPlayer
      src={
        "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
      }
      playbackRate={1.0}
      onPlay={() => {
        console.log("onPlay");
      }}
      onEnded={() => {
        console.log("onEnded");
      }}
      onRateChange={() => {
        console.log("onRateChange");
      }}
      theme="adept"
      playbackRates={[0.8, 1, 1.3, 1.6, 2]}
      preload="metadata"
      minResolution={MinResolution["noLessThan720p"]}
    />
  );
};
