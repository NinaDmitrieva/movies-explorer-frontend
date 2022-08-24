import React from 'react';
import './Register.css';
import Form from '../Form/Form';
import useFormWithValidation from '../../utils/validation.js';

function Register({ onRegister }){
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password
    });
    resetForm();
  }

  return (
    <Form
      title='Добро пожаловать!'
      onSubmit={handleSubmit}
      btntext='Зарегистрироваться'
      text='Уже зарегистрированы?'
      path='/signin'
      pathname='Войти'
      isValid={isValid}
      disabled={isValid}
      onRegister={onRegister}
    >

      <div className="input__content">

        <p className="input__text">Имя</p>
        <input
          className={`input__element ${!isValid && errors.name && 'input__error-activ'}`}
          required
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
          name='name'
          type='text'
          minLength='2'
          maxLength='30'
          value={values.name || ''}
          error={errors.name}
          onChange={handleChange}
        />
        <span className="input__error">{errors.name}</span>

        <p className="input__text">E-mail</p>
        <input
          className={`input__element ${!isValid && errors.name && 'input__error-activ'}`}
          required
          pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          autoComplete="on"
          name='email'
          text='email'
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
        />
        <span className="input__error">{errors.email}</span>

        <p className="input__text">Пароль</p>
        <input
          className={`input__element input__element-border ${!isValid && errors.name &&'input__error-activ'}`}
          required
          name='password'
          text='пароль'
          type="password"
          minLength="4"
          maxLength="30"
          value={values.password || ''}
          error={errors.password}
          onChange={handleChange}
        />
        <span className="input__error input__error-border">{errors.password}</span>
      </div>

    </Form>
  )
}

export default Register;