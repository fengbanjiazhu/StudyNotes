---
sidebar_position: 3
---

# 延迟计算

计算网络延迟很重要，所以单独开一篇。

## 总延迟

从一个 Packet 发出，到达本地路由，再发送至目标路由，延迟由四部分组成。

### Nodal Processing Delay 处理延迟

第一部分为**节点处理**延迟。

这部分延迟很小，因为是检查一些 bit 错误，判断输出地址，一般小于毫秒。

:::info 节点处理延迟
一般情况下，节点处理延迟会直接给出。如 0.2ms
:::

### Transmission Delay 数据传入延迟

这个部分十分重要，这部分是数据从**路由器进入光纤**的延迟。

计算公式为 `L/R`，直接计算结果为 s，如果需要 ms，则要\*1000。

:::info L/R
L：数据大小 packet length (bits)。如果数据为 byte，则要\*8 变为 bits (1byte = 8bits)

R：数据传输速率 link transmission rate (bps)。如果给出 mbps，则要\*1,000,000 (m 就是 million)
:::

### Queueing Delay 排队延迟

在我们进入光纤之前，前面也会有其他的 Packet 在进入光纤。我们就需要等待他们先进入光纤，之后才能处理我们。

这个就是**排队延迟**。

:::info 排队延迟
排队延迟计算方式很简单，前面有几个 packet 在排队，就计算几次 Transmission Delay 数据传入延迟。

例如 4.5 个排队，即 4.5 \* L/R
:::

### Propagation Delay 物理传输延迟

进入光纤后，Packet 从光纤一端到达另一端的时间。

计算公式为 `d/s`, 直接算结果为 s，如果需要 ms，则要\*1000。

:::info D/S
d：线缆长度 length of physical link，单位为 m。如果为 km，记得转换。

s：传输速度 propagation speed (一般为**光在玻璃中的传输速度**，2\*10^8 m/s)
:::

### 总结与例子

以上四个延迟相加，我们就得到了整个节点的延迟。

- 1 数据处理，大概 1-2ms
- 2 排队延迟，前面有 N 个数据在传入光纤，就用 N\*L/R
- 3 传入延迟，自己的数据大小 L / 传入速率 R = 多久进入光纤
- 4 运输延迟，光纤线缆长度/传播速度 = 通过光纤的时间

![packet delays](./images/packet_delay.jpg)

#### 延迟计算例子

![packet delay example](./images/delay_example.jpg)

:::note 计算结果

- 数据处理延迟 0.2ms
- 传入延迟为 2.4ms
  - (1500\*8) / 5,000,000 = 0.0024s = 2.4ms
- 排队延迟为 8.4ms
  - 3.5 \* 2.4 = 8.4 ms
- 运输延迟为 6ms
  - 1,500,000 / (2.5\*10^8) = 0.006s = 6ms

总延迟为 0.2 + 2.4 + 8.4 + 6 = 17ms
:::

## Traffic Intensity 流量强度

流量强度是在指定时间段（通常是繁忙时间）内服务器或资源**平均占用率**的度量

计算公式为 `La/R`

:::info La/R

- L：数据大小 packet length (bits)。如果数据为 byte，则要\*8 变为 bits (1byte = 8bits)
- R：带宽 link bandwidth (bps)。如果给出 mbps，则要\*1,000,000 (m 就是 million)
- a: 平均包到达比例 average packet arrival rate (packet/s)

- bit 到达平均速率 Arrival rate: La (bps)
- 流量强度 Traffic Intensity : La/R

:::

### 例子

刚刚的案例中，如果给出 packet arrival rate 为 150 packet/s，计算一下流量强度。

(L 为 1500bytes，R 为 5mbps)

:::note 计算结果
1500\*8\*150 / 5,000,000 = 0.36，就是 36%
:::

### 例题 2

![delay Quiz](./images/delay_quiz_2.jpg)

:::note 题目翻译
假设图中左侧的两台主机同时开始传输大小为 1500 bytes 的数据包（start time = 0）到路由器 B。假设主机与路由器 A 之间的 link rate 为 4Mbps，而路由器 A 与路由器 B 之间的 link rate 也是 4Mbps。其中一台主机的 propagation 物理传播延迟为 2ms，另一台主机的 propagation 物理传播延迟为 3ms。路由器 A 的节点处理延迟为 0.3ms。
:::

#### 1. Calculate the time router A receives the last bit of the first packet

:::info
解析：第 1 个到达的 packet 是 Propagation 为 2ms 的那个包

- L/R + D_prop(short)
- 1500 \* 8 / 4_000_000 + 2ms = 5ms
  :::

#### 2. Calculate the time router A receives the last bit of the second packet

:::info
解析：第 2 个到达的 packet 是 Propagation 为 3ms 的那个包

- L/R + D_prop(long)
- 1500 \* 8 / 4_000_000 + 3ms = 6ms
  :::

#### 3. Calculate the time the last bit of the first packet leaves router A

:::info
解析：计算第一个包开始到路由器 A 再全部离开的时间。所以是题目 1 的延迟结果，加上 0.3ms 的 Process 延迟，再加上进入光纤的 Transmission 延迟。

- Q1 + D_process + D_trans
- 5ms + 1500 \* 8 / 4_000_000 + 0.3ms = 8.3ms
  :::

#### 4. Calculate the queueing delay (if any) of the second packet

:::info
解析：题目 3 中，8.3ms 第一个包才离开。但是题目 2 中，第二个包是 6ms 的时候到达的，再加上 0.3ms 的 Process 延迟，剩下就是第二个包等待时间。

- Q3 - ( Q2 + 0.3ms )
- 8.3ms - ( 6ms + 0.3ms ) = 2ms

:::

#### 5. Calculate the time the last bit of the second packet leaves router A

:::info
解析 1：计算所有延迟

- L/R + D_prop(long) + D_process + D_queueing + L/R(D_trans)
- 3ms + 3ms + 0.3ms + 2ms + 3ms = 11.3ms

解析 2：题目 3 中，8.3ms 第一个包才离开。也就是第二个包 8.3ms 之后才可以开始计算进入光纤的 Transmission 延迟

- Q4 + L/R
- 8.3ms + 3ms = 11.3ms

:::
