## API接口

## 调用方式

API调用域名为: api.jxwaf.com

所有的API接口只接受JSON格式数据

通用参数为api_key和api_password，这两个参数值需要登录控制台后，在 WAF管理 -> 全局配置 页面获取


## 获取域名列表

API地址:

https://api.jxwaf.com/api/waf_get_domain_list

参数:
```
{"api_key":"","api_password":""}
```

结果:
```
{
    "message": [
        {
            "domain": "180.76.137.111",
            "http": "true",
            "custom_protection": "true",
            "owasp_protection": "true",
            "cc_protection": "true",
            "https": "false"
        },
        {
            "domain": "demo.jxwaf.top",
            "http": "true",
            "custom_protection": "false",
            "owasp_protection": "true",
            "cc_protection": "true",
            "https": "true"
        }
    ],
    "result": true
}
```
## 获取域名详细信息

API地址: 

https://api.jxwaf.com/api/waf_get_domain

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": {
        "public_key": null,
        "domain": "demo.jxwaf.top",
        "http": "true",
        "redirect_https": "false",
        "source_ip": "1.1.1.1",
        "private_key": null,
        "proxy_ip": "",
        "proxy": "false",
        "https": "false",
        "enc_https": "false",
        "source_http_port": "80"
    },
    "result": true
}
```
## 删除域名

API地址: 

https://api.jxwaf.com/api/waf_del_domain

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": "del success",
    "result": true
}
```
## 新建域名

API地址: 

https://api.jxwaf.com/api/waf_create_domain

参数:
```
{"api_key":"","api_password":"","source_http_port":"80","proxy":"true","redirect_https":"true","enc_https":"true","domain":"demo.jxwaf.top","public_key":"123","private_key":"456","proxy_ip":"1.2.3.4","source_ip":"1.1.1.1","http":"true","https":"true"}
```

参数 | 描述
---|---
domain | 域名
http | 如果支持http访问，则值为"true"，否则为"false"
https | 如果支持https访问，则值为"true"，否则为"false"
source_http_port |  源服务器端口（仅支持http回源）
redirect_https | 是否开启http强制跳转https，是则值为"true",否则为"false"
enc_https | 是否开启私钥AES加密，是则值为"true",否则为"false"
proxy | WAF是否存在代理，是则值为"true",否则为"false"
proxy_ip | 代理地址,支持子网掩码，英文逗号分割

不清楚的可以查看控制台提交的请求参数

结果:
```
{
    "message": "create success",
    "result": true
}
```
## 编辑域名

API地址: 

https://api.jxwaf.com/api/waf_edit_domain

参数:
```
{"api_key":"","api_password":"","source_http_port":"80","proxy":"false","redirect_https":"true","enc_https":"true","domain":"demo.jxwaf.top","public_key":"123","private_key":"456","proxy_ip":"1.1.3.4","source_ip":"1.1.1.2","http":"true","https":"true"}
```

参数 | 描述
---|---
domain | 域名
http | 如果支持http访问，则值为"true"，否则为"false"
https | 如果支持https访问，则值为"true"，否则为"false"
source_http_port |  源服务器端口（仅支持http回源）
redirect_https | 是否开启http强制跳转https，是则值为"true",否则为"false"
enc_https | 是否开启私钥AES加密，是则值为"true",否则为"false"
proxy | WAF是否存在代理，是则值为"true",否则为"false"
proxy_ip | 代理地址,支持子网掩码，英文逗号分割

不清楚的可以查看控制台提交的请求参数

结果:
```
{
    "message": "edit success",
    "result": true
}
```

## 获取域名防护配置

API地址: 

https://api.jxwaf.com/api/waf_get_protection

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": {
        "domain": "demo.jxwaf.top",
        "custom_protection": "false",
        "owasp_protection": "true",
        "attack_ip_protection": "false",
        "cc_protection": "false",
        "ip_config": "false",
        "page_custom": "false",
        "geoip": "false",
        "geo_protection": "false"
    },
    "result": true
}
```
## 修改域名防护配置

API地址: 

https://api.jxwaf.com/api/waf_edit_protection

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top","custom_protection":"false","owasp_protection":"true","attack_ip_protection":"false","cc_protection":"false","ip_config":"false","page_custom":"false","geoip":"false","geo_protection":"false"}
```

