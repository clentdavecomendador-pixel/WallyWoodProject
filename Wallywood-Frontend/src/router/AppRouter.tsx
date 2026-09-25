import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homepage/homepage"
import { Posters } from "../pages/posters/posters"
import { AboutUs } from "../pages/about us/aboutus"
import { ContactUs } from "../pages/contact us/contactus"
import { Login } from "../pages/login/login"
import { GenrePosters } from "../pages/posters/Genre Poster/genreposters"
import { PosterDetails } from "../pages/posters/posterdetails"
import { BasketContent } from "../pages/Basket/basket"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/poster" element={<Posters />} />
                <Route path="/poster/genre/:slug" element={<GenrePosters />} />
                <Route path="/poster/:id" element={<PosterDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/basket" element={<BasketContent />} />
        </Routes>
    )
}