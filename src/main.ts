import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AppService } from './app.service';

import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const service = app.get(AppService);
  const secret = service.genSecret();

  console.log('generated secret:');
  console.log(secret);

  fs.writeFileSync('speakeasy-secret.json', JSON.stringify(secret));

  await app.listen(3000);
}
bootstrap();
