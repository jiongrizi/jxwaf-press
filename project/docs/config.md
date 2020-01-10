## 配置指南

## 域名配置

- 域名

此处输入需要防护的域名，例如 “tmp.jxwaf.com”，注意域名不能包含“http://”或者“https://”，如果你需要防护的网站通过IP地址访问，则输入IP地址，如“1.1.1.1”

- 协议类型

选择网站允许访问的协议，支持 HTTP 和 HTTPS，可通过“高级设置”开启“HTTPS 强制跳转功能”，开启后，HTTP 请求将强制跳转为 HTTPS，默认跳转到 443 端口。

- 私钥 AES 加密

当开启 HTTPS 协议时，可选择将 HTTPS 证书的私钥在服务器本地进行 AES 加密，之后在进行配置，确保私钥本身的安全性。

私钥 AES 加密分为两种情况，第一种为单机部署:

1. \$ cd jxwaf/tools
2. 先将私钥文件上传到服务器，假设私钥文件名为“private.key”，则命令如下
3. \$ python private_key_enc.py -p private.key
4. 运行后显示类似信息即安装成功,其中 aes_enc_key 为 AES 加密的 key，aes_enc_iv 为 iv 值，细节可以看脚本文件:

```
aes_enc_key is 9d19112c4d6df74q
aes_enc_iv is 6d095e23c863e611
private key is
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
```

5. 将得到的加密后的私钥，进行配置，同时开启“私钥 AES 加密”选项。

![avatar](/images/6.png)

第二种情况为集群部署，当 AES 加密后的私钥配置完成后，在其他服务器上，需要进行 AES 密钥的初使化操作，不然会因无法解密私钥导致请求失败。

1.\$ cd jxwaf/tools

2.\$ private_key_enc_init.py --aes_enc_key=9d19112c4d6df74q --aes_enc_iv=6d095e23c863e611

3.“aes_enc_key”为 AES 加密的 key， “aes_enc_iv”为 AES 加密的 iv 值，需确保与私钥的一致，运行完成后，如下显示则初使化成功

```
config file:  /opt/jxwaf/nginx/conf/jxwaf/jxwaf_config.json
config result:
init success,aes_enc_key is 9d19112c4d6df749,aes_enc_iv is 6d095e23c863e616
```

- 服务器 IP 地址

如果后端服务器存在多个，可通过“+”号添加，WAF 将通过 IP HASH 的方式，将请求负载均衡到后端服务器

- 服务器端口

指定后端服务器的端口，因考虑到 WAF 与后端服务器主要通过内网访问，目前仅支持 HTTP 协议，如需支持 HTTPS 协议，可通过修改 nginx.conf 文件中的“proxy_pass http://jxwaf;” 为“proxy_pass https://jxwaf;”来实现，nginx.conf文件中一共有两处需要修改

注意：如果修改为支持 HTTPS 回源，将影响该节点的所有网站，如果后端服务器存在仅支持 HTTP 回源的情况，将导致回源失败

- WAF 是否存在代理

WAF 前是否存在 7 层代理，如 CDN，其他 WAF 产品等，如果存在请输入 CDN，或其他 WAF 产品的回源 IP 地址，IP 地址支持子网掩码，当存在多个 IP 时，可通过“+”号添加，JXWAF 将通过请求 header 头中的“X-Forwarded-For” 或 “X-Real-IP” 获取用户真实 IP

## 防护配置

创建域名后，可以在“网站配置” 页面看到域名的状态

默认情况下，新建域名仅开启 Web 应用安全防护，可通过“防护配置”页面进行修改。

防护配置页面目前一共有六个功能

- Web 应用安全防护
- CC 攻击智能防护
- 自定义规则防护
- IP 黑白名单
- 地区封禁
- 拦截页面自定义

可通过相应的按钮来开启或者关闭功能

#### Web 应用安全防护

- 模式

可以选择开启观察模式或者防护模式，观察模式不对攻击请求进行拦截，防护模式会拦截攻击请求，建议刚上线对应用开启观察模式，运行一段时间确定没有误报后在开启防护模式

- 恶意 IP 加入黑名单

当同一 IP 短时间内大量发起攻击请求时，会将该 IP 加入黑名单，后续所有请求将被拦截

- 正常请求放行

基于语义识别防护引擎对请求流量进行筛选，开启后正常请求将被直接放行，开启该功能将有效提升 WAF 在高并发场景下的性能，建议开启该功能。

- SQL 注入攻击防护

基于语义识别引擎进行防护

- XSS 攻击防护

基于语义识别引擎进行防护

- 命令注入防护

基于语义识别引擎进行防护

- 目录穿越防护

基于语义识别引擎进行防护

- 上传攻击防护

基于语义识别引擎进行防护

- 上传攻击防护设置

上传攻击防护基于文件名后缀白名单进行防护，默认仅允许 jpg，png 后缀的文件上传，可自行添加，如点击“+”号，输入“.js”，即在原来的基础上，新增允许 js 后缀的文件上传

- 正常请求日志记录

在开启“正常请求放行”功能后，可以开启该功能来记录放行的请求。

- 异常请求日志记录

在开启“正常请求放行”功能后，可以开启该功能来记录异常的请求，异常请求未必是攻击，只是无法通过语义识别引擎的白名单算法筛选。

- 攻击请求日志记录

开启该功能会将攻击请求记录日志，功能独立于“模式”选择，即无论选择何种模式，开启后遇到攻击请求都将记录日志

#### CC 攻击智能防护

