import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {

  return (
    <div className="page">

        {/* <Routes>

          <Route path='/' element={<Main />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path= '/saved-movies' element={<SavedMovies />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path= '/signup' element={<Register />}></Route>
          <Route path= '/signin' element={<Login />}></Route>
          <Route path='/*' element={<NotFound />}></Route>

        </Routes> */}
      <Routes>

          <Route path='/' element={
            <>
            <Header />
            <Main />
            <Footer />
            </>
            }>
          </Route>

          <Route path='/movies' element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
          }>
          </Route>

          <Route path= '/saved-movies' element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
          }>
          </Route>

          <Route path='/profile' element={
          <>
            <Header />
            <Profile />
          </>
          }>
          </Route>

          <Route path= '/signup' element={<Register />}></Route>
          <Route path= '/signin' element={<Login />}></Route>
          <Route path='/*' element={<NotFound />}></Route>

        </Routes>
    </div>

  );
}

export default App;
