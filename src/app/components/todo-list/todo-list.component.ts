import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
 
  todoList : any[] = [];


  constructor(
    private httpClient: HttpClient
  ){    
  }


  ngOnInit(): void {
    this.httpClient.get(environment.todolistApi)
      .subscribe({
        next: (data) => {
          this.todoList = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }
}