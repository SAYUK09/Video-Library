import "./Video-Details.css";
import { useParams } from "react-router-dom";

export function VideoDetail() {
  const { id } = useParams();

  return (
    <>
      <div className="videoDetailParent">
        <div className="videoDetailBody">
          <div className="videoTemplate">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
