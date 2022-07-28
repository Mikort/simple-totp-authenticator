import { Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/qrcode')
  async getQRCode() {
    return `<img src="${await this.appService.getQRCode()}">`;
  }

  @Get('/verify/:code')
  verify(@Param('code') code: string) {
    return this.appService.verify(code);
  }
}
