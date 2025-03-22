import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodoFilterDto } from './dto/todo-filter.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async listTodo(filter: TodoFilterDto, userId: number) {
    return this.prisma.todo.findMany({
      where: {
        userId: userId,
        done: filter.isDone,
      },
      orderBy: {
        [filter.sortBy]: filter.sortOrder,
      },
    });
  }

  async addTodo(data: CreateTodoDto, userId: number) {
    return this.prisma.todo.create({
      data: {
        title: data.title,
        content: data.content,
        done: data.done,
        userId: userId,
      },
    });
  }

  async editTodo(id: number, data: EditTodoDto, userId: number) {
    return this.prisma.todo.update({
      where: {
        id,
        userId: userId,
      },
      data,
    });
  }

  async deleteTodo(id: number, userId: number) {
    return this.prisma.todo.delete({
      where: {
        id,
        userId: userId,
      },
    });
  }

  async get(id: number, userId: number) {
    return this.prisma.todo.findUnique({
      where: {
        id,
        userId: userId,
      },
    });
  }
}
