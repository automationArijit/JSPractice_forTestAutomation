// person is object:

let person = {
 
    name:'amit',
    age: 40,
    salary: 54.85,
    isActive: true,
    status:'pending'
};
//type of:
console.log(typeof(person)); //object
// JS object to JSON (JS obj notation) string: Marshelling
let jsonperson = JSON.stringify(person);
console.log(jsonperson); //{"name":"amit","age":40,"salary":54.85,"isActive":true,"status":"pending"} ---> Is a string.
console.log(typeof(jsonperson)); //string
//In java we do pojo to json --- > serialization.

//JSON (JS obj notation) string to JS object: Un-Marshelling

let demojson=`{
    "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"

}`;
console.log(typeof(demojson)); // string
let change =JSON.parse(demojson); // convert json string to js obj
console.log(typeof(change)); //object



