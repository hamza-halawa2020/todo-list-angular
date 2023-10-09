import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: any;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  status: string = 'completed';
  toggle() {
    console.log(this.todo);
    this.toggleEvent.emit(this.todo);
    
    if (this.todo.completed) {
      this.status = 'Undo';
    } else {
      this.status = 'Complete';
    }
  }

  delete() {
    console.log(this.todo);
    this.deleteEvent.emit(this.todo)
  }

}
