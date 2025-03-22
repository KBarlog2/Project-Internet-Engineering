import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoNotfoundException } from '../todo-notfound-exception';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodoFilterDto } from './dto/todo-filter.dto';
import { TokenGuard } from '../auth/token.guard';
import { UserId } from '../auth/user.decorator';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  @UseGuards(TokenGuard)
  async listTodo(@Query() filter: TodoFilterDto, @UserId() userId: number) {
    return this.todoService.listTodo(filter, userId);
  }

  @Get(':id')
  @UseGuards(TokenGuard)
  async getTodo(
    @Param('id', ParseIntPipe) id: number,
    @UserId() userId: number,
  ) {
    const todo = await this.todoService.get(id, userId);
    if (!todo) throw new TodoNotfoundException();

    return todo;
  }

  @Post()
  @UseGuards(TokenGuard)
  async addTodo(@Body() data: CreateTodoDto, @UserId() userId: number) {
    return this.todoService.addTodo(data, userId);
  }

  @Delete(':id')
  @UseGuards(TokenGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTodo(@Param('id') id: number, @UserId() userId: number) {
    const todo = await this.todoService.get(id, userId);
    if (!todo) throw new TodoNotfoundException();

    await this.todoService.deleteTodo(id, userId);
  }

  @Put(':id')
  @UseGuards(TokenGuard)
  async editTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: EditTodoDto,
    @UserId() userId: number,
  ) {
    const todo = await this.todoService.get(id, userId);
    if (!todo) throw new TodoNotfoundException();

    return this.todoService.editTodo(id, data, userId);
  }
}
