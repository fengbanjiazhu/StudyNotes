---
sidebar_position: 8
---

# 传输层 Transport Layer

当应用在不同终端使用的时候，传输层提供了逻辑交流 Logical communication

传输层协议做了什么：

- Sender 方
  - 处理应用层发出的数据
  - 将数据 breaks into small segments (分段数据)
  - 给 segments 添加 header
  - 将 segments 传输到网络层
- Receiver 方
  - 从网络层接收 segments
  - 检查 segments 的 header
  - 重新组装 reassembly 数据
  - 将数据传输到应用层

传输层主要有两个 Protocol： `UDP`，`TCP`

:::tip

什么时候用 TCP？不想数据有问题，并且对时间不敏感。

什么时候用 UDP？ 数据部分丢失也没事，并且对时间敏感。（如直播，网络电话，需要实时的，但丢失一点数据，比如视频/声音卡了，也没关系）
:::

## 传输层概述

设想在应用程序和网络之间存在一扇“门”，发送进程将报文推到门外。门外的运输设施（因特网）将报文送到接收进程的门口。接收进程打开门，即可收到报文。

在 TCP/IP 网络中，这扇“门”称为套接字（socket），是应用层和传输层的接口，也是应用程序和网络之间的 API。

有关 Socket 编程的部分，单独写在了[这篇笔记中](./fun3_2_socket_programming)

<details>
  <summary>传输层和网络层的关系类比</summary>
  <div>
    ![常见 APP 需求](./images/Transport_network_analogy.png)
  </div>
</details>

传输层的有所为、有所不为:

传输层可以通过**差错恢复**、**重排序**等手段提供可靠 reliable、按序的交付服务 in-order delivery。

要注意的是，传输层无法提供 `delay guarantees 延迟保证`与 `bandwidth guarantees 带宽保证`。

## TCP

TCP 全称 Transmission Control Protocol，即传输控制协议

Web 最多使用的协议之一。

:::info 特点

- 可靠 reliable，有序运送 in-order delivery
- 堵塞控制 congestion control
- 流控制 flow control
- connection setup

:::

## UDP

User Datagram Protocol，即用户数据协议。

:::info 特点

- 不可靠 unreliable，无序运送 unordered delivery
- no-frills extension of “best-effort” IP
- UDP 发送方和接收方之间**没有握手**
- 每个 UDP 分段独立处理，与其他分段无关

:::

:::tip 优点

- 没有连接建立（这可能会增加往返时延）
- 简单：发送方和接收方没有连接状态
- header 小
- 没有拥塞控制
- UDP 可以随意发送数据！
- 可以在拥塞面前运作

:::

所以我们可以将 UDP 应用在：

- 流媒体应用程序（对丢包宽容，对速率敏感）
- DNS
- SNMP
- HTTP/3

当然，如果你一定要在 UDP 上进行可靠传输（例如，HTTP/3），也不是没有办法的：

- 在应用层添加所需的可靠性 reliability
- 在应用层添加拥塞控制 congestion control

## Multiplexing 复用 与 Demultiplexing 分用

Multiplexing 复用：
处理从多个 sockets 来的数据，并且添加 transport header，传递到网络层。

Demultiplexing 分用：
将从网络层收到的数据，根据 header info 传递给正确的 socket

:::info
也就是添加 header，与读取 header 的步骤。也就是传输层的重要一环。

(类比的话 Multiplexing 就像给信写地址并投递到邮筒，Demultiplexing 就像邮递员根据门牌号把信放入邮箱)
:::

<details>
  <summary>分用的原理和header结构</summary>
  <div>
    ![常见 APP 需求](./images/demultiplexing_and_segement_header.jpg)
  </div>
</details>
