import * as c from './constantans';

export async function createGenres() {
  const responseGenres = await fetch('http://localhost:4000/api/genres');
  const responseMovies = await fetch('http://localhost:4000/api/movies');
  const movies = await responseMovies.json();
  const genres = await responseGenres.json();

  for (let i = 0; i < genres.length; i++) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = genres[i].name;
    c.ul.append(li);
    li.addEventListener('click', () => {
      li.style.background = 'blue';
      const prevously = document.querySelector('.list-group-item.active') as HTMLLIElement;
      if (prevously) {
        prevously.style.backgroundColor = 'white';
      }
      li.classList.add('active');
      if (prevously) {
        prevously.classList.remove('active');
      }
      var coun = 0;
      c.tbody.innerHTML = '';
      for (let i = 0; i < movies.length; i++) {
        if (li.textContent === movies[i].genre.name) {
          coun++;
          const tr = document.createElement('tr');
          const tdTitle = document.createElement('td');
          const tdGenre = document.createElement('td');
          const tdStoke = document.createElement('td');
          const tdRate = document.createElement('td');
          tdTitle.textContent = ` ${movies[i].title}`;
          tdGenre.innerText = `${movies[i].genre.name}`;
          tdStoke.textContent = `${movies[i].numberInStock}`;
          tdRate.innerText = `${movies[i].dailyRentalRate}`;
          tr.append(tdTitle, tdGenre, tdStoke, tdRate);
          c.counterMovies.innerText = `${coun}`;
          c.tbody.appendChild(tr);
        }
      }
    });
  }
}

// Togrlash kere

export async function searchMovies(val: any) {
  const responseMovies = await fetch('http://localhost:4000/api/movies');
  const movies = await responseMovies.json();

  c.input.addEventListener('input', (e: any) => {
    const searchVal = e.target.value;
    searchMovie(searchVal);
  });

  const searchMovie = movies.filter((movie: any) =>
    movie.title.toLowerCase().includes(val.toLowerCase())
  );
}
