import { NavLink, useParams } from "react-router-dom"
import { usePoster } from "../../hooks/usePoster"
import { PostersStyled } from "./posters.styled"

export const PosterDetails = () => {
    const { id } = useParams()
    const { data: poster, error, isLoading } = usePoster(id ?? "")

    if (isLoading) return <p>Henter plakat...</p>

    if (error || !poster) return <p>Plakaten blev ikke fundet</p>

    return (
        <PostersStyled>
            <NavLink to="/poster" id="backPoster">Tilbage til plakater</NavLink>
            <h1>{poster.name}</h1>
            <img src={poster.image} alt={poster.name} />
            <p>{poster.description
                .replace("&#8216;", "'")
                .replace("&#8217;", "'")
                .replace("&#8220;", '"')
                .replace("&#8221;", '"')
                .replace("&#8211;", "-")
            }</p>
            <p>Genre: {poster.genre}</p>
            <p>Pris: {poster.price}</p>
            <p>På lager: {poster.stock}</p>
        </PostersStyled>
    )
}
