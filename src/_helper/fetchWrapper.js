import { authHeader } from './auth-header';
import { ErrorMessageHandler } from './_methods';

// eslint-disable-next-line no-undef
const COMMON_URL = process.env.REACT_APP_BACKEND_URL;

async function get(url, isPublic = false, lang) {
  const requestOptions = {
    method: 'GET',
    headers: isPublic
      ? { 'Content-Type': 'application/json', 'accept-language': lang === 'ne' ? 'ne-NP' : 'en-US' }
      : authHeader(null, lang)
  };
  try {
    let URL = COMMON_URL + url;
    let response = await fetch(URL, requestOptions);
    let handledResponse = await handleResponse(response);
    return handledResponse;
  } catch (err) {
    ErrorMessageHandler(err);
  }
}

function post(url, body, contentType, lang) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(contentType, lang),

    body: contentType ? body : JSON.stringify(body)
  };

  return fetch(COMMON_URL + url, requestOptions).then(handleResponse);
}

function put(url, body, contentType, lang) {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader(contentType, lang),
    body: JSON.stringify(body)
  };
  return fetch(COMMON_URL + url, requestOptions).then(handleResponse);
}

function patch(url, body, contentType, lang) {
  let user = JSON.parse(localStorage.getItem('cdmin_user'));
  const requestOptions = {
    method: 'PATCH',
    headers: contentType
      ? { Authorization: `Bearer ${user.token}` }
      : authHeader(contentType, lang),
    body: contentType ? body : JSON.stringify(body)
  };
  return fetch(COMMON_URL + url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url, lang) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(lang)
  };
  return fetch(COMMON_URL + url, requestOptions).then(handleResponse);
}

// helper functions
function handleResponse(response) {
  return response.text().then((text) => {
    try {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data) || response;
        return Promise.reject(error);
      }
      return data;
    } catch (e) {
      return Promise.reject(response);
    }
  });
}

export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete
};
