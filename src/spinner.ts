import { spinner } from './constantans';

export function Spinner() {
  window.addEventListener('load', () => {
    spinner.style.display = 'none';
  });
}
