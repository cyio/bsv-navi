# BSVGo.top

Live site：[BSVGo.top](https://bsvgo.top/)

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
pm2 start npm --name bsvgo-maintain -- run maintain
```
