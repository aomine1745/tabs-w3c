var city,
paises = ['london', 'paris', 'tokyo'],
tabcontent= document.querySelectorAll('.tabcontent'),
tablinks = document.querySelectorAll('.tablinks'),
content = document.querySelector('.content'),
close = document.querySelector('.close');

tablinks.forEach(function(e, i){
	e.addEventListener('click', function(){
		openCity(paises[i], i);
	});
});

close.addEventListener('click', function(){
	content.style.display = 'none';
});

function openCity(cityName, index){
	content.style.display = 'block';
	tabcontent.forEach(function(e){
		e.style.display = 'none';
		e.classList.remove('active');
	});

	tablinks.forEach(function(e){
		e.classList.remove('active');
	});

	tablinks[index].classList.add('active');
	city = document.getElementById(cityName);
	city.style.display = 'block';
}