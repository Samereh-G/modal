const API_BASE_URL = "http://localhost:5000";

export const request = (endpoint, method = "GET", body) => {
  return fetch(API_BASE_URL + endpoint, {
    method,
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => Promise.all([response.status, response.json()]));
};
