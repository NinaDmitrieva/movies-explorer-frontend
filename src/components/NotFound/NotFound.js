import { useNavigate } from 'react-router-dom'
import './NotFound.css';

function NotFound (){
  const navigate = useNavigate()
  return (
  <section className='not-found'>
      <p className='not-found__err-number'>404</p>
      <p className='not-found__text'>Страница не найдена</p>
      <button
        type="button"
        className="not-found__back"
        onClick={() => navigate(-2)}
      >
        Назад
      </button>

  </section>
  )
}

export default NotFound;