import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Task API')
      .setDescription('Task API')
      .build(),
  );

  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
