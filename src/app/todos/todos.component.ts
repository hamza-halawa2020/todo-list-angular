import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: any[] = [

  ];

  toggleTodo(todo: any) {
    this.todos = this.todos.map(item => {
      if (todo.id === item.id) {
        item.completed = !item.completed;
      }
      return item;
    })
  }

  // deleteTodo(todo: any) {

  //   this.todos = this.todos.filter(item => {
  //     return item.id != todo.id;
  //   })
  // }

  deleteTodo(todo: any) {
    const index = this.todos.findIndex(item => item.id === todo.id);
  
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  

  addTodo(todo: any) {
    let task = this.todos.push({ id: this.todos.length, text: todo, completed: false });
    console.log(task);

  }
}


