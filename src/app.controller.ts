import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateEmailDto } from './dto/create-email';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('email')
  sendEmail(@Body() createEmailDto: CreateEmailDto) {
    return this.appService.sendEmail(createEmailDto);
  }
}
