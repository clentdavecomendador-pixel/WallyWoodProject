import type { Poster } from "../../../types/api.types"
import { Like } from "../../../assets/svg/like/like"
import { Liked } from "../../../assets/svg/like/liked"
import { useState } from "react";
import { NavLink } from "react-router-dom";

type PosterProps = {
    poster: Poster;    
}

export const PosterCard = ({poster}: PosterProps) => {
    const [isLiked, setIsLiked] = useState(false)
    return(
        <div id="postercard">
            <figure>
                <img src={poster.image} alt={poster.name} />
            </figure>
            <figcaption>
                <p>
                    {poster.name}
                </p>
                <p style={{ whiteSpace: "pre-line" }}>
                    {poster.description
                        .replace("&#8216;", "'")
                        .replace("&#8217;", "'")
                        .replace("&#8220;", '"')
                        .replace("&#8221;", '"')
                        .replace("&#8211;", "-")}
                </p>
                <p>
                    {poster.genre}
                </p>
                <p>
                    {poster.price}
                </p>
                <p>
                    {poster.stock}
                </p>
                <div>
                    <button>
                        <NavLink to={`/poster/${poster.id}`}>
                            <p>Læs mere</p>
                        </NavLink>
                    </button>
                    <button
                     onClick={() => setIsLiked(!isLiked)}
                    >
                        <span className="likeBtn">
                            {isLiked ? <Liked /> : <Like />}
                        </span>
                    </button>
                </div>
            </figcaption>
        </div>
    )
}