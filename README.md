# bsv.oaker.bid

Live site：[bsv.oaker.bid](https://bsv.oaker.bid/)

## Development

install dependencies
```
npm install
```

run frontend
```sh
npm run serve
```

run data maintain script
```sh
npm run maintain
```

## Build
```sh
npm run build
```

## Forever Alive
```sh
pm2 start npm --name bsv-navi-maintain -- run maintain
```

## 创建 token
1.  创建页面[私人令牌 - 码云 Gitee.com](https://gitee.com/personal_access_tokens)
2. 权限勾选 gist
3. 将生成的 token 写入`private-config.json`
4. 运行`yarn maintain`验证是否能成功操作 gist
