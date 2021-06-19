/**=================================
 * CONSTANTS
 * =================================
 */
const addModal = document.querySelector(`#add-modal`);
const backdrop = document.querySelector(`#backdrop`);
const btnAddMovie = document.querySelector(`header button`);
const btnCancelMovie = document.querySelector(`.btn--passive`);
const btnAddNewMovie = document.querySelector(`.btn--success`);

const allMovies = [];
console.log(allMovies.length);
/**=================================
 * HANDLERS
 * =================================
 */

const handleAddMovie = () => {
  addModal.classList.add(`visible`);
  handleBackdropToggle();
};

const handleBackdropToggle = () => {
  backdrop.classList.toggle(`visible`);
};

const handleCloseModal = () => {
  addModal.classList.remove(`visible`);
  backdrop.classList.remove(`visible`);
  handleClearInputs();
};

const handleHideBackdrop = () => {
  addModal.classList.remove(`visible`);
  backdrop.classList.remove(`visible`);
};

const handleAddNewMovie = () => {
  const movieTitle = document.querySelector(`#title`).value.trim();
  const imageUrl = document.querySelector(`#image-url`).value.trim();
  const rating = document.querySelector(`#rating`).valueAsNumber;
  let moviesDetails;
  movieTitle !== "" && imageUrl !== "" && rating !== ""
    ? rating >= 1 && rating <= 5
      ? (moviesDetails = {
          movieTitle,
          imageUrl,
          rating,
        })
      : alert(`Rating must be between 0 and 6`)
    : alert(`Some of your fields are empty`);

  allMovies.push(moviesDetails);
  handleClearInputs();
  handleHideBackdrop();
  console.log(allMovies);
  removeSection();
  displayMovieList(moviesDetails);
};

const handleClearInputs = () => {
  document.querySelector(`#title`).value = "";
  document.querySelector(`#image-url`).value = "";
  document.querySelector(`#rating`).value = "";
};

// entryText.style.display = "none";
const removeSection = () => {
  const entryText = document.querySelector(`#entry-text`);
  allMovies.length === 0
    ? (entryText.style.display = "block")
    : (entryText.style.display = "none");
};

const displayMovieList = (movieObject) => {
  const movieListUl = document.querySelector(`#movie-list`);
  const movieLi = document.createElement(`li`);
  movieLi.className = "movie-element";
  movieLi.innerHTML = `
      <div class="movie-element__image">
        <img src="${movieObject.imageUrl}" alt="${movieObject.movieTitle}">
      </div>
      <div class="movie-element__info">
        <h2>${movieObject.movieTitle}</h2>
        <h2>${movieObject.rating}</h2>
      </div>
    `;

  movieListUl.appendChild(movieLi);
};

/**=================================
 * EVENTS
 * =================================
 */

btnAddMovie.addEventListener(`click`, handleAddMovie);
btnCancelMovie.addEventListener(`click`, handleCloseModal);
backdrop.addEventListener(`click`, handleHideBackdrop);
btnAddNewMovie.addEventListener(`click`, handleAddNewMovie);

/**=================================
 * CONSTANTS
 * =================================
 */

// const clearInputs = () => {
//     for (const input of inputs) {
//         input.value = ""
//     }
// }
