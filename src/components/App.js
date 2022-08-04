import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./videoList";
import VideosDetails from "./Apis/videosDetails";
import UseVideo from "../hooks/useVideo";
const App = () => {
  const [videoSelected, setVideoSelected] = useState(null);
  const [videos, Search] = UseVideo("react js");

  useEffect(() => {
    setVideoSelected(videos[0]);
  }, [videos]);

  const onVideoSelected = (video) => {
    setVideoSelected(video);
  };

  return (
    <>
      <div className="ui container">
        <SearchBar onInputSubmit={Search} />

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
