(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{542:function(t,v,_){"use strict";_.r(v);var s=_(7),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"fl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fl"}},[t._v("#")]),t._v(" FL")]),t._v(" "),v("h2",{attrs:{id:"联邦学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联邦学习"}},[t._v("#")]),t._v(" 联邦学习")]),t._v(" "),v("p",[t._v("当涉及到隐私敏感的数据时，传统的集中式机器学习方法可能存在一些限制和风险。联邦学习是一种分布式机器学习框架，能够在保护数据隐私的同时进行模型训练。")]),t._v(" "),v("p",[t._v("在联邦学习中，数据存储在多个本地设备或客户端上，例如移动设备、个人电脑或边缘计算设备。相比于将数据集中存储在一个中心服务器上，联邦学习允许在不共享原始数据的情况下进行模型训练。")]),t._v(" "),v("p",[t._v("联邦学习的主要思想是将模型的训练过程分为两个阶段：全局模型训练和本地模型更新。")]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("全局模型训练")]),t._v("：在全局模型训练阶段，参与方（即客户端）们共同训练一个初始模型，通常是使用一小部分本地数据进行训练。每个客户端在本地训练期间不会共享原始数据或模型参数，只会根据本地数据计算梯度并更新自己的模型。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("本地模型更新")]),t._v("：一旦局部模型更新完毕，客户端将其更新后的模型参数与全局模型参数进行聚合。这个聚合过程通常是通过计算加权平均值来实现的。然后，更新后的全局模型参数再次分发给各个客户端，作为下一轮本地模型训练的基础。")])])]),t._v(" "),v("p",[t._v("联邦学习的优势在于保护数据隐私，因为原始数据不会离开客户端进行共享。相反，只有模型参数才会在参与方之间进行交互。这种方式可以降低数据泄露和隐私侵犯的风险。")]),t._v(" "),v("p",[t._v("此外，联邦学习还具备其他潜在优点，如减少数据传输量、降低中心服务器的计算负载，并使得移动设备能够更好地应用机器学习模型。")]),t._v(" "),v("p",[t._v("需要指出的是，联邦学习也面临一些挑战，如通信效率、模型聚合策略、非独立同分布数据等。但该领域正在不断发展，研究人员和工程师们在解决这些问题上进行了积极的努力。")]),t._v(" "),v("p",[t._v("总而言之，联邦学习是一种创新的机器学习框架，可以在保护数据隐私的前提下进行模型训练。它具备广泛的应用前景，特别适用于需要处理敏感数据的场景，如医疗保健、金融和物联网等。")]),t._v(" "),v("h2",{attrs:{id:"如何单机模拟联邦学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何单机模拟联邦学习"}},[t._v("#")]),t._v(" 如何单机模拟联邦学习")]),t._v(" "),v("ol",[v("li",[t._v("采用单进程：用一个列表来存储每个客户端的模型训练结果，在指定聚合轮次，对列表里的模型数据进行聚合，聚合成全局模型。")]),t._v(" "),v("li",[t._v("采用多进程：服务器与每个客户端都用单独的一个进程来模拟，用进程模拟联邦学习中的节点。当服务器节点与客户端节点之间需要传输模型数据、调度数据时，利用socket实现数据的传输。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);