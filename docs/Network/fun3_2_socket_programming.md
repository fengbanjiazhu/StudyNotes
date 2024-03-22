---
sidebar_position: 9
---

# Socket 编程

[菜鸟编程](https://www.runoob.com/python/python-socket.html)上有一个详细的表格，回头做详细笔记。

## TCP 编程

使用了 Python 和 TCP 协议来进行 Socket 编程

```Python
#import socket and os module
from socket import *
import os
# AF_INET：IPv4网络协议的Socket类型
# SOCK_STREAM：面向链接稳定数据传输，即TCP
serverSocket = socket(AF_INET, SOCK_STREAM)
# 绑定IP与端口，不用多做解释了老熟人了
serverSocket.bind(('127.0.0.1', 8282))

serverSocket.listen(1)
# 注释1


while True:
    print('Ready to serve...')
    # 获取 socket，与 Ip address
    connectionSocket, addr = serverSocket.accept()
    try:
      # recv(bufSize) 接收TCP数据，字符串格式。 bufSize-可接受最大数据量
        message =  connectionSocket.recv(1024).decode()
        # message打印结果我会贴在下面
        filename = message.split()[1]
        currentFolder = os.getcwd()
        fileAddr = f"{currentFolder}/Python/NetFun/Web_Server/{filename[1:]}"
        f = open(fileAddr,"r")
        outputData = f.read()

        # 发送status状态码，与版本号
        connectionSocket.send('HTTP/1.1 200 OK\r\n\r\n'.encode())
        connectionSocket.send(outputData.encode())
        connectionSocket.close()
    except IOError:
        message = "404 Not Found"
        connectionSocket.send('HTTP/1.1 404 NotFound\r\n\r\n'.encode())
        connectionSocket.send(message.encode())
        connectionSocket.close()

serverSocket.close()

sys.exit()
```
