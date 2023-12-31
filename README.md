# 这个项目是方便多次使用atomicals客户端进行铭文铸造的辅助脚本
## 主要解决自动连续打，日志输出记录功能，具有通用性

# 说明：

mint.js 是一直循环打，不会自动停止

mint-n11 是打11次自动停止，为了解决给的gas低，导致卡交易不上链的问题



## 用法：
下载文件到atomicals客户端根目录，使用下列命令即可
```
node mint.js mint-dft quark --satsbyte 120
```

```
node mint-n11.js mint-dft quark --satsbyte 120
```

## 日志：
日志在同目录下的logs目录下
