import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dental Consultancy',
    github: 'https://github.com/rodgersxy?tab=repositories',
    demo: 'https://laughing-euler-c3d196.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chiropractors',
    github: 'https://github.com/rodgersxy?tab=repositories',
    demo: 'https://goofy-curie-ecbd47.netlify.app/chiropractors-camps-bay.html'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal webiste',
    github: 'https://github.com/rodgersxy?tab=repositories',
    demo: 'https://portfoliopitch001.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Real-Estate website ',
    github: 'https://github.com/rodgersxy?tab=repositories',
    demo: 'http://realproperties.online/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Accounting Services',
    github: 'https://github.com/rodgersxy?tab=repositories',
    demo: 'https://quizzical-goodall-411a5b.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'React Blog',
    github: 'https://github.com/rodgersxy?tab=repositories',
    demo: 'https://react-videoblog.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
         <div className='portfolio__item-cta'>
         <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

         </div>
        </article>
            )
          })
        }
        
        
      </div>
     </section>
  )
}

export default Portfolio