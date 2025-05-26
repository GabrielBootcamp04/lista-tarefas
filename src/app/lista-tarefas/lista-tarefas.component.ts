import { Component } from '@angular/core';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-tarefas',

  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  novaTarefa = '';
  tarefas: Task[] = [];


adicionarTarefa(): void {
const titulo = this.novaTarefa;
  if (titulo) {
    this.tarefas.push({ title: titulo, completed: false});
    this.novaTarefa = '';
  }
}

removerTarefa(index: number): void {
  this.tarefas.splice(index, 1);
}

alterar(index: number): void {
  this.tarefas[index].completed = !this.tarefas[index].completed;
}

}

