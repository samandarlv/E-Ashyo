// response-logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { getID } from 'src/common/helpers/getId';

@Injectable()
export class ResponseLoggingMiddleware implements NestMiddleware {
  async use(req: any, res: Response, next: NextFunction) {
    // Intercept the response and log or modify it

    // console.log('Response intercepted:', res.statusCode, res.statusMessage);
    // console.log('request', req);

    if (!req.cookies['session']) res.cookie('session', 'yozildi');
    // await getID(req, res);
    // console.log('response', res);
    // You can also modify the response if needed
    // For example, you can add custom headers
    // res.header('X-Custom-Header', 'Custom Value');

    next(); // Continue processing the request
  }
}
