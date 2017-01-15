var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')

button1.addEventListener('click', function(){
	var header = document.getElementById('header')
	header.innerHTML = "Shut your mouth"
})

button2.addEventListener('click', function(){
	var header = document.getElementById('header')
	header.innerHTML = "No you, shut your mouth"
})
