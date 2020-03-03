(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(t,a,e){"use strict";e.r(a);var s=e(28),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"api接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api接口"}},[t._v("#")]),t._v(" API接口")]),t._v(" "),e("h2",{attrs:{id:"调用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用方式"}},[t._v("#")]),t._v(" 调用方式")]),t._v(" "),e("p",[t._v("API调用域名为: api.jxwaf.com")]),t._v(" "),e("p",[t._v("所有的API接口只接受JSON格式数据")]),t._v(" "),e("p",[t._v("通用参数为api_key和api_password，这两个参数值需要登录控制台后，在 WAF管理 -> 全局配置 页面获取")]),t._v(" "),e("h2",{attrs:{id:"获取域名列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取域名列表"}},[t._v("#")]),t._v(" 获取域名列表")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_get_domain_list")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":""}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": [\n        {\n            "domain": "180.76.137.111",\n            "http": "true",\n            "custom_protection": "true",\n            "owasp_protection": "true",\n            "cc_protection": "true",\n            "https": "false"\n        },\n        {\n            "domain": "demo.jxwaf.top",\n            "http": "true",\n            "custom_protection": "false",\n            "owasp_protection": "true",\n            "cc_protection": "true",\n            "https": "true"\n        }\n    ],\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"获取域名详细信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取域名详细信息"}},[t._v("#")]),t._v(" 获取域名详细信息")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_get_domain")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": {\n        "public_key": null,\n        "domain": "demo.jxwaf.top",\n        "http": "true",\n        "redirect_https": "false",\n        "source_ip": "1.1.1.1",\n        "private_key": null,\n        "proxy_ip": "",\n        "proxy": "false",\n        "https": "false",\n        "enc_https": "false",\n        "source_http_port": "80"\n    },\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"删除域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除域名"}},[t._v("#")]),t._v(" 删除域名")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_del_domain")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": "del success",\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"新建域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建域名"}},[t._v("#")]),t._v(" 新建域名")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_create_domain")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","source_http_port":"80","proxy":"true","redirect_https":"true","enc_https":"true","domain":"demo.jxwaf.top","public_key":"123","private_key":"456","proxy_ip":"1.2.3.4","source_ip":"1.1.1.1","http":"true","https":"true"}\n')])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("domain")]),t._v(" "),e("td",[t._v("域名")])]),t._v(" "),e("tr",[e("td",[t._v("http")]),t._v(" "),e("td",[t._v('如果支持http访问，则值为"true"，否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("https")]),t._v(" "),e("td",[t._v('如果支持https访问，则值为"true"，否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("source_http_port")]),t._v(" "),e("td",[t._v("源服务器端口（仅支持http回源）")])]),t._v(" "),e("tr",[e("td",[t._v("redirect_https")]),t._v(" "),e("td",[t._v('是否开启http强制跳转https，是则值为"true",否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("enc_https")]),t._v(" "),e("td",[t._v('是否开启私钥AES加密，是则值为"true",否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("proxy")]),t._v(" "),e("td",[t._v('WAF是否存在代理，是则值为"true",否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("proxy_ip")]),t._v(" "),e("td",[t._v("代理地址,支持子网掩码，英文逗号分割")])])])]),t._v(" "),e("p",[t._v("不清楚的可以查看控制台提交的请求参数")]),t._v(" "),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": "create success",\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"编辑域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑域名"}},[t._v("#")]),t._v(" 编辑域名")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_edit_domain")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","source_http_port":"80","proxy":"false","redirect_https":"true","enc_https":"true","domain":"demo.jxwaf.top","public_key":"123","private_key":"456","proxy_ip":"1.1.3.4","source_ip":"1.1.1.2","http":"true","https":"true"}\n')])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("domain")]),t._v(" "),e("td",[t._v("域名")])]),t._v(" "),e("tr",[e("td",[t._v("http")]),t._v(" "),e("td",[t._v('如果支持http访问，则值为"true"，否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("https")]),t._v(" "),e("td",[t._v('如果支持https访问，则值为"true"，否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("source_http_port")]),t._v(" "),e("td",[t._v("源服务器端口（仅支持http回源）")])]),t._v(" "),e("tr",[e("td",[t._v("redirect_https")]),t._v(" "),e("td",[t._v('是否开启http强制跳转https，是则值为"true",否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("enc_https")]),t._v(" "),e("td",[t._v('是否开启私钥AES加密，是则值为"true",否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("proxy")]),t._v(" "),e("td",[t._v('WAF是否存在代理，是则值为"true",否则为"false"')])]),t._v(" "),e("tr",[e("td",[t._v("proxy_ip")]),t._v(" "),e("td",[t._v("代理地址,支持子网掩码，英文逗号分割")])])])]),t._v(" "),e("p",[t._v("不清楚的可以查看控制台提交的请求参数")]),t._v(" "),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": "edit success",\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"获取域名防护配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取域名防护配置"}},[t._v("#")]),t._v(" 获取域名防护配置")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_get_protection")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": {\n        "domain": "demo.jxwaf.top",\n        "custom_protection": "false",\n        "owasp_protection": "true",\n        "attack_ip_protection": "false",\n        "cc_protection": "false",\n        "ip_config": "false",\n        "page_custom": "false",\n        "geoip": "false",\n        "geo_protection": "false"\n    },\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"修改域名防护配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改域名防护配置"}},[t._v("#")]),t._v(" 修改域名防护配置")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_edit_protection")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top","custom_protection":"false","owasp_protection":"true","attack_ip_protection":"false","cc_protection":"false","ip_config":"false","page_custom":"false","geoip":"false","geo_protection":"false"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": "edit success",\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"获取cc攻击防护配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取cc攻击防护配置"}},[t._v("#")]),t._v(" 获取CC攻击防护配置")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_get_cc_protection")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": {\n        "count": "600",\n        "domain_qps": "2000",\n        "ip_qps": "10",\n        "black_ip_time": "60",\n        "attack_ip_expire_qps": "5",\n        "bot_check": "true",\n        "attack_count": "100",\n        "ip_expire_qps": "10",\n        "attack_ip_qps": "5",\n        "attack_black_ip_time": "300",\n        "all_request_bot_check": "false"\n    },\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"修改cc攻击防护配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改cc攻击防护配置"}},[t._v("#")]),t._v(" 修改CC攻击防护配置")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_edit_protection")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","count":"600","domain_qps":"2000","ip_qps":"10","black_ip_time":"60","attack_ip_expire_qps":"5","bot_check":"true","attack_count":"100","ip_expire_qps":"10","attack_ip_qps":"5","attack_black_ip_time":"300","all_request_bot_check":"false","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": "edit success",\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"获取web攻击防护配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取web攻击防护配置"}},[t._v("#")]),t._v(" 获取Web攻击防护配置")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/api_get_owasp_check")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": {\n        "white_request_bypass": "true",\n        "sql_check": "true",\n        "command_inject_check": "true",\n        "file_traversal_check_time": "60",\n        "virtual_patch_check": "true",\n        "upload_check_rule": "(.jpg|.png)$",\n        "white_request_log": "true",\n        "webshell_check": "true",\n        "file_traversal_check_count": "60",\n        "black_attack_ip": "true",\n        "upload_check": "false",\n        "attack_request_log": "true",\n        "xss_check": "true",\n        "file_traversal_check": "false",\n        "file_traversal_check_ratio": "0.7",\n        "file_traversal_black_time": "3600",\n        "sensitive_file_check": "true",\n        "anomaly_request_log": "true",\n        "directory_traversal_check": "true",\n        "owasp_protection_mode": "true"\n    },\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"修改web攻击防护配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改web攻击防护配置"}},[t._v("#")]),t._v(" 修改Web攻击防护配置")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_edit_owasp_check")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","white_request_bypass":"true","sql_check":"true","command_inject_check":"true","file_traversal_check_time":"60","virtual_patch_check":"true","upload_check_rule":"(.jpg|.png)$","white_request_log":"true","webshell_check":"true","file_traversal_check_count":"60","black_attack_ip":"true","upload_check":"false","attack_request_log":"true","xss_check":"true","file_traversal_check":"false","file_traversal_check_ratio":"0.7","file_traversal_black_time":"3600","sensitive_file_check":"true","anomaly_request_log":"true","directory_traversal_check":"true","owasp_protection_mode":"true","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": "edit success",\n    "result": true\n}\n')])])]),e("h2",{attrs:{id:"创建ip黑白名单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建ip黑白名单"}},[t._v("#")]),t._v(" 创建IP黑白名单")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_create_ip_rule")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","rule_action":"deny","ip":"1.2.3.4","domain":"demo.jxwaf.top"}\n\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"message": "create success", "result": true}\n')])])]),e("h2",{attrs:{id:"删除ip黑白名单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除ip黑白名单"}},[t._v("#")]),t._v(" 删除IP黑白名单")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_del_ip_rule")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top","ip":"1.2.3.4"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"message": "del success", "result": true}\n')])])]),e("h2",{attrs:{id:"查看ip黑白名单列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看ip黑白名单列表"}},[t._v("#")]),t._v(" 查看IP黑白名单列表")]),t._v(" "),e("p",[t._v("API地址:")]),t._v(" "),e("p",[t._v("https://api.jxwaf.com/api/waf_get_ip_rule_list")]),t._v(" "),e("p",[t._v("参数:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}\n')])])]),e("p",[t._v("结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "message": [\n        {\n            "rule_action": "deny",\n            "ip": "1.1.1.1",\n            "time": "2020-03-02T17:35:12.802"\n        }\n    ],\n    "result": true\n}\n')])])])])}),[],!1,null,null,null);a.default=_.exports}}]);