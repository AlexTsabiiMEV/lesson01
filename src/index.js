// Вам необхідно написати додаток Todo list, використовуючи синтаксис класів.
//  У списку нотаток повинні бути методи для додавання нової нотатки, видалення, 
//  редагування та отримання повної інформації про нотатку, 
//  а так само отримання списку всіх нотаток. 
//  Крім цього, у користувача має бути можливість позначити замітку, як виконану,
//   і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконань.
//   Нотатки не повинні бути порожніми.


class TodoList {
  constructor() {
    this.notes = [];
    this.idCounter = 1;
  }
  

  addNote(noteText) {

    const note = {
      id: this.idCounter++,
      text: noteText,
      completed: false,
    };
    this.notes.push(note);
  }

  deleteNote(noteId) {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

  markAsComplete(noteId) { 
    const note = this.notes.find(note => note.id === noteId);
    if (note) {
      note.completed = true;
    } 
  }

  editNote(noteId, noteText) {
    const note = this.notes.find(note => note.id === noteId);

    if (note) {
      note.text = noteText;
    } 

  }

  getNotes() {
    return this.notes;
  }

  getNotesCount() {
    return this.notes.length;
  }

  getNotComleted() {
    return this.notes.filter(note => !note.completed).length;
  }

}

const todoList = new TodoList();

todoList.addNote("Hello");
todoList.addNote("Second Hello");
todoList.addNote("Third Hello");
console.log("All notes count: ", todoList.getNotesCount());
console.log("Notes list: ", todoList.getNotes());
todoList.deleteNote(2);
todoList.markAsComplete(1);
todoList.editNote(1, "CHANGED HELLO");
console.log("All notes count: ", todoList.getNotesCount());
console.log("Notes list: ", todoList.getNotes());
console.log("Not completed notes: ", todoList.getNotComleted());



