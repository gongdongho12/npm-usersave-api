# npm-usersave-api

> Dongholab UserSave API for JavaScript With TypeScript

 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Set **.npmrc**
.npmrc 수정
```
@gongdongho12:registry=https://npm.pkg.github.com/
```
## Install

```bash
npm install @gongdongho12/npm-usersave-api
```

## Usage

```ts
import { UserSaveAPI } from '@gongdongho12/npm-usersave-api';

const userSave = new UserSaveAPI("local")

userSave.getSaveListQuery("board%", {
      size: 10,
      page: 0,
      sort: "createdDate,desc"
    }).then((data: any) => {
      console.log('data', data)
    })

```
## Info
UserSaveAPI의 타입은 local, dev, prod를 인식합니다

각각의 설정은 아래를 참고 부탁드립니다.
만약 입력하지 않을시 기본값은 prod를 참고합니다 => 프라이데이 API 서버

```ts
const localConfig = {
  baseURL: 'http://localhost:5000',
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' }
}

const devConfig = {
  baseURL: 'https://dev.dongholab.com',
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' }
}

const prodConfig = {
  baseURL: 'https://dongholab.com',
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' }
}


export default {
  localConfig,
  devConfig,
  prodConfig
}
```