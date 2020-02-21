function printLess() {
	console.warn("Under 18!");
}
function printAdult() {
	console.log("Older than 18!");
}

function checkAge(idade) {
	if(idade > 17)
		return true;
	else 
		return false;

}

var agePromise = function() {
	return new Promise(function(resolve, reject) {
		if (checkAge(40)) {
			resolve(true);
		}
		else {
			reject(false);
		}
	});
}

agePromise()
	.then(function(response) {
		setTimeout(printAdult,2000);
	})
	.catch(function(error){
		setTimeout(printLess,2000);
	});
	
var inputTxt = document.querySelector('#app input');
var inputBtn = document.querySelector('#app button');
var listUL = document.querySelector('#app ul');
var divImg = document.querySelector('#img');

function getGitHub() {
	
	axios.get('https://api.github.com/users/'+inputTxt.value)
		.then(function(response) {
			console.log(response.data.avatar_url);
			fillUl(response.data);
		})
		.catch(function(error){
			console.warn(error);
		});
	listUL.innerHTML = "";
	var liElm = document.createElement('li');
	var liTxt = document.createTextNode('Loading...');
	liElm.appendChild(liTxt);
	listUL.appendChild(liElm);
}

inputBtn.onclick = getGitHub;

function fillUl(data){
	listUL.innerHTML = "";
	divImg.innerHTML = "";
	renderImg(data.avatar_url);
	renderLi('Avatar',data.avatar_url);
	renderLi('Node', data.node_id);
	renderLi('Type', data.type);
	renderLi('Last update', data.updated_at);
}
function renderLi(name, value) {
	var liElm = document.createElement('li');
	var liTxt = document.createTextNode(name + ': ' + value);
	liElm.appendChild(liTxt);
	listUL.appendChild(liElm);
}
function renderImg(url) {
	var img = document.createElement('img');
	img.setAttribute('src',url);
	divImg.appendChild(img);
}