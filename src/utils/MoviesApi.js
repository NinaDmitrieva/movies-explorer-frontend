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

