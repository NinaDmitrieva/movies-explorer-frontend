import React, { useState, useEffect } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation
} from 'react-router-dom';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as auth from '../../utils/auth';
import * as MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([])

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleTokenCheck();
  }, []);

  // запрос для контекста пользователя
  useEffect(() => {
    loggedIn && handleGetUser()
  }, [loggedIn])
  

  // получение фильмов юзера
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      MainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(
            data.filter((item) => item.owner === currentUser._id)
          )
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [currentUser])

  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res)
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          console.log(`Ошибка проверки токена: ${err}`);
          setLoggedIn(false);
        });
    }
  }

  function handleLoginSubmit(email, password) {
    auth
      .authorization(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token)
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleRegisterSubmit = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
          navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function exitUser() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/signup");
  }

  //сохранение фильмов в сохраненках
  const handleSaveMovie = (movie) => {
    MainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie.data, ...savedMovies])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {

      })
  }
  //удаление фильма из Сохраненных фильмов
  const handleDeleteMovie = (movie) => {
    MainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((m) => m._id !== movie._id)
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // обновлене данных пользователя
  function handleChangeProfile(userData) {
    MainApi
      .setUpdateUserInfo(userData.name, userData.email)
      .then((res) => {
        setCurrentUser(res);
      }).catch(err => {
        console.log(err);
      })
  }

//  запрост на данные пользователя
  function handleGetUser() {
    MainApi
      .getUser()
      .then((res) => {
        console.log(res)
        setCurrentUser(res);
      }).catch(err => {
        console.log(err);
      })
  }
  console.log()


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">

      <Routes>

          <Route path='/' element={
            <>
            <Header />
            <Main />
            <Footer />
            </>
            }>
          </Route>

        <Route
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
            ></ProtectedRoute>
          }
        >
          <Route path='/movies' element={
          <>
            <Header />
            <Movies
                  onSave={handleSaveMovie}
                  onDelete={handleDeleteMovie}
                  moviesCardList={savedMovies}

            />
            <Footer />
          </>
          }>
          </Route>

          <Route path= '/saved-movies' element={
          <>
            <Header />
            <SavedMovies
                  onDelete={handleDeleteMovie}
                  moviesCardList={savedMovies}
            />
            <Footer />
          </>
          }>
          </Route>

          <Route path='/profile' element={
          <>
            <Header />
              <Profile
                onSignOut={exitUser}
                userChange={handleChangeProfile}
              />
          </>
          }>
          </Route>
    </Route>
        <Route path='/signup' element={<Register onRegister={handleRegisterSubmit} />}></Route>
        <Route path='/signin' element={<Login onLogin={handleLoginSubmit} />}></Route>
        <Route path='/*' element={<NotFound />}></Route>

        </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
