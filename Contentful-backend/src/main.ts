import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Logger } from '@nestjs/common';
// import express from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  // app.useLogger(app.get(Logger));
  // app.use(express.json({ limit: '50mb' }));
  // app.use(express.urlencoded({ limit: '50mb' }));

  const config = new DocumentBuilder()
    .setTitle('Platform API Middleware')
    .setDescription('Platform Middleware')
    .setVersion('1.0')
    .addTag('platform')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
