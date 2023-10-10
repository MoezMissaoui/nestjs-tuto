import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { simpleFunc } from './middlewares/simple-func.middleware';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    // retire tout les champs qui ne sont pas déclaré dans la dto
    whitelist: true,
    // rejette les requêtes qui contiennent des champs non déclaré dans la dto
    forbidNonWhitelisted: true, 
  }));

  app.use(simpleFunc);


  const options = new DocumentBuilder()
    .setTitle('Foulens example')
    .setDescription('The foulen API description')
    .setVersion('1.0')
    .addServer('http://127.0.0.1:3000/', 'Local environment')
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addServer('https://production.yourapi.com/', 'Production')
    .addTag('default')
    .addGlobalParameters({
      name: 'lang',
      in: 'query'
    })
    .addBearerAuth(
      { 
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header'
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/docs', app, document);


    app.use(['api/docs', '/docs-json'], basicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }));
  
  await app.listen(3000);
}
bootstrap();
