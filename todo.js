/*
What types of objects do you need?

List out nouns and verbs involved in creating TODO lists.
Decide which nouns and verbs you want/need to model.
The nouns will be your objects and the values the functions.

Write simple functions that work on a few number of well-defined objects.

Keep the responsibilities separated as best you can:

1. Representing a real-life todo list as in-memory objects
2. Manipulating those in-memory objects
3. Reading and writing from the todos.txt file
4. Displaying information to the user
5. Rather user input and taking the appropriate actions
*/

//notes found in ToDoProjectNotes.txt

let fs = require('fs')
let process = require('process')
//file system, code that tells it to read files ig

function openReadFile(file){
  let text = fs.readFileSync(file, 'utf-8')
  text = text.split('/n');
  return text;
}

function printList(text){
  console.log('Here is what is currently on your to-do list.')
  for (let i = 0 ; i < text.length - 1; i += 1){
    console.log(`${i +1}. ${text[i]}`);
  }
}

function addToList (text, addition){
  console.log(`Appending '${addition}' to your TODO list`);
  console.log();
  fs.appendFileSync('todos.txt', addition);
  //found this feature called appendFileSync that will edit a file,
  //as opposed to writeFileSync which will create an entirely new file.
  //checked out other's people code and only found that Chloe has used it.
  console.log('Your list has been updated.')
}

function deleteFromList (text, deletion){
  text = text.split('/n');
  for (let line of text) {
    if (line === deletion0){
    }
  }
}

let command = process.argv[2];
let 