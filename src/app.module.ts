import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.user,
          pass: process.env.pass,
        }
      },
      defaults: {
        from: '"No Reply" '
      }
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
