import React, { useContext } from 'react';
import { DisplayContext } from '../displayContext';
// import Technologies from '/Technologies';

function Resume(props) {
  const context = useContext(DisplayContext)
  const { displayStatus, toggleDisplay } = context
  

  if(props.data){
    var skillmessage = props.data.skillmessage;
    var education = props.data.education.map(function(education){
      return (
        <div style={{display: displayStatus}}>
        <div key={education.degree}>
          <h3>{education.degree}</h3>
            <p className="info">{education.school}
              <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
        </div>
        </div>
    )})
    var work = props.data.work.map(function(work){
      return (
        <div style={{display: displayStatus}}>
        <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
      </div>
      </div>
    )})
    var skills = props.data.skills.map(function(skills){
    var projectImage = '/images/technos/'+skills.image;
      return <div key={skills.name} className="columns feature-item">
                <img className='skill' alt={skills.name} src={projectImage} />
                <h5>{skills.name}</h5>
                <p>{skills.description}</p>
              </div>
    })
  }

  return (
    <section id="resume">
    
      <div className="row education">

        <div className="six columns header-col">
          <h1><span onClick={toggleDisplay}>Formation</span></h1>
        </div>
        <div className="six columns header-col">
          <h1><span onClick={toggleDisplay}>Expérience</span></h1>
        </div>

        <div className="six columns main-col">
          {education}
        </div>
        <div className="six columns main-col">
          {work}
        </div>

      </div>

      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Technologies</span></h1>
        </div>
        <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>

        <div className="skills-container">
				  <ul className="bgrid-quarters s-bgrid-thirds cf">
					  {skills}
					</ul>
			  </div>
      </div>
    </section>
  );
}

export default Resume;
