import React, {useContext} from 'react';
import {DisplayContext} from '../displayContext';
// import Technologies from '/Technologies';

function Resume(props) {
  const context = useContext(DisplayContext)

  if(props.data){
    var skillmessage = props.data.skillmessage;
    var education = props.data.education.map(function(education){
      return (
        <div key={education.degree}>
          <h3>{education.degree}</h3>
            <p className="info">{education.school}
              <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
        </div>
    )})
    var work = props.data.work.map(function(work){
      return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
      </div>
    })
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
        <div className="three columns header-col">
          <h1><span>Formation</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Expérience</span></h1>
        </div>

        <div className="nine columns main-col">
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
