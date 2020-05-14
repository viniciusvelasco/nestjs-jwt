import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('tasks')
export class TasksController {

  @UseGuards(JwtAuthGuard)
  @Post('')
  async post(@Request() req:any) {
    return req.body;
  }
}
