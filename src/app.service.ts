import { Injectable } from '@nestjs/common';
import { toDataURL } from 'qrcode';

import { appName } from './app-name.constant';

import * as fs from 'fs';
import * as speakeasy from 'speakeasy';

@Injectable()
export class AppService {
  async getQRCode(): Promise<string> {
    const file = fs.readFileSync('speakeasy-secret.json');
    const secret = JSON.parse(file.toString()) as speakeasy.GeneratedSecret;

    return toDataURL(secret.otpauth_url);
  }

  genSecret(): speakeasy.GeneratedSecret {
    const secret = speakeasy.generateSecret({
      name: appName,
    });

    return secret as speakeasy.GeneratedSecret;
  }

  verify(code: string): boolean {
    const file = fs.readFileSync('speakeasy-secret.json');
    const secret = JSON.parse(file.toString()) as speakeasy.GeneratedSecret;

    const verified = speakeasy.totp.verify({
      secret: secret.ascii,
      token: code,
    });

    return verified;
  }

  // speakeasy.totp({secret: 'asd'}) // generate totp
}
