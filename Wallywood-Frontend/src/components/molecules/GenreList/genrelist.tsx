import { NavLink } from "react-router-dom";
import { useGenres } from "../../../hooks/useGenre"
import { Section } from "../../Atoms/Section/section";

export const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres()

    if (isLoading) return <p>Henter genrer...</p>

    if (error) return <p>Ingen genrer fundet</p>

    return(
        <Section id="genre-list">
         <h2>Filtre</h2>
         <ul id="genres">
            {genres?.map((item) => (
                <li key={item.id} title={item.title}>
                    <NavLink to={`/poster/genre/${item.slug}`}>{item.title}</NavLink>
                </li>
            ))}
         </ul>
        </Section>
    )
}