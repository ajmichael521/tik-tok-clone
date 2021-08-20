import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              src="https://v16m.tiktokcdn.com/6a65ce410bb89fb50b28f8a5b8c68cdc/611fd0b2/video/tos/useast2a/tos-useast2a-ve-0068c004/0be4b75f27a94e19a5f0dc7074f6fe9a/?a=1340&br=2102&bt=1051&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=5R.UCEST_4ka&l=202108200956250102450701202B07C2E1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2pvcTdwdXE2NjMzNzczM0ApO2Y1MzQ5N2RmN2g5OWhnaWctYy4zY15sY19gLS1kMTZzc2I2YzZeNjE1M2AzYmJgX186Yw%3D%3D&vl=&vr="
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
