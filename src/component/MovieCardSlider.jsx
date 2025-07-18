import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constant/constant";
export default function MovieCardSlider({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${movie.id}`);
  };
  return (
    <>
      <div onClick={handleClick}>
        <div className="main-slider">
          <img
            src={`${baseUrl}${movie.backdrop_path}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>평점 : {movie.vote_average}</p>
          </div>
        </div>
      </div>
    </>
  );
}
