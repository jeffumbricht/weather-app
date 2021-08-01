export function getForecast() {
  return fetch('http://localhost:3333/forecast')
    .then(data => data.json());
}
