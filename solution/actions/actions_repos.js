export const REPOS_FETCHED = 'REPOS_FETCHED';

export function fetchRepos() {
  return (dispatch) => {
    let header = new Headers({
      "Content-Type": "application/json",
      "Authorization": "token a51aef131b7c942e5dfe9cc653a186fa5ab8b52b"
    });
    return fetch('https://api.github.com/user/tomek1234712', {
        method: 'GET',
        headers: header
      })
      .then(response => response.json())
      .then(json => {
        dispatch(loadRepos(json))
      })
      .catch(error => console.log(error));
  }
}

export function loadRepos(results) {
  return {
    type: REPOS_FETCHED,
    payload: results
  }
}