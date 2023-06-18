import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";


function VideoSidebar({likes, messages, shares, saves}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleLike() {
    setLiked(!liked)
  }

  function handleSave() {
    setSaved(!saved)
  }

  return (
    <div className="videoSibar">
      <div className="videoSidebar-options" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar-options">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar-options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
      <div className="videoSidebar-options" onClick={handleSave}>
        { saved ? (<BookmarkIcon fontSize="large" />) : (<BookmarkBorderIcon fontSize="large" />)}
        <p>{saved ? saves + 1 : saves}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
