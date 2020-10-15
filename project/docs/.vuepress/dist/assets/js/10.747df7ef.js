(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{224:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),s("h2",{attrs:{id:"environment-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-环境"}},[t._v("#")]),t._v(" Environment 环境")]),t._v(" "),s("ul",[s("li",[t._v("Centos 7")]),t._v(" "),s("li",[t._v("Openresty 1.13.6.2")])]),t._v(" "),s("h2",{attrs:{id:"步骤-1-waf-下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-waf-下载安装"}},[t._v("#")]),t._v(" 步骤 1: WAF 下载安装")]),t._v(" "),s("h4",{attrs:{id:"安装-已包含-openresty-安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-已包含-openresty-安装包"}},[t._v("#")]),t._v(" 安装(已包含 openresty 安装包)")]),t._v(" "),s("p",[t._v("将代码下载到/tmp 目录，运行 install_waf.sh 文件，jxwaf 将安装在/opt/jxwaf 目录，具体如下:")]),t._v(" "),s("ol",[s("li",[t._v("$ cd /tmp")])]),t._v(" "),s("blockquote",[s("p",[t._v("$ yum install git (若无git的需先运营本行命令安装git)")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("$ git clone https://github.com/jx-sec/jxwaf.git")]),t._v(" "),s("li",[t._v("$ cd jxwaf")]),t._v(" "),s("li",[t._v("$ sh install_waf.sh")]),t._v(" "),s("li",[t._v("$ 运行后显示类似信息即安装成功:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("nginx: the configuration file /opt/jxwaf/nginx/conf/nginx.conf syntax is ok\n\nnginx: [alert] [lua] waf.lua:566: init(): jxwaf init success,waf node uuid is 99d977e8-401b-4ede-a427-94f7170638ce\n\nnginx: configuration file /opt/jxwaf/nginx/conf/nginx.conf test is successful\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v('访问 https://www.jxwaf.com 并注册账号,在全局配置页面获取"api key"和"api password"')])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("访问 https://www.jxwaf.com, 点击 “登陆” 按钮")]),t._v(" "),s("p",[t._v("跳转到登陆页面后，点击 “注册” 按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/1.png",alt:"avatar"}})]),t._v(" "),s("p",[t._v("输入邮箱和图片验证码，请注意查看邮件是否被放入垃圾邮箱，正常情况您将接收到如下类似邮件")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2.png",alt:"avatar"}})]),t._v(" "),s("p",[t._v("输入密码和邮箱验证码即可注册成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/3.png",alt:"avatar"}})]),t._v(" "),s("p",[t._v("登陆控制台后，点击 “全局配置” 栏目，即可获取账号的 “api key” 和 “api password”")]),t._v(" "),s("hr"),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("$ cd tools")]),t._v(" "),s("li",[t._v("$ python jxwaf_init.py --api_key=a2dde899-96a7-40s2-88ba-31f1f75f1552 --api_password=653cbbde-1cac-11ea-978f-2e728ce88125")]),t._v(" "),s("li",[t._v('api_key 为全局配置页面中"api key"的值，api_password 为"api password"的值，运行完成后，显示类似信息即安装成功')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("config file:  /opt/jxwaf/nginx/conf/jxwaf/jxwaf_config.json\nconfig result:\ninit success,access_id is a20be899-96a6-40b2-88ba-32f111111111,access_secret is a42ca0ca-80b5-8e4b-f250-3dc309cccccc\nauth result:\ntry to connect jxwaf server auth api_key and api_password,result is True\n")])])]),s("ol",{attrs:{start:"10"}},[s("li",[s("p",[t._v("$ /opt/jxwaf/nginx/sbin/nginx"),s("br"),t._v("\n启动 openresty")])]),t._v(" "),s("li",[s("p",[t._v("openresty 会在启动或者 reload 的时候自动到 jxwaf 管理中心拉取用户配置的最新规则,之后会定期同步配置,周期可在全局配置页面设置。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("注意：JXWAF 是通过控制台或者 tools 目录下的脚本进行配置，除非您是专业人士，否则请勿擅自修改相关的配置文件")])]),t._v(" "),s("h2",{attrs:{id:"步骤-2-添加网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-添加网站"}},[t._v("#")]),t._v(" 步骤 2: 添加网站")]),t._v(" "),s("p",[t._v("进入控制台后，点击 “网站配置” 进入网站配置页面，点击 “添加网站” 新增要防护的网站。")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("如果你的网站是HTTP的，请看下图")])]),t._v(" "),s("img",{attrs:{src:"/images/7.png",alt:"avatar"}})]),t._v(" "),s("p",[s("em",[s("strong",[t._v("如果你的网站是HTTPS的，请看下图")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/4.png",alt:"avatar"}})]),t._v(" "),s("blockquote",[s("p",[t._v("了解配置详情，请看 "),s("RouterLink",{attrs:{to:"/config.html#配置指南"}},[t._v("配置指南->域名配置")])],1)]),t._v(" "),s("p",[t._v("创建域名后，可以在“网站配置” 页面看到域名的状态")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/5.png",alt:"avatar"}})]),t._v(" "),s("p",[t._v("默认情况下，新建域名仅开启 Web 应用安全防护，可通过“防护配置”页面进行修改。")]),t._v(" "),s("h2",{attrs:{id:"步骤-3-防护效果验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-防护效果验证"}},[t._v("#")]),t._v(" 步骤 3: 防护效果验证")]),t._v(" "),s("p",[t._v("网站配置->日志配置->本地日志记录")]),t._v(" "),s("p",[t._v("点击按钮开启本地日志记录")]),t._v(" "),s("p",[t._v('开启本地日志记录功能后,可通过命令\n"tail -F /opt/jxwaf/nginx/logs/error.log"实时查看防护情况')]),t._v(" "),s("p",[t._v('假设配置域名为 "tmp.jxwaf.com"，则可通过以下命令触发 SQL 注入防护')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl "tmp.jxwaf.com/?a= 1\' and union select * from ss"\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('2019/08/14 11:21:18 [error] 25247#0: *44956 [lua] log.lua:153: {"host":"tmp.jxwaf.com","upstream_connect_time":"-","deny_arg":"query","logstore":"0fbcea1f-04fafc2f-7454-42fe-876f-b5bf39fff1f0","xxf_addr":"192.144.135.9","status":"403","request_start_time":"2019-08-14 11:21:18","upstream_addr":"-","headers":{"host":"tmp.jxwaf.com","accept":"*\\/*","user-agent":"curl\\/7.29.0"},"log_type":"protection_log","protection_type":"jxcheck_protection","upstream_bytes_received":"-","request_time":"0.000","upstream_status":"-","upstream_bytes_sent":"-","method":"GET","upstream_response_time":"-","bytes_sent":"336","protection_info":"attack_request","owasp_type":"sql","uuid":"022d7fb3-04e9-4022-a062-920bd71ddb54","uri":"\\/","query_string":"a= 1\' and union select * from ss","remote_addr":"192.144.135.9","scheme":"http","body":"","version":"1.1"} while logging request, client: 192.144.135.9, server: localhost, request: "GET /?a= 1\' and union select * from ss HTTP/1.1", host: "tmp.jxwaf.com"\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);