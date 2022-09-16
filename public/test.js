const axios = require("axios");

const url = "http://localhost:5000/constellations/KGQIwSq";

axios.get(url).then((response.data = () => console.log(response.data)));

// function index() {
//   return axios
//     .get(`${BASE_URL}/constellations`)
//     .then(({ data }) => {
//       const result = data.filter((constellation) => {
//         return constellation.starsWithPlanets < 10;
//       });
//       return result;
//     })
//     .catch(({ message }) => {
//       console.error(message);
//     });
// }
