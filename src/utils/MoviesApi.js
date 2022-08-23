// export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
// const { reqResponse } = require('../utils/MainApi');

// export default function getMovies() {
//   return fetch(`${BASE_URL}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//     .then(reqResponse)
// }


import { GET_MOVIES_Url } from '../utils/const';


function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((data) => {
      throw data;
    });
  }
}

export function getMovies() {
  return fetch(`${GET_MOVIES_Url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

