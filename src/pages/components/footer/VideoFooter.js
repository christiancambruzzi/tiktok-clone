import React from "react";
import "./videoFooter.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

function VideoFooter({ name, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter-text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter-music">
          <AudiotrackIcon className="videoFooter-icon" />
          <div className="videoFooter-music-text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter-record"
        alt="imagem de um vinil grande"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
