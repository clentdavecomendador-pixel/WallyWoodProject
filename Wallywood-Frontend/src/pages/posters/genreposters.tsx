import { Link, useParams } from "react-router-dom"
import { useGenres } from "../../hooks/useGenre"
import { usePosters } from "../../hooks/usePoster"
import { PostersStyled } from "./posters.styled"

export const GenrePosters = () => {
    const { slug } = useParams()
    const { data: genres, error: genreError, isLoading: genresLoading } = useGenres()
    const { data: posters, error: posterError, isLoading: postersLoading } = usePosters()

    const genre = genres?.find((item) => item.slug === slug)
    const genrePosters = posters?.filter((poster) => poster.genre === genre?.title)

    if (genresLoading || postersLoading) return <p>Henter plakater...</p>

    if (genreError || posterError || !genre) return <p>Ingen plakater fundet</p>

    return (
        <PostersStyled>
            <h1>{genre.title}</h1>
            <Link to="/poster">Tilbage til genrer</Link>

            {genrePosters?.map((poster) => (
                <article key={poster.id}>
                    <Link to={`/poster/${poster.id}`}>
                        <img src={poster.image} alt={poster.name} />
                        <h2>{poster.name}</h2>
                    </Link>
                </article>
            ))}
        </PostersStyled>
    )
}
