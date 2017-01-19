"use strict";

var database = firebase.database();

console.log(database);

var messagesRef = database.ref('messages');
var cardsRef = database.ref('cardsList');
console.log(cardsRef);

cardsRef.on('value', function(data) {
  var val = data.val();
  console.log(val);
});

// this.messagesRef.limitToLast(12).on('child_changed', function(data) {
//   console.log('data ' + data);
// });

if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
  console.log('dsasds');
}

// messagesRef.off();
// 
// var setMessage = function(data) {
  // var val = data.val();
  // this.displayMessage(data.key, val.name, val.text, val.photoUrl, val.imageUrl);
// }.bind(this);
// this.messagesRef.limitToLast(12).on('child_added', setMessage);
// this.messagesRef.limitToLast(12).on('child_changed', setMessage);