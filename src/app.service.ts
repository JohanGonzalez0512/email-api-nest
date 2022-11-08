import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateEmailDto } from './dto/create-email';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) { }

  getHello(): string {
    return 'Hello World!';
  }
  sendEmail(createEmailDto: CreateEmailDto): string {
    const { email, subject, content } = createEmailDto;
    this.mailerService.sendMail({
      to: email,
      from: this.configService.get('user'),
      subject: subject,
      text: '',
      html: content,
    });
    return 'Email sent';
  }
}
