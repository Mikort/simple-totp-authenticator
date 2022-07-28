## Author

Mikort (https://github.com/Mikort)

## Description

Simple example of totp authenticator

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Settings

- app name
```bash
totp\src\app-name.constant.ts
```

- generated secret (after run)
```bash
totp\speakeasy-secret.json
```

## Packages used for totp

- speakeasy
- @types/speakeasy
- qrcode
- @types/qrcode

## Use

| method + URL                    | description                            |
|---------------------------------|----------------------------------------|
| GET localhost:3000/qrcode       | get qrcode to scan                     |
| GET localhost:3000/verify/:code | put code from authenticator to check   |
