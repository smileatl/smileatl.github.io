(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{518:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"分布式网络通信框架-十二-zookeeper简介与安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式网络通信框架-十二-zookeeper简介与安装"}},[s._v("#")]),s._v(" 分布式网络通信框架（十二）——zookeeper简介与安装")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[a("code",[s._v("zookeeper")]),s._v("（后文简称zk）提供功能有：服务注册中心、全局服务命名、以及分布式锁。"),a("br"),s._v("\nRPC服务会被发布到不同的服务器上，本项目zk的作用就是找到某一个RPC服务在哪一个服务器上，提供服务注册发现功能。")]),s._v(" "),a("h2",{attrs:{id:"zk的数据如何组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk的数据如何组织"}},[s._v("#")]),s._v(" zk的数据如何组织？")]),s._v(" "),a("h3",{attrs:{id:"znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#znode"}},[s._v("#")]),s._v(" znode")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/fa9faba819fc471d822307fa61e24746-1691338441198.png",alt:"fa9faba819fc471d822307fa61e24746"}})]),s._v(" "),a("p",[s._v("每个znode节点都只存储简单的"),a("code",[s._v("byte")]),s._v("字节数组，一般存少量状态信息，默认数据上限为1MB，我们项目中用来存服务的"),a("code",[s._v("IP:PORT")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"zk的client常用的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk的client常用的命令"}},[s._v("#")]),s._v(" zk的Client常用的命令")]),s._v(" "),a("p",[s._v("Client常用的命令有"),a("code",[s._v("ls")]),s._v(" 、"),a("code",[s._v("get")]),s._v("、 "),a("code",[s._v("create")]),s._v("、"),a("code",[s._v("set")]),s._v(" 、"),a("code",[s._v("delete")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/fa9faba819fc471d822307fa61e24746-1691338471981.png",alt:"fa9faba819fc471d822307fa61e24746"}})]),s._v(" "),a("p",[s._v("服务注册之后，注册中心和各个服务实例直接建立"),a("code",[s._v("Session")]),s._v("，要求实例们"),a("strong",[s._v("定期发送心跳")]),s._v("，有一个心跳计数（定时增加），收到实例心跳后心跳计数恢复，一旦心跳计数超过某一特定值，则认为实例挂了，删除该实例。")]),s._v(" "),a("p",[s._v("临时性"),a("code",[s._v("ephemeral")]),s._v("节点，rpc节点超时未发送心跳消息，zk会自动删除临时性节点；")]),s._v(" "),a("p",[s._v("永久性节点，rpc节点超时未发送心跳消息，zk不会自动删除永久性节点。")]),s._v(" "),a("p",[s._v("zk会在在1/3的Timeout时间向服务提供方发送ping心跳消息，可以使用"),a("code",[s._v("tcpdump")]),s._v("进行测试：sudo tcpdump -i lo port 2181")]),s._v(" "),a("h2",{attrs:{id:"zookeeper安装和基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper安装和基本使用"}},[s._v("#")]),s._v(" zookeeper安装和基本使用")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" zookeeper-3.4.10.tar.gz\n\njyhlinux@ubuntu:~/share/zookeeper-3.4.10$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" conf/\njyhlinux@ubuntu:~/share/zookeeper-3.4.10/conf$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" zoo_sample.cfg zoo.cfg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用vim修改zk的配置文件"),a("code",[s._v("zoo.cfg")]),s._v("，将数据目录改为自己指定的路径")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jyhlinux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zookeeper"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/assets/0bd6f40c5eed4f04a9322bcf2ff96a3b.png",alt:"0bd6f40c5eed4f04a9322bcf2ff96a3b"}})]),s._v(" "),a("p",[s._v("运行zk的"),a("code",[s._v("Server")]),s._v("端程序（后台运行）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("jyhlinux@ubuntu:~/share/zookeeper-3.4.10/bin$ ./zkServer.sh start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行zk的"),a("code",[s._v("Client")]),s._v("程序")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("jyhlinux@ubuntu:~/share/zookeeper-3.4.10/bin$ ./zkCli.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("zk的Client常用的命令有：ls、get、 create、set 、delete")]),s._v(" "),a("p",[s._v("使用例子：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zookeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 zookeeper目录 下有一个子节点 quota")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /zookeeper \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("quota"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取  /zookeeper/quota节点信息， 数据长度为0，孩子数为0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" get /zookeeper/quota\n\ncZxid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0x0\nctime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Thu Jan 01 08:00:00 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),s._v("\nmZxid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0x0\nmtime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Thu Jan 01 08:00:00 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),s._v("\npZxid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0x0\ncversion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndataVersion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\naclVersion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nephemeralOwner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0x0\ndataLength "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnumChildren "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根目录下创建了mprpc节点，值为20")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" create /mprpc "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nCreated /mprpc\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[a("img",{attrs:{src:"/assets/bfaa04e4b8e349909fcd30ac3c2b2ee1.png",alt:"bfaa04e4b8e349909fcd30ac3c2b2ee1"}})]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zk删除父节点需要先把子节点删除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" create /mprpc/servic "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nCreated /mprpc/servic\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" delete /mprpc\nNode not empty: /mprpc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" delete /mprpc/servic\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" delete /mprpc       \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zk不能一次创建多级目录，要逐级创建")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" create /userServiceRpc "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nCreated /userServiceRpc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" create /userServiceRpc/service_1/service_1_1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nNode does not exist: /userServiceRpc/service_1/service_1_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" create /userServiceRpc/service_1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("            \nCreated /userServiceRpc/service_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" create /userServiceRpc/service_1/service_1_1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nCreated /userServiceRpc/service_1/service_1_1\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"zk的原生开发api编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk的原生开发api编译安装"}},[s._v("#")]),s._v(" zk的原生开发API编译安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("~/share/zookeeper-3.4.10/src/c$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后需要将Makefile文件中做修改，使gcc不要把编译警告当作错误")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("~/share/zookeeper-3.4.10/src/c$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" Makefile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("保证下面红圈部分没有 "),a("code",[s._v("-Werror")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/9096078400354e1e9f820b30dfe10473.png",alt:"9096078400354e1e9f820b30dfe10473"}})]),s._v(" "),a("p",[s._v("然后再执行以下步骤")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("~/share/zookeeper-3.4.10/src/c$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n~/share/zookeeper-3.4.10/src/c$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);