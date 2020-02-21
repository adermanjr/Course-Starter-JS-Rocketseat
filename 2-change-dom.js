var listUL = document.querySelector('#app ul');
var inputTxt = document.querySelector('#app input');
var inputBtn = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderLi(todo, index) {
    var liElm = document.createElement('li');
	var liTxt = document.createTextNode(todo);
	
	addLinkRemove(liElm,index);
	liElm.appendChild(liTxt);
	listUL.appendChild(liElm);
}

function addLinkRemove(liElm,index) {
	var lnk = document.createElement('a');
	lnk.setAttribute('href','#');
	lnk.setAttribute('style','text-decoration:none;');
	lnk.setAttribute('onclick','deleteTodo('+index+');');
	var spanEl = document.createElement('span');
	spanEl.innerHTML = '&#x1F5D1;';
	lnk.appendChild(spanEl)
	liElm.appendChild(lnk);
}

function render() {
	listUL.innerHTML = "";
	todos.forEach(renderLi);
}

function addTodo() {
	todos.push(inputTxt.value);
	saveToStorage();
	inputTxt.value = "";
	render();
}

function deleteTodo(pos){
	todos.splice(pos,1);
	saveToStorage();
	render();
}

function saveToStorage() {
	localStorage.setItem('list_todos',JSON.stringify(todos));
}

inputBtn.onclick = addTodo;

/*
todos.forEach(function(todo, i) {
	console.log(todo, " ", i);
});
*/

render();