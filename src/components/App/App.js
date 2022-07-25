import './App.css';
import { Routes, Route} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';


function App() {
  return (
    <div className="page">
      <main className='main'>
        <Routes>

          <Route
            path='/'>
          </Route>

          <Route
            path='/movies'>
            element={
              <Movies />
            }>
          </Route>

          <Route
            path= '/saved-movies'>
            element={
              <SavedMovies />
            }>
          </Route>

          <Route
            path='profile'>
            element={
              <Profile />
            }>
          </Route>

          <Route
            path= 'signup'>
            element={
              <Register />
            }>
          </Route>

          <Route
            path= 'signin'>
            element={
              <Login />
            }>
          </Route>

          <Route
            path='*'
            element={
              <NotFound />
            }>
          </Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
