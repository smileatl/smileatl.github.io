(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{540:function(e,t,a){"use strict";a.r(t);var i=a(7),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dml"}},[e._v("#")]),e._v(" DML")]),e._v(" "),t("h2",{attrs:{id:"《double-machine-learning-based-resource-scheduling-method-for-offloading-transfers》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《double-machine-learning-based-resource-scheduling-method-for-offloading-transfers》"}},[e._v("#")]),e._v(" 《Double-Machine-Learning-Based Resource Scheduling Method for Offloading Transfers》")]),e._v(" "),t("h3",{attrs:{id:"摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[e._v("#")]),e._v(" 摘要：")]),e._v(" "),t("p",[e._v("​\tDynamically scheduling the bandwidth based on the traffic variation is important for a task offloading system. However, it faces two challenges. On one hand, the time-varying nature of the offloading traffic makes it difficult to be predicted accurately. On the other hand, differentiated mechanisms are applied to different offloading task types, which greatly complicates the behavior of the task offloading system. It is hence difficult to estimate the performance metrics accurately, especially when the metric values are extremely small. To tackle this, we present a double-machine-learning-based resource scheduling (DML-RS) method for task offloading traffic in this paper. The features of DML-RS are as follows: i) the wavelet transform and the sliding time window are incorporated with the LSTM traffic prediction model, which can capture the periodic and volatile natures of the offloading traffic and hence improve the prediction accuracy; ii) the logarithmic converting is applied to the ANN estimation models, which can improve the sensitivity of the ANN models to the small values and hence provides higher estimation accuracy. As a result, DML-RS can predict the traffic demand of the next network reconfiguration time point and optimize the resource allocation based on the performance estimations in advance. Results show that DML-RS offers near-optimal results compared with the existing method.")]),e._v(" "),t("h3",{attrs:{id:"i-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-introduction"}},[e._v("#")]),e._v(" I. INTRODUCTION")]),e._v(" "),t("p",[e._v("​\tOver the last few years, Multi-Access Edge Computing (MEC) has empowered the network edge. MEC servers are deployed in close proximity to user equipment (UE) in order to improve the quality of service (QoS) and enhance the quality of experience (QoE) [1]. However, MEC servers often face overload issues, since they are constrained in computing power and storage capacity [2].")]),e._v(" "),t("p",[e._v("​\tAs an emerging optical transmission technology, elastic optical network (EON) is advantageous for the low-latency, small-overhead and high-bandwidth features of optical connections. The modulation format and data rate of an EON connection can be adapted according to the heterogeneous requirements of ofﬂoading transfers. It is hence desirable to carry the ofﬂoading trafﬁc. However, EON needs to establish an end-to-end lightpath before sending the data, which may take hundreds of milliseconds [4]. To minimize such establishment overhead, a portion of the link capacity has to be pre-reserved for ofﬂoading trafﬁc. This may lead to the bandwidth contention between the ofﬂoading trafﬁc and background trafﬁc, especially at peak hours. On the other hand, MEC operators often purchase link bandwidth from ISP providers based on peak demand. To accommodate the growing peak demand, MEC operators have to constantly\npurchase link bandwidth even if the average utilization is low [5]. The increasing ofﬂoading transfers not only provoke the bandwidth contention, but also incur expensive transfer cost. Consequently, the efﬁcient use of the bandwidth resources is technically and economically important for MEC operators.")]),e._v(" "),t("p",[e._v("​\tPrior studies proposed novel allocation schemes, ﬂexible scheduling methods and efﬁcient provisioning policies to maximize the utilization, minimize the cost and guarantee the delay constraint [1]–[6]. In essence, the prior studies focused on a certain type of ﬁxed load or a set of given transfer requests and formulated their resource allocation problems as static optimization problems. In practice, the ofﬂoading trafﬁc varies dynamically throughout the day [7]. For example, the trafﬁc in an enterprise network often peaks at the work-hours, but falls quickly in the evening. While the prior studies have been proven to be effective for the static trafﬁc, they ﬁnd it difﬁcult to handle the dynamic trafﬁc. A static allocation scheme may either waste a large amount of bandwidth resources when the trafﬁc is low, or be vulnerable to degraded QoS when the trafﬁc is high. Thus, it is necessary to dynamically schedule the resources with the trafﬁc variation.")]),e._v(" "),t("p",[e._v("​\tIntuitively, the efﬁciency of dynamic resource scheduling depends on two key factors: (a) how to predict the trafﬁc variation accurately; (b) how to estimate the network performance based on the trafﬁc and resource allocation accurately. Our observations on the key factors are threefold as follows. First, as previously mentioned, the trafﬁc is periodic at the day granularity. However, at a ﬁner time granularity, the trafﬁc is highly volatile due to the stochastic behavior of the end users. The existing methods are capable of providing trafﬁc prediction information at a relatively coarse level. While the coarse-grained prediction is sufﬁcient enough for a long-term network planning, most methods ﬁnd it difﬁcult to provide highly accurate predictions for dynamic scheduling at a ﬁner time granularity [8]. The periodic and volatile natures of the ofﬂoading trafﬁc impose a challenge on the existing trafﬁc prediction methods.")]),e._v(" "),t("p",[e._v("​\tSecond, the ofﬂoading trafﬁc is often a mix of multiple types with different characteristics and requirements. Differentiated mechanisms hence are applied to different trafﬁc types. For instance, preemption and resource partitioning mechanisms were used to handle a mix of elephant and mice trafﬁc [6]. In [7], preemption, resource partitioning and temporary storage mechanisms were used to handle a mix of delay-tolerant (DT) and delay-sensitive (DS) trafﬁc. Unfortunately, the coexistence of multiple mechanisms complicates the behavior of the task ofﬂoading system. It is challenging to estimate how the performance metrics change with the trafﬁc and resource allocation efﬁciently. In other words, the conventional estimation methods may be either time-consuming (like the discrete event simulation) or not accurate enough (like the Erlang ﬁxed point approximation).")]),e._v(" "),t("p",[e._v("​\tThird, MEC applications often have the stringent performance requirements, which suggests the value of the network performance metric could be extremely small in certain cases, such as 10−5 blocking probability in [9]. Such small values can lead to a vanishing gradient issue as well as unacceptable estimation error when using the conventional estimation methods. As a result, the conventional estimation methods have difﬁculty in achieving high accuracy.")]),e._v(" "),t("p",[e._v("​\tIn this work, we consider the task ofﬂoading system inter-connected by the EON link [7], and explore how to dynamically schedule the resources in advance based on the trafﬁc prediction. Our contributions are summarized as follows:")]),e._v(" "),t("ol",[t("li",[e._v("We present a long short-term memory (LSTM) model, which is enhanced by the sliding time window and the wavelet analysis to learn the ﬂuctuation, periodic and volatile characteristics from the historical trafﬁc data. Experiments show that the LSTM model is more accurate than the conventional prediction model.")]),e._v(" "),t("li",[e._v("We present artiﬁcial neural network (ANN) models to learn the impacts of the trafﬁc and resource allocation on the network performance metrics. To overcome the van ishing gradient issue, the logarithmic functions are used to convert the values of the metrics into the logarithmic forms. The ANN models hence are more sensitive to the extremely small values than the conventional models learning from the original values. Experiments show that the ANN models have higher estimation accuracy and shorter training time than the conventional models especially when the metrics vary from 10^−10^ to 10^−5^.")]),e._v(" "),t("li",[e._v("We present a double-machine-learning-based resource scheduling method (DML-RS), whose main ideas are threefold as follows. i) DML-RS uses the LSTM model to predict the trafﬁc demand at the next network reconﬁguration time. ii) DML-RS formulates the resource scheduling problem for the next reconﬁguration time as an optimization model, which aims to minimize the performance metrics while improving the bandwidth utilization. iii) To ﬁnd the optimal result, DML-RS searches feasible resource allocations and estimates their corresponding performance using the ANN models. Simulations show that DML-RS can meet the constraints while improving the utilization efﬁciently, compared with the existing methods.")])]),e._v(" "),t("h3",{attrs:{id:"ii-system-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ii-system-model"}},[e._v("#")]),e._v(" II. SYSTEM MODEL")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716190512.png",alt:"1691716190512"}})]),e._v(" "),t("p",[t("strong",[e._v("Fig. 1: The illustration of the network infrastructure.")])]),e._v(" "),t("p",[e._v("​\tThe task ofﬂoading system over the point-to-point (P2P) EON link [7] is considered. The network infrastructure is depicted in Fig. 1. The SDN controller centrally schedules and orchestrates the bandwidth resources in the EON and the storage resources in MEC servers. MEC servers can be deployed in the ﬁeld, remote node (RN) and central ofﬁce (CO) [10]. Our work can be applied to two P2P ofﬂoading scenarios. In the ﬁrst scenario, an MEC server in the ﬁeld is connected to the client networks and an MEC server in the nearest CO via the additional installed ﬁber links. The ﬁeld server is in close proximity to the client networks and can ofﬂoad its tasks to the CO server when it is overloaded. In the second scenario, an MEC server in the RN can communicate with the client networks via the existing ﬁber links between the client networks and the RN. Similarly, the RN server can ofﬂoad its tasks to the CO server. The former offers lower transmission latency, whereas the latter is more economical.")]),e._v(" "),t("h3",{attrs:{id:"iii-lstm-based-traffic-prediction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iii-lstm-based-traffic-prediction"}},[e._v("#")]),e._v(" III. LSTM-BASED TRAFFIC PREDICTION")]),e._v(" "),t("p",[t("strong",[e._v("TABLE I: Trafﬁc Prediction Performance")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716345814.png",alt:"1691716345814"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716363474.png",alt:"1691716363474"}})]),e._v(" "),t("p",[t("strong",[e._v("Fig. 2: The trafﬁc predictions using different models.")])]),e._v(" "),t("p",[e._v("​\tThe autoregressive integrated moving average (ARIMA) model, the LSTM model using only the wavelet analysis and the LSTM model using only the Win are compared with our LSTM model. In Table I, our LSTM model obtains better performance than the three models in terms of the MAE, MAPE and MSE. Fig. 2 compares the predictions to the real trafﬁc. The prediction results using the other three models may lag behind the real trafﬁc when the real trafﬁc is bursty. On the contrary, our LSTM model is more accurate\nthan the others, especially when the real trafﬁc is bursty.")]),e._v(" "),t("h3",{attrs:{id:"iv-ann-based-performance-estimation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iv-ann-based-performance-estimation"}},[e._v("#")]),e._v(" IV. ANN-BASED PERFORMANCE ESTIMATION")]),e._v(" "),t("p",[t("strong",[e._v("TABLE II: Comparisons of Estimation Performance")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716447039.png",alt:"1691716447039"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716468791.png",alt:"1691716468791"}})]),e._v(" "),t("p",[t("strong",[e._v("Fig. 3: Comparison among the simulation results, the Log-ANN estimations and the Orig-ANN estimations.")])]),e._v(" "),t("p",[e._v("​\tAlthough MAE, MSE and MAPE are used to evaluate the estimation performance, neither MAE nor MSE is suitable for the evaluations, because their small values do not suggest a good estimation for the small values of the performance metrics. Compared with MAE and MSE, MAPE is a better measurement for the estimation error for the extremely small values. Orig-ANN is considered as a baseline model. Table II compares Log-ANN with Orig-ANN regarding the estimation performance. The results show that Log-ANN has lower MAPE than Orig-ANN. With the logarithmic converting, Log-ANN can overcome the vanishing gradient issue and hence obtain faster convergence. On the other hand, with the logarithmic converting, a simpler ReLU function can be used as the activation function instead of the sigmoid function. Thus,\nLog-ANN needs less training time (t~train~) than Orig-ANN. Fig. 3 shows the comparisons among the simulation results, the Log-ANN estimations and the Orig-ANN estimations in terms of Bds, Bdt and Pdt. The Log-ANN models can obtain the estimation results similar to the simulation results. Compared with the Orig-ANN models, the Log-ANN models have higher accuracy on the estimations.")]),e._v(" "),t("h3",{attrs:{id:"v-resource-scheduling-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-resource-scheduling-method"}},[e._v("#")]),e._v(" V. RESOURCE SCHEDULING METHOD")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716613874.png",alt:"1691716613874"}})]),e._v(" "),t("p",[t("strong",[e._v("Fig. 4: Illustration of DML-RS for the task ofﬂoading system.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716648749.png",alt:"1691716648749"}})]),e._v(" "),t("p",[e._v("​\tOur goals are twofold: i) minimizing Bds and Bdt within the SLA-requested boundaries; ii) maximizing the bandwidth utilization. The objective function is formulated to achieve both the goals, as shown in Eq. (1). Let α, β and γ denote the weight factors to adjust the importance of the three terms. They can be speciﬁed by the MEC operators. Note that Bds, Bdt, Pdt and U are functions of λ, δ, μ, cs, cds, cdt and s.")]),e._v(" "),t("p",[e._v("​\tHere, we present DML-RS. On one hand, DML-RS uses the LSTM model to predict λt at the next time point t. On the other hand, DML-RS uses the ANN models to estimate the metrics, given λt and a certain resource allocation. Finally,DML-RS dynamically adjusts the resource allocation to optimize Eq. (1). Beneﬁting from the prediction, DML-RS can be initialized in advance before t. Thus, DML-RS is able to make timely decisions on scheduling.")]),e._v(" "),t("h3",{attrs:{id:"vi-results-and-discussions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi-results-and-discussions"}},[e._v("#")]),e._v(" VI. RESULTS AND DISCUSSIONS")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/1691716748384.png",alt:"1691716748384"}})]),e._v(" "),t("p",[t("strong",[e._v("Fig. 5: Comparison among the resource scheduling methods.")])]),e._v(" "),t("p",[e._v("​\tSimulation setup is listed in Table III. We compare DML-RS with two scheduling methods as follows. i) The optimal method has a prior knowledge of trafﬁc variations and estimates the metrics based on extensive simulations. It searches an optimal decision in a greedy manner. ii) The ARIMA-OANN method uses the ARIMA trafﬁc prediction and the Orig-ANN models to estimate all the metrics. It also greedily searches an optimal decision. The methods make the allocation decisions based on the predicted trafﬁc demands. Based on the decisions, we run simulations to obtain the actual metrics.\n​\tFigs. 5 show the comparisons of the metrics among the three methods. Since DML-RS offers more accurate prediction and estimation than ARIMA-OANN, all the metrics in DML-RS meet the constraints and are close to the optimal method. However, in ARIMA-OANN, the performance upper or lower bounds are violated at multiple time points. This is because the ARIMA prediction is less accurate than our LSTM prediction and the Orig-ANN suffers from an over-estimation issue when the values of the metrics are extremely small. Besides, Fig. 5(d) compares the three methods with a static method. In this static method, the allocation decision is made based on the peak demand and remains unchanged over time. Compared with the static method, the dynamic scheduling methods can improve U signiﬁcantly.")]),e._v(" "),t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" REFERENCES")]),e._v(" "),t("p",[e._v("[1] K. Ray and A. Banerjee, “A framework for analyzing resource allocation policies for multi-access edge computing,” in IEEE Int. Conf. Edge Computing (EDGE), pp. 102–110, 2021.\n[2] S. Huang, C. Yang, S. Yin, Z. Zhang, and Y. Chu, “Latency-aware task peer ofﬂoading on overloaded server in multi-access edge computing system interconnected by metro optical networks,” J. Lightwave Technol., vol. 38, no. 21, pp. 5949–5961, 2020.\n[3] M. Afrin, J. Jin, A. Rahman, A. Rahman, J. Wan, and E. Hossain, “Resource allocation and service provisioning in multi-agent cloud robotics: A comprehensive survey,” IEEE Commun. Surveys Tutorials, pp. 1–26, 2021.\n[4] Y. Li, Z. Zeng, J. Li, B. Yan, Y. Zhao, and J. Zhang, “Distributed model training based on data parallelism in edge computing-enabled elastic optical networks,” IEEE Commun. Lett., vol. 25, no. 4, pp. 1241–1244, 2021.\n[5] W. Chu, P. Yu, Z. Yu, J. C. Lui, and Y. Lin, “Online optimal service selection, resource allocation and task ofﬂoading for multi-access edge computing: A utility-based approach,” IEEE Trans. Mob. Comput., pp. 1–18, 2022.\n[6] J. Shao, S. Zhang, W. Sun, and W. Hu, “Dimensioning access link capacity for time-varying trafﬁc with mixed packet streams and circuit connections,” J. Opt. Commun. Netw., vol. 13, pp. 276–288, Nov 2021.\n[7] X. Lin, Y. Li, J. Shao, and Y. Li, “Storage-assisted optical upstream transport scheme for task ofﬂoading in multi-access edge computing,” J. Opt. Commun. Netw., vol. 14, pp. 140–152, Mar 2022.\n[8] V. Eramo, T. Catena, F. Lavacca, and F. di Giorgio, “Study and investigation of sarima-based trafﬁc prediction models for the resource allocation in nfv networks with elastic optical interconnection,” in Int. Conf. Transparent Opt. Netw. (ICTON), pp. 1–4, 2020.\n[9] H. C. Leung, C. S. Leung, E. W. Wong, and S. Li, “Extreme learning machine for estimating blocking probability of bufferless obs/ops networks,” J. Opt. Commun. Netw., vol. 9, no. 8, pp. 682–692, 2017.\n[10] S. Mondal, G. Das, and E. Wong, “CCOMPASSION: A hybrid cloudlet placement framework over passive optical access networks,” in IEEE Conf. Comput. Commun. (INFOCOM), pp. 216–224, 2018.\n[11] "),t("a",{attrs:{href:"https://github.com/rankinjl/internet-traf%EF%AC%81c-stats-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/rankinjl/internet-trafﬁc-stats-project"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[e._v("#")]),e._v(" 引用：")]),e._v(" "),t("p",[e._v("Lin X, Lin S, Li Y, et al. Double-Machine-Learning-Based Resource Scheduling Method for Offloading Transfers[C] // 2022 27th Asia Pacific Conference on Communications (APCC). IEEE, 2022: 114-119.")]),e._v(" "),t("h3",{attrs:{id:"链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[e._v("#")]),e._v(" 链接：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ieeexplore.ieee.org/document/9943560",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ieeexplore.ieee.org/document/9943560"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);