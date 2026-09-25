import { NavLink, useParams } from "react-router-dom"
import { useGenres } from "../../../hooks/useGenre"
import { usePosters } from "../../../hooks/usePoster"
import { GenrePosterStyled } from "./genreposter.styled"
import { Like } from "../../../assets/svg/like/like"
import { Liked } from "../../../assets/svg/like/liked"
import { useState } from "react"

export const GenrePosters = () => {
    const { slug } = useParams()
    const { data: genres, error: genreError, isLoading: genresLoading } = useGenres()
    const { data: posters, error: posterError, isLoading: postersLoading } = usePosters()
    const [ isLiked, setIsLiked ] = useState(false)

    const genre = genres?.find((item) => item.slug === slug)
    const genrePosters = posters?.filter((poster) => poster.genre === genre?.title)

    if (genresLoading || postersLoading) return <p>Henter plakater...</p>

    if (genreError || posterError || !genre) return <p>Ingen plakater fundet</p>

    return (
        <GenrePosterStyled>
            <h1>{genre.title}</h1>
            <NavLink to="/poster" id="backGenre">Tilbage til genrer</NavLink>

            {genrePosters?.map((poster) => (
                <article key={poster.id}>
                    <NavLink to={`/poster/${poster.id}`}>
                        <img src={poster.image} alt={poster.name} />
                        <h2>{poster.name}</h2>
                        <p>Prise:{poster.price} kr.-</p>
                    </NavLink>
                        <div>
                            <button>Læg i kurv</button>
                            <button
                             onClick={() => setIsLiked(!isLiked)}
                            >
                                <span>{isLiked ? <Liked /> : <Like />}</span>
                            </button>
                        </div>
                </article>
            ))}
        </GenrePosterStyled>
    )
}
