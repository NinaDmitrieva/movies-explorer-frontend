import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';



function App() {
  return (
    <div className="page">
      <Header />
        <Routes>

          <Route
            path='/'
            element={<Main />}>
          </Route>

          <Route
            path='/movies' element={<Movies />}>
          </Route>

          <Route
            path= '/saved-movies' element={<SavedMovies />}>
          </Route>

          <Route
            path='profile' element={<Profile />}>
          </Route>

          <Route
            path= 'signup' element={<Register />}>
          </Route>

          <Route
            path= 'signin' element={<Login />}>
          </Route>

          <Route
            path='*' element={<NotFound />}>
          </Route>

        </Routes>
      {/* </main> */}
    </div>
  );
}

export default App;