结果:
```
{
    "message": "edit success",
    "result": true
}
```

## 获取CC攻击防护配置

API地址: 

https://api.jxwaf.com/api/waf_get_cc_protection

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": {
        "count": "600",
        "domain_qps": "2000",
        "ip_qps": "10",
        "black_ip_time": "60",
        "attack_ip_expire_qps": "5",
        "bot_check": "true",
        "attack_count": "100",
        "ip_expire_qps": "10",
        "attack_ip_qps": "5",
        "attack_black_ip_time": "300",
        "all_request_bot_check": "false"
    },
    "result": true
}
```
## 修改CC攻击防护配置

API地址: 

https://api.jxwaf.com/api/waf_edit_protection

参数:
```
{"api_key":"","api_password":"","count":"600","domain_qps":"2000","ip_qps":"10","black_ip_time":"60","attack_ip_expire_qps":"5","bot_check":"true","attack_count":"100","ip_expire_qps":"10","attack_ip_qps":"5","attack_black_ip_time":"300","all_request_bot_check":"false","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": "edit success",
    "result": true
}
```
## 获取Web攻击防护配置

API地址: 

https://api.jxwaf.com/api/api_get_owasp_check

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": {
        "white_request_bypass": "true",
        "sql_check": "true",
        "command_inject_check": "true",
        "file_traversal_check_time": "60",
        "virtual_patch_check": "true",
        "upload_check_rule": "(.jpg|.png)$",
        "white_request_log": "true",
        "webshell_check": "true",
        "file_traversal_check_count": "60",
        "black_attack_ip": "true",
        "upload_check": "false",
        "attack_request_log": "true",
        "xss_check": "true",
        "file_traversal_check": "false",
        "file_traversal_check_ratio": "0.7",
        "file_traversal_black_time": "3600",
        "sensitive_file_check": "true",
        "anomaly_request_log": "true",
        "directory_traversal_check": "true",
        "owasp_protection_mode": "true"
    },
    "result": true
}
```
## 修改Web攻击防护配置

API地址: 

https://api.jxwaf.com/api/waf_edit_owasp_check

参数:
```
{"api_key":"","api_password":"","white_request_bypass":"true","sql_check":"true","command_inject_check":"true","file_traversal_check_time":"60","virtual_patch_check":"true","upload_check_rule":"(.jpg|.png)$","white_request_log":"true","webshell_check":"true","file_traversal_check_count":"60","black_attack_ip":"true","upload_check":"false","attack_request_log":"true","xss_check":"true","file_traversal_check":"false","file_traversal_check_ratio":"0.7","file_traversal_black_time":"3600","sensitive_file_check":"true","anomaly_request_log":"true","directory_traversal_check":"true","owasp_protection_mode":"true","domain":"demo.jxwaf.top"}
```
结果:
```
{
    "message": "edit success",
    "result": true
}
```
## 创建IP黑白名单

API地址: 

https://api.jxwaf.com/api/waf_create_ip_rule

参数:
```
{"api_key":"","api_password":"","rule_action":"deny","ip":"1.2.3.4","domain":"demo.jxwaf.top"}

```
结果:
```
{"message": "create success", "result": true}
```
## 删除IP黑白名单

API地址: 

https://api.jxwaf.com/api/waf_del_ip_rule

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top","ip":"1.2.3.4"}
```
结果:
```
{"message": "del success", "result": true}
```

## 查看IP黑白名单列表

API地址: 

https://api.jxwaf.com/api/waf_get_ip_rule_list

参数:
```
{"api_key":"","api_password":"","domain":"demo.jxwaf.top"}
```

结果:
```
{
    "message": [
        {
            "rule_action": "deny",
            "ip": "1.1.1.1",
            "time": "2020-03-02T17:35:12.802"
        }
    ],
    "result": true
}
```