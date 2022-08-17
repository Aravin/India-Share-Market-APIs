# India Share Market Data API

## NSE APIs

## Equity

### Get Market Status

```curl
http://localhost:3000/nse/status
```

### Get Stock Quote

```curl
http://localhost:3000/nse/eq/quote?symbol=HDFCBANK
```

### Get Stock Trades

```curl
http://localhost:3000/nse/eq/trade?symbol=BAJAJFINSV
```

### 52 Week High Stocks

```curl
http://localhost:3000/nse/eq/52-week-high
```

### 52 Week Low Stocks

```curl
http://localhost:3000/nse/eq/52-week-low
```

### Indices

### Get All Indices

```curl
http://localhost:3000/nse/indices/all
```

### Get Specifc Indice Info (ex: NIFTY 50)

```curl
http://localhost:3000/nse/indices/info?index=nifty%2050
```
