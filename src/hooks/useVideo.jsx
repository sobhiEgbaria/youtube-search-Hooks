import React, { useEffect, useState } from "react";
import youtube from "../components/Apis/youtube";

const UseVideo = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    Search(defaultTerm);
  }, [defaultTerm]);

  const Search = async (input) => {
    const res = await youtube.get(`/search`, {
      params: {
        q: input,
      },
    });

    setVideos(res.data.items);
  };

  return [videos, Search];
};

export default UseVideo;
