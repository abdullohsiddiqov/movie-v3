import './main.css';
import * as genre from './genres';
import * as c from './constantans';
import { Spinner } from './spinner';

// Create elements and painting in UI

let count = 0;
async function createElms() {
  const response = await fetch('http://localhost:4000/api/movies');
  const names = await response.json();
  console.log(names);
  const title = [];

  for (let i = 0; i < names.length; i++) {
    count++;
    c.counterMovies.innerText = `${count}`;
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdGenre = document.createElement('td');
    const tdStoke = document.createElement('td');
    const tdRate = document.createElement('td');
    tr.classList.add('tr');
    tdStoke.classList.add('title');
    tdStoke.classList.add('gerne');
    tdStoke.classList.add('stoke');
    tdStoke.classList.add('rate');
    title.push(tdTitle.innerText);

    tdTitle.append(names[i].title);
    tdGenre.append(names[i].genre.name);
    tdStoke.append(names[i].numberInStock);
    tdRate.append(names[i].dailyRentalRate);
    tr.append(tdTitle, tdGenre, tdStoke, tdRate);
    c.tbody.appendChild(tr);
    c.all.addEventListener("click", () =>{ 
      c.tbody.appendChild(tr);
    });
    c.btn.addEventListener("click", () =>{
      c.tbody.appendChild(tr);
      c.input.value = "";
    });
    // c.input.addEventListener("click", () =>{
    //   c.tbody.appendChild(tr);
    // });
    c.input.addEventListener('input', () => {
      console.log(c.input.value);
      let inpVal = c.input.value.toLowerCase();
      if (inpVal === tdTitle.innerHTML.toLowerCase()) {
        c.tbody.innerHTML = '';
        tr.append(tdTitle, tdGenre, tdStoke, tdRate);
        c.tbody.append(tr);
      }
    });
  }
}

// Hamburger

function hamburger() {
  c.hamburger.onclick = () => {
    c.categories.classList.toggle('d-flex');
  };
}

// initialization

export function iniit() {
  createElms();
  Spinner();
  hamburger();
  genre.createGenres();
}
