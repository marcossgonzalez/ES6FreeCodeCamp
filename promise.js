//---------------------------------------
/*Uma 'promise' em JavaScript é exatamente o que parece - você a usa para fazer uma promessa de fazer algo, 
geralmente de forma assíncrona. Quando a tarefa for concluída, você cumprirá sua 'promise'' ou deixará de cumpri-la. 
Promise é uma função construtora, então você precisa usar a palavra-chave 'new' para criar uma. Leva uma função, como argumento, 
com dois parâmetros - 'resolve' e 'reject'. Esses são métodos usados ​​para determinar o resultado da promessa. 
A sintaxe é semelhante a esta:
const myPromise = new Promise((resolve, reject) => {

});
*/
//---------------------------------------
const makeServerRequest = new Promise((resolve, reject) =>{
    constructor(resolve, reject)
        this._resolve = resolve;
        this._reject = reject;
    }
);
//---------------------------------------
const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });
//---------------------------------------
/*depois de concluído, você geralmente deseja fazer algo com a resposta do servidor. Isto pode ser conseguido usando o método then. 
O método then é executado imediatamente após sua promessa ser cumprida com resolução. Aqui está um exemplo:
Sintaxe:
myPromise.then(result => {
  
});
*/

//---------------------------------------
const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result=>{
    console.log(result);
  
  });
//---------------------------------------
/*catch é o método usado quando sua promessa foi rejeitada. 
Ele é executado imediatamente após o método de rejeição de uma promessa ser chamado. Aqui está a sintaxe:
myPromise.catch(error => {
  
});
*/
//---------------------------------------
const makeServerRequest4 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });
//---------------------------------------