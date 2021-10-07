import "./Video-Details.css";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import React, { useRef, useState } from "react";

export function VideoDetail() {
  const { id } = useParams();
  const ref = useRef();
  const [pauseTime, setPauseTime] = useState(0);
  const [notes, setNotes] = useState([]);
  const [writeNote, setwriteNote] = useState("");

  function fastforwardto(timeStamp) {
    ref.current.seekTo(timeStamp);
  }

  function addNote() {
    const newNote = writeNote;
    console.log(notes);
    setNotes((prev) => [
      ...prev,
      {
        note: newNote,
        timeStamp: ref.current.getCurrentTime(),
      },
    ]);
  }
  function displayTime(timeStamp) {
    let hour, min, sec, time;
    time = parseInt(timeStamp);
    hour = time / 3600;
    time = time % 3600;
    min = time / 60;
    time = time % 60;
    sec = time;
    return `${parseInt(hour)}:${parseInt(min)}:${parseInt(sec)}`;
  }

  return (
    <>
      <div className="videoDetailParent">
        <div className="videoDetailBody">
          <div className="videoTemplate">
            <ReactPlayer
              controls={true}
              ref={ref}
              width="100%"
              height="100%"
              url={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></ReactPlayer>
          </div>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setwriteNote(e.target.value);
            console.log(e.target.value);
          }}
        />

        <button onClick={addNote}>ADD NOTE</button>
        {notes &&
          notes.map((note) => {
            return (
              <>
                {" "}
                <h3>{note.note}</h3>
                <h4
                  onClick={() => {
                    fastforwardto(note.timeStamp);
                  }}
                >
                  {displayTime(note.timeStamp)}
                </h4>
              </>
            );
          })}
      </div>
    </>
  );
}
