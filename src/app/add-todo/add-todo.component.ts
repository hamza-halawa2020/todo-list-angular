import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() addTodoEvent = new EventEmitter();

  text: any;
  // text: any;

  addTodo(task: string) {
    if (this.text.trim()) {
      this.addTodoEvent.emit(task);
      console.log(task);

      this.text = '';
    }
  }
}
