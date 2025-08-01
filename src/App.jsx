// App.jsx
import { useState, useEffect, useRef } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function App() {
  const [showHeader, setShowHeader] = useState(true)
  const skillsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const skillsTop = skillsRef.current.getBoundingClientRect().top
        const skillsVisible = skillsTop <= 0

        setShowHeader(!skillsVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showHeader && <Header />}
      <section id="home">
        <Home />
      </section>
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  )
}

export default App
