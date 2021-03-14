function appendDataToElement(appendToElement, data){

	var a,li;

	for(var i=0,max=date.length; i<max;	i++){
		a = document.createElement('a');
		a['href'] = data[i].url;
		a.appendChild(document.createTextNode(data[i].name));
		li = document.createElement('li');
		li.appendChild(a);
		appendToElement.appendChild(li);
	}
}

/*
<html>
...
...
 <ul id="mylist">
	<li><a href=''>Google</li>
</ul>
..
..
</html>

*/

var ul = document.getElementById("mylist");
ul.style.display = 'none';
appendDataToElement(ul, data);
ul.style.display = 'block';

var fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
document.getElementById("mylist").appendChild(fragment);

var old = document.getElementById("mylist")
var clone = old.cloneNode(true);
appendDataToElement(clone, data)
old.parentNode.replaceChild(clone, old)








