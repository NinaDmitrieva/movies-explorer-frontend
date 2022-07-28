import './Techs.css';
import ProjectTitle from '../ProjectTitle/ProjectTitle';

const Techs = () => {
  return (
    <section className='techs'>
      <ProjectTitle title='Технологии' />
      <div className='techc__content'>

        <h3 className='techs__title'>7 технологий</h3>
        <p className='techc__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

      </div>
      {/* <h3 className='techs__title'>7 технологий</h3>
      <p className='techc__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p> */}

      <div className='techc__list'>
        <div className='techc__list-element'>HTML</div>
        <div className='techc__list-element'>CSS</div>
        <div className='techc__list-element'>JS</div>
        <div className='techc__list-element'>React</div>
        <div className='techc__list-element'>Git</div>
        <div className='techc__list-element'>Express.js</div>
        <div className='techc__list-element'>mongoDB</div>
      </div>
    </section>
  )
}

export default Techs;