- 人机识别防护模式

**强制开启人机识别**

该选项开启后，将强制所有用户请求进行人机识别

**智能人机识别防护**

该选项开启后，当域名 qps 超过设置的阀值，将对超过阀值的请求进行人机识别

- 传统 cc 防护模式

**CC 攻击次数 & CC 攻击单位时间**

单位时间内的 CC 请求次数，例如将“CC 攻击次数”设置为 60，“CC 攻击单位时间” 设置为 30，即在 30 秒内，请求数超过 60 个时，该 IP 后续的请求将被封禁，区别于传统的超过阀值封禁一段时间，该设置存在时间周期的概念，即从该 IP 的第一个请求开始算起，到 30 秒这个周期结束，当请求数在第 25 秒超过 60 个时，那么该 IP 将被封禁 5 秒，到 30 秒后自动解封。该算法的优势至于对用户体验更加友好，当存在误封对情况后也能尽快的恢复用户访问。该设置配合 QPS 限制，可实现较好的防护效果。

**单 IP QPS 数 & 单 IP 延迟 QPS 数**

将“单 IP QPS”数设置为 10，“单 IP 延迟 QPS 数” 设置为 10，则 当单 IP QPS 小于 10 时，请求不会有影响，当 QPS 超过 10 小于 20 时，如 QPS 等于 15，基于漏桶算法，则前 10 个请求不会有影响，后 5 个请求将被加入延迟队列，降低访问速率。即同一时间只能有 10 个请求进行访问，超过等请求将被延迟处理，等前面 10 个请求处理完后在继续。当 QPS 超过 20 时，如 QPS 等于 25，则超过 20 的请求将被阻断，WAF 会返回 444，主动中断请求连接。该设置配合 CC 访问次数防护设置，可实现较好的防护效果。

#### 自定义规则防护

##### 匹配字段

| 匹配字段           | 描述                                                    |
| ------------------ | ------------------------------------------------------- |
| ARGS_GET           | GET 的参数值                                            |
| ARGS_GET_NAMES     | GET 参数值的名称                                        |
| ARGS_POST          | POST 参数值                                             |
| ARGS_POST_NAMES    | POST 参数值名称                                         |
| ARGS_HEADERS       | HEADERS 参数值                                          |
| ARGS_HEADERS_NAMES | HEADERS 参数值名称                                      |
| ARGS_COOKIES       | COOKIES 参数值                                          |
| ARGS_COOKIES_NAMES | COOKIES 参数值名称                                      |
| HTTP_SCHEME        |
| HTTP_VERSION       |
| HTTP_METHOD        |
| HTTP_URI           |
| HTTP_BODY          |
| HTTP_QUERY_STRING  |
| HTTP_COOKIE        |
| HTTP_REFERER       |
| HTTP_USER_AGENT    |
| REMOTE_ADDR        | 客户端 ip 地址,有代理的情况下.会从 header 头获取真实 ip |
| REAL_REMOTE_ADDR   | 原始 IP 地址,有代理的情况下,获取的是代理的 ip 地址      |

##### 执行动作

- 阻断请求
  默认返回 403 页面,可通过"拦截页面自定义"功能进行配置
- 重定向到首页
  请求将被重定向到首页,也就是网站的根目录
- 放行请求
  将跳过后续的检测,直接放行请求
- 忽略规则
  不对请求进行处理,配合日志记录,可用于新规则上线测试

##### 优先级

优先级分为 5 个级别,优先级越高,越先执行,同等优先级的规则,规则越早创建越先执行

#### IP 黑白名单

快速添加 IP 黑白名单,基于 HASH 算法进行匹配,相比于自定义规则,性能更优,可用于大批量封禁或者放行 IP

#### 地区封禁

基于 IP 所属的国家或地区进行封禁

#### 拦截页面自定义

可自定义响应码和响应内容

## 日志配置

#### 本地日志记录

开启后攻击日志将在本地进行保存，地址为“/opt/jxwaf/nginx/logs/error.log”，线上环境不建议开启该功能，并发较高情况下将影响 waf 性能

#### 远程日志记录

支持 tcp 或 udp 协议传输日志，并发较高的场景建议选择 udp 协议，其余建议选择 tcp 协议传输

#### 阿里云日志服务

需要先开通阿里云日志服务,并创建好 Project 和 Log_store,细节请查看阿里云官方文档

##### 所属地区

输入 Project 创建的地域,如果服务器本身在阿里云上,可以选择"经典/VPC 网络服务入口"

##### Project

Project 创建的名称

##### Log store

Log_store 创建的名称

1. \$ cd jxwaf/tools
2. \$ python aliyun_log_init.py --access_id=LTAIE0dgXu7OJadW --access_secret=8uQjQP8mtRAHAiQWGNZFs9dsaqweff
3. access_id 为阿里云账号的 "AccessKey ID",access_secret 为阿里云账号的"Access Key Secret"

## 全局配置

#### 配置主动更新

开启后，将定期自动同步最新到配置到 waf 节点，关闭后，WAF 节点服务器将不会主动获取管理平台到最新配置，请谨慎选择。当选择关闭后，如需在次开启，需手动 reload nginx 重启进程

#### 配置更新周期

配置同步当周期

#### 节点监控

开启后，WAF 节点服务器将主动上报 WAF 服务器状态信息到管理平台，当 WAF 节点异常时，管理平台将通过邮件或者短信主动告警

#### 节点监控周期

配置节点监控周期

#### 配置备份

可下载查看 WAF 节点获取的配置文件内容
