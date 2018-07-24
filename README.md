# BCH123.org

Live site：[BCH123.org](https://bch123.org/)

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
pm2 start npm --name bch123-maintain -- run maintain
```
