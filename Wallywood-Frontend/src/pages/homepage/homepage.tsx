import { HomePageStyled } from "./homepage.styled"
import frontpage from "../../assets/frontpage.png"
import { Section } from "../../components/Atoms/Section/section"
import { PosterCard } from "../../components/molecules/PosterCard/postercard"
import { usePosters } from "../../hooks/usePoster"

export const HomePage = () => {
    const { data, error, isLoading } = usePosters();

    const RandomPoster = data
    ? [...data] .sort(() => 0.4 - Math.random()) .slice(0, 4)
    : [];

    if (isLoading) return <p>Henter Plakater</p>

    if (error) return <p>ingen data</p>

    return(
        <HomePageStyled>
            <img src={frontpage} alt="Front Page Image" />

            <Section id="hpContent">
                <h2>Fire tilfældige</h2>
                <div id="cards">
                    {RandomPoster?.map((p) => (
                        <PosterCard key={p.id} poster={p} />
                    ))}
                </div>
            </Section>
        </HomePageStyled>
    )
}
