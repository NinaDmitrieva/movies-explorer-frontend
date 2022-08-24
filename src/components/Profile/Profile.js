import React, { useEffect, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ onSignOut, userChange, message }) {

  const currentUser = React.useContext(CurrentUserContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isFormValid, setIsFormValid] = useState(false)


  useEffect(() => {
    setName(currentUser.name)
    setEmail(currentUser.email)
  }, [currentUser])

  const handleChangeName = (e) => {
 if (!e.target.value.length) {
      setErrorName('Имя пользователя должно быть заполнено.')
    } else if (e.target.value.length < 2) {
      setErrorName('Имя пользователя должно быть не менее 2 символов.')
    } else if (e.target.value.length > 30) {
      setErrorName('Имя пользователя должно быть не более 30 символов.')
    } else {
      setErrorName('')
    }
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    const validEmail = /"^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"/i.test(
      e.target.value
    )

    if (!e.target.value.length) {
      setErrorEmail('Электронная почта должна быть заполнена.')
    } else if (!validEmail) {
      setErrorEmail('Неверный формат электронной почты.')
    } else {
      setErrorEmail('')
    }
    setEmail(e.target.value)
  }

  const handleInputDisabled = () => {
    setIsInputDisabled(!isInputDisabled)
  }

  const handleSubmitProfileForm = (e) => {
    e.preventDefault()
    userChange({ name, email })
    handleInputDisabled()
  }

  useEffect(() => {
    if (errorName || errorEmail) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errorEmail, errorName])

  useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [currentUser.email, currentUser.name, email, name])


  return (

    <section className='profile'>
      <div className='profile__content'>
        <h3 className='profile__content-hello'>{`Привет, ${currentUser.name}!`}</h3>
        <form className='profile__content-user' onSubmit={handleSubmitProfileForm}>

          <label className='profile__content-input profile__content-input-line'>
            Имя
            <input
              className='profile__content-user-nama profile__content-user-info'
              type='text'
              placeholder='Имя'
              value={name || ''}
              onChange={handleChangeName}
              disabled={!isInputDisabled}
            />
          </label>
          <span className="input__error-profile">
            {errorName}
          </span>

          <label className='profile__content-input profile__content-input-padding'>
            E-mail
            <input
              className='profile__content-user-email profile__content-user-info'
              name='email'
              type='text'
              placeholder='E-mail'
              value={email || ''}
              onChange={handleChangeEmail}
              disabled={!isInputDisabled}
            />

          </label>
          <span className="input__error-profile">
            {errorEmail}
          </span>

          <div className='profile__content-btn'>
            <button
              className='profile__content-btn__edit-btn'
              type='submit'
              disabled={!isFormValid || name < 2 || email < 2}
              onClick={handleInputDisabled}
            >
              Редактировать
            </button>

            <button className='profile__content-btn__exit-btn' type='submit' onClick={onSignOut}>Выйти из аккаунта</button>
          </div>
        </form>

      </div>
    </section>

  )
}

export default Profile;