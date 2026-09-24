import type { Poster } from "../../../types/api.types"

type PosterProps = {
    poster: Poster;    
}

export const PosterCard = ({poster}: PosterProps) => {
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
            </figcaption>
        </div>
    )
}