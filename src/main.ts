import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Prysm CRM API')
    .setDescription('Backend APIs for Mini CRM System')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Listen on dynamic port (Render/Railway)
  await app.listen(process.env.PORT || 3000, '0.0.0.0');

}

bootstrap();
