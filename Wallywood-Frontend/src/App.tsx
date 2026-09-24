import './App.scss'
import { useState } from 'react'
import { Header } from './components/organism/header/header'
import { Main } from './components/organism/main/main'
import { Navbar } from './components/organism/navbar/navbar'
import { AppRouter } from './router/AppRouter'
import { Footer } from './components/organism/footer/footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && <Navbar />}
      <hr />
      <Main>
        <AppRouter />
      </Main>
      <hr />
      < Footer />
    </>
  )
}

export default App
