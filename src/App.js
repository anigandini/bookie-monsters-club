import Section from './Section'
import classes from './App.Module.css'
import sections from './section.json'
import Footer from './Footer'
import React, { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState(sections[sections.length - 1])
  const activateSection = (section) => {
    setActiveSection(section)
  }
  
  const sectionList = sections.slice(0).reverse().map((section) => <Section key={section.issue} data={section} callBack={activateSection} />)
    
  return (
    <div className={classes.App} style={{backgroundColor: activeSection.color}}>
      <header>
        <div>
          <h1>Bookie Monsters Club</h1>
        </div>
      </header>
      <main>
        {sectionList}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
