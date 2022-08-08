import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data) ;
  }

  @Get()
  async findAll(){
    return this.bookService.findAll();
  }
  @Get(':bar_code')
  async findOne(@Param('bar_code') bar_code: string){
    return this.bookService.findOne(bar_code);
  } 
  @Put(":id")
  async update(@Param('id') id: string, @Body() data: BookDTO){
    return this.bookService.updateBook(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.bookService.deleteBooks(id);
  }
}
