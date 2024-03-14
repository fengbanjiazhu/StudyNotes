---
sidebar_position: 7
---

# Email 与 DNS

## Email 系统

Email 系统由三个部分组成： user agents 用户代理，mail servers 邮件服务器，email protocols 邮件协议。

### 用户代理 user agents

用户代理（user agent），邮件客户端 Client，也就是 mail reader。也是发送邮件服务器。

用户代理是一个程序，用户通过它和电子邮件系统交互。

- 编辑和**发送邮件**，composing，editing，reading
- 接收、读取和管理邮件
- 管理地址簿
- 无统一标准

比如 Outlook，Gmail 这种，他们的 outgoing 和 incoming 消息是保存在 server 上的

### 邮件服务器 mail servers

也叫做传输代理。接收邮件服务器

- 邮箱：保存用户收到的邮件
- 邮件输出队列 message queue：存储等待发送的邮件
- 运行电子邮件协议，使用 SMTP 协议发送电子邮件消息

### 邮件协议 email protocols

主要有 SMTP (simple mail transfer protocol) 和 Mail access protocols: POP3, IMAP

#### SMTP

简单邮件传输协议 SMTP（Simple Mail Transfer  Protocol）

- SMTP 利用 TCP 可靠地从客户向服务器传递邮件，使用端口 25
- 直接投递: 发送端直接到接收端
- SMTP 的 3 个阶段：连接建立、邮件传送、连接关闭
- 命令/响应（以 HTTP 为例）
  - 命令: ASCII 字符串
  - 响应: 状态码+短语
  - SMTP 是一个简单的 ASCII 协议，邮件必须为 7 位 ASCII

:::warning SMTP 的不足

- 不包括认证
- 传输 ASCII 而不是二进制数据
- 邮件以明文形式出现

:::

#### 最后传递

邮件已经到达 Bob 的邮箱，接下来的工作就是将邮件的一个副本传送到 Bob 的用户代理以便显示

最终交付（Mail access protocols）协议: 从邮件服务器的邮箱中获取邮件

- POP3：Post Office Protocol-Version 3，第三版邮局协议
- IMAP：Internet Message Access Protocol，Internet 邮件访问协议
- Webmail（HTTP）：基于 Web 的电子邮件

使用这三种方式来获取邮件

:::tip 为什么不能使用 SMTP 获取邮件？
接收方的用户代理不能使用 SMTP 从传输代理获取邮件，因为取邮件是一个 pull 操作，而 SMTP 是一个 push 协议，通过引入 Mail access protocols 协议来解决这个问题。
:::

### 例题

:::note Quiz1
假设 Alice 使用基于 Web 的电子邮件账户（例如 Hotmail 或 Gmail）向 Bob 发送一条消息，而 Bob 使用 IMAP 从他的邮件服务器访问邮件。讨论消息是如何从 Alice 的主机传输到 Bob 的主机的。确保列出用于在两个主机之间移动消息的一系列应用层协议。

- 消息首先通过 HTTP over SMTP, 从 Alice 的 Host 发送到她的 mail server 邮件服务器。
- 然后，Alice 的 mail server 邮件服务器通过 SMTP 将消息发送到 Bob 的 mail server 邮件服务器。
- 接着，Bob 的用户代理 user agent 通过 IMAP 将消息从他的邮件服务器拉取到他的主机。

:::

## DNS 系统
