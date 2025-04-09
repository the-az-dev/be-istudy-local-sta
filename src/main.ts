import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { bot } from './tgbot/botBootstrap';
import { SeederService } from './app.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config({ path: __dirname + '/../.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('iStudy Local Sta API')
    .setDescription('Main OpenAPI Documentation for iStudy STA.')
    .setVersion('0.2')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 5000);

  const seeder = app.get(SeederService);
  await seeder.seedUserRoles();
  bot.launch();
}

bootstrap();
