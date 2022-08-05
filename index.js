const ballon = document.getElementById('fete')
const btn = document.getElementById('btn')



btn.addEventListener('click', function(){
	ballon.classList.add('anim1');
})

btn.addEventListener('touched', function(){
	ballon.classList.add('anim1');
})