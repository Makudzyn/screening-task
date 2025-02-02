import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function bootstrap() {
  const PORT = process.env.PORT ?? 5000;
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
