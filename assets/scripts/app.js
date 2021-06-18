/**=================================
 * CONSTANTS
 * =================================
 */
const addModal = document.querySelector(`.modal`);
const backdrop = document.querySelector(`header button`);
const btnAddMovie = document.querySelector(`.btnAddMovie`);
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
  const rating = document.querySelector(`#rating`).value;
  let moviesDetails;
  movieTitle !== "" && imageUrl !== "" && rating !== ""
    ? parseInt(rating) >= 1 && parseInt(rating) <= 5
      ? (moviesDetails = {
          title: movieTitle,
          imageUrl: imageUrl,
          rating: rating,
        })
      : alert(`Rating must be between 0 and 6`)
    : alert(`Some of your fields are empty`);

  allMovies.push(moviesDetails);
  handleClearInputs();
  console.log(allMovies);
};

const handleClearInputs = () => {
  document.querySelector(`#title`).value = "";
  document.querySelector(`#image-url`).value = "";
  document.querySelector(`#rating`).value = "";
};

// const handleEntryText = () => {
//     const entryText = document.querySelector(`#entry-text`);
//     allMovies.length ===
// };

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
