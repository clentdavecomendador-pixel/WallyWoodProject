import { PostersStyled } from "./posters.styled"
import { GenreList } from "../../components/molecules/GenreList/genrelist"

export const Posters = () => {
    return(
        <PostersStyled>
            <h1>Plakater</h1>
            <GenreList />
        </PostersStyled>
    )
}