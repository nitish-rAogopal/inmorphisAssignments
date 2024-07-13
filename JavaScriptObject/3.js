// Write a JavaScript program to get the length of an JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  function getObjectLength(obj) {
    return Object.keys(obj).length;
  }
  
  console.log(getObjectLength(student));