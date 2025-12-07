import React from 'react'
import Navbar from './components/Header/navbar'
import Hero from './components/Header/hero'
import Footer from './components/footer/footer'
import Quizcard from './components/quizhome/quizcard'
import NotesCard from './components/notehome/notes'
import ProjectCard from './components/projecthome/projectfile'

const Page = () => {
  return (
    <>
      <div style={{ background: "white" }}>
        <Navbar />
        <Quizcard/>
        <NotesCard/>
        <ProjectCard/>
        <Hero />
        <Footer/>
      </div>
    </>
  )
}

export default Page
