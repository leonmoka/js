var Moka = function(){
}

Moka.prototype.attachDom = function(elem){
	document.body.appendChild(elem);
} 

Moka.prototype.createDom = function(elemType, text){
	var domElement = document.createElement(elemType);
	domElement.innerHTML = text;
	return domElement;
}

Moka.prototype.clojureHandler = {
	closure: function(elem, func) {  
		elem.addEventListener('click', function(){
			eval(func);
		});
		return elem;
	}
}

// La funzione è chiamata con la capacità di risolvere o rigettare la promessa
Moka.prototype.resolveReject = function(resolve, reject) {
	console.log(index);
    elem.addEventListener('click', function () {
    	alert(index);
    });
    // Questo è solo un esempio per creare l'asincronicità
    window.setTimeout(
        function() {
        // Rispettiamo la promessa!
        	resolve(elem);
     	}, 1000 * (index-0.5));
};
Moka.prototype.doPromise = function(elem, index) {
	var _that = this;
	this.elem = elem;
	this.index = index;
	var prom = new Promise(
      // La funzione è chiamata con la capacità di risolvere o
      // rigettare la promessa
	function(resolve, reject){
		_that.resolveReject(resolve, reject, elem, index);
	});
      // function(resolve, reject) {
      //   console.log(index);
      //   elem.addEventListener('click', function () {
      //     alert(index);
      //   });
      //   // Questo è solo un esempio per creare l'asincronicità
      //   window.setTimeout(
      //     function() {
      //       // Rispettiamo la promessa!
      //       // resolve(thisPromiseCount);
      //       resolve(elem);
      //     }, 1000 * (index-0.5));
      // });

    // Definiamo cosa fare in caso di risoluzione della promise
    // ma potremmo chiamare questo metodo solo se la
    // promise è soddisfatta
    prom.then(
      // Scrivi un log con un messaggio e un valore
      function(elem) {
        document.body.appendChild(elem);
      })
    .catch(
      // Le promesse fallite ingnorano il metodo Promise.prototype.then(onFulfilled)
      function(reason) {
          console.log('Handle rejected promise ('+reason+') here.');
    });
  }
/*Moka.prototype.clojureHandler = function(elem, func){
	var _that = this;
	function closure() {   
		elem.addEventListener('click', function(){
			if(func != undefined)
				eval(func);
		},false);
		_that.attachDom(elem);
	}
	closure();
	return false;
}*/


//F1=1
//F2=1
//Fn=(Fn-1)+(Fn-2)
Moka.prototype.fibonacci = function(n){
	var _that = this;
	var fibo = [0,1,1];
	for (var i = fibo.length-1; i < n; i++) {
		fibo[i]=fibo[i-1]+fibo[i-2];
		var p = _that.createDom('div', fibo[i]);
		_that.attachDom(p);
	}

	/*var a = 0, b = 1, tot = 0;
	for (var i = 0; i < n; i++) {
		tot = a+b;
		b = a;
		a = tot;
		var p = _that.createDom('p', tot);
		_that.attachDom(p);
	}*/
}

// init
var m = new Moka();

var btn = m.createDom('button', "chiama fibonacci");
m.clojureHandler.closure(btn, 'm.fibonacci(15)');
var btn2= m.createDom('button', "chiama fibonacci 2");
m.clojureHandler.closure(btn2, 'm.fibonacci(7)');
m.attachDom(btn);
m.attachDom(btn2);
for (var i = 1; i<=7; i++){
	var link = m.createDom('a', ('Link ' + (i) + ' ->-> '));
	link.href = "#" + i;
	link = m.clojureHandler.closure(link, 'alert('+i+')');
	m.attachDom(link);
}
var a = m.createDom('a', "promise");
for (var i = 1; i <= 4; i++) {
    var link = m.createDom('a', "Link " + i + " ");
    link.href = "#" + i;
    m.doPromise(link, i);
  }

// m.fibonacci(16);