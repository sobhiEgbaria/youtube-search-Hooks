import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "./Apis/youtube";
import VideoList from "./videoList";
import VideosDetails from "./Apis/videosDetails";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [videoSelected, setVideoSelected] = useState(null);

  useEffect(() => {
    onInputSubmit("react js");
  }, []);

  const onInputSubmit = async (input) => {
    const res = await youtube.get(`/search`, {
      params: {
        q: input,
      },
    });

    setVideos(res.data.items);
    setVideoSelected(res.data.items[0]);
  };

  const onVideoSelected = (video) => {
    setVideoSelected(video);
  };

  return (
    <>
      <div className="ui container">
        <SearchBar onInputSubmit={onInputSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideosDetails videoSelected={videoSelected} />
            </div>

            <div className="five wide column">
              <VideoList videos={videos} onVideoSelected={onVideoSelected} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
