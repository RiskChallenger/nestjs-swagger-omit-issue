import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as fs from "fs";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);


  if (process.env.GENERATE_SWAGGER) {
    const options = new DocumentBuilder()
        .setTitle('minimal API')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);

    fs.writeFileSync('./api-doc.json', JSON.stringify(document));

    await app.close();
    process.exit();
  } else {
    await app.listen(3000);
  }
}

// Otherwise the app won't run as expected
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
