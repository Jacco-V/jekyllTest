document.addEventListener('DOMContentLoaded', function() {
  const p = document.createElement('p');
  p.innerText = 'javascript active';
  p.classList.add('js');
  
	const main = document.querySelector('main');
	main.appendChild(p);
});
