import React from 'react';
import { Dimensions, View } from "react-native";
import { NodeCameraView , NodePlayerView} from "react-native-nodemediaclient";
const { width, height } = Dimensions.get("window");
const config = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: false
  },
  videoConfig: {
    preset: 4,
    bitrate: 2000000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true,
  },
  audioConfig: {
    bitrate: 128000,
    profile: 1,
    samplerate: 44100,
  }
};
const BroadcastScreen = () => {
  const cameraViewRef = React.useRef(null);
  const streamKey = '5b2a4a75-86c2-177c-72a2-45ab2b5e2583';
  const url = `rtmp://192.168.15.12/live/1`;
  return (
    <View style={{flex: 1}}>
     {/* <NodeCameraView
        style={{width, height}}
        ref={cameraViewRef}
        outputUrl={url}
        camera={config.cameraConfig}
        audio={config.audioConfig}
        video={config.videoConfig}
        autopreview={true}
  />*/}
  <NodePlayerView 
                style={{ height: 200 }}
                ref={(vp) => { this.vp = vp }}
                inputUrl={"rtmp://192.168.15.12/live/1"}
                scaleMode={"ScaleAspectFit"}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
        />
    </View>
  );
};
export default BroadcastScreen;