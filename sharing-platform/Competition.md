# RT-Thread x STM32 全连接创意创客大赛作品展示

RT-Thread x STM32 全连接创意创客大赛是 RT-Thread 联手意法半导体（ST）发起，联合博通集成电路（Beken）、广和通（Fibocom）、立创EDA、码云（Gitee）、正点原子合作伙伴，面向所有开发者的科技型竞赛活动，旨在充分挖掘和培养开发者的创新能力和工程实践素质，提高针对实际问题进行设计制作的能力，对物联网操作系统 RT-Thread 和嵌入式应用系统的理解和设计能力。同时，本次大赛也为工程师提供了良好的契机和平台去了解业界最新的嵌入式平台、通信模组、传感器以及电子产品的设计理念和发展趋势，使大家能够更快融入到产业设计，加强和业界的交流，推动物联网产业发展。[比赛首页](https://www.cirmall.com/activities/rt-thread2020)

**大赛主题**

（1）智能家居——提升家用设备的智能体验；

（2）数据采集分析——提升设备维护效率等；

（3）医疗类——提高疫情防护效率；

（4）其他领域——构建一个解决某个领域某个场景的具体问题的作品；

**大赛要求**

● 代码和文档均开源

● 开发者基于 **RT-Thread** 开发物联网创新型应用或者终端产品

● 基于主办方提供的硬件 **ART-Pi STM32H750** 或者自备 **STM32** 硬件

### 作品展示

|<div style="width:100px">作者</div>| <div style="width:200px">作品名称</div> | <div style="width:400px">作品简介</div> | <div style="width:100px">代码地址</div> |
| :----: | :-------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------: |
| 黄贤景 | [**多功能单通道LoRaWAN网关(LiteCoG v1.0)**](https://www.cirmall.com/circuit/22612) | 多功能单通道LoRaWAN网关(LiteCoG v1.0)	LiteCoG（Lite Connect Gateway）是一款小型的、支持多种连接方式的IoT网关，当前的主体功能是一个单\双通道的LoRaWAN网关，北向采用以太网\WiFi\4G Cat1**（广和通L610 Cat1模块）**连接，南向通信采用LoRa通信，同时也可支持BLE\RS485等连接方式，具有远距离通信、低成本、方便部署、易扩展等特性。 | [地址](https://gitee.com/forest-rain/litecog) |
| 林桂炯 |      [**基于ART-PI的数字图像处理与识别**](https://www.cirmall.com/circuit/22393)      | 本次作品基于ART-PI的数字图像处理与识别，通过摄像头获取图像后，对图像进行灰度、二值化等处理，再通过链表算法提取连通分量。最后通过对图像的切割提取图像特征点与数字0-9的特征进行比对，从而得到当前的识别数字。本次作品有大量的处理运算，对CPU和RAM(内存)有较大的要求，而ART-Pi的480MHz主频和32MB的sdram完全足以胜任。 | [地址](https://gitee.com/colin2135/art_pi_number_recognition) |
| 杨永胜 |   [**RedClock：带番茄时钟的环境感知工具箱**](https://www.cirmall.com/circuit/22366)   | RedClock 通过墨水屏同步显示时间、天气信息图标（时间信息通过 ntp 校时，天气信息通过 js 语言从和风天气获取， 支持有线和无线 wifi 网络连接）,一键切换番茄时钟模式，番茄时钟的默认周期是 25 分钟，时间到时通过屏幕触发提示信息（番茄变为红色）,同时预留贴片蜂鸣器器件焊盘，支持蜂鸣器报警提示（可以关联多个报警事件，比如温度、气压等超过阈值报警），通过外接气压传感器 **LPS22HH** （**ST** **气压传感器** ）获取温度和气压信息并通过墨水屏幕周期性显示,时间、天气、温度和气压信息支持通过网络访问 ART-Pi 的设备 IP 同步显示。 | [地址](https://gitee.com/iysheng/redclock) |
|吴顶顶|[**基于RT‐Thread的网络照相机**](https://www.cirmall.com/circuit/22342)|本网络照相机基于STM32H7+RTThread平台，采集摄像头数据，并通过无线网络传送到服务器，提供SD卡配网、手动拍摄、定时拍摄、照片推送等功能，并提供windows上位机提供控制和照片显示功能。|[上位机](https://gitee.com/wudding/net-camera_device)<br>[下位机](https://gitee.com/wudding/net-camera_terminal)|
|乔季军|[**智能甲醛检测仪**](https://www.cirmall.com/circuit/22333)|该智能甲醛检测仪主要实现甲醛检测及温湿度检测功能，检测到的数据通过LCD显示屏实时的显示出来，同时还能够将传感器数据上传到ONENET物联网平台，用来记录历史传感器数据，同时也能够利用这些数据信息和其他设备联动。|[地址](https://gitee.com/piaoxuebingfeng/art-pi-hcho)|
|欧小龙|[**基于RT-Thread与ZigBee的智能家居控制系统**](https://www.cirmall.com/circuit/22358)|智能家居系统主要基于RT-thread与ZigBee开发，该系统主要分为五大部分，ZigBee无线传感器监控子系统，语音识别子系统，总控子系统，网关子系统，云端监控子系统。|[地址](https://gitee.com/ouxiaolong/smart-home)|
|王义飞|[**重力感应无线智能小车**](https://www.cirmall.com/circuit/22311)|当前市场已经有的智能玩具小车多为通过遥控，按键或者摇杆控制小车的前进后退，本设计基于此基础上，在控制端增加MPU6050传感器，通过陀螺仪数据控制小车的移动，相比之下，炫酷了很多，像手机玩赛车游戏一般。发射端实时采集陀螺仪数据，判断当前数据状态，处理完成之后，转化为控制小车的指令，通过MQTT协议+onenet服务器发布主题；控制端同样通过MQTT+onenet服务器订阅发布的主题，从而实现控制小车动向的功能。|[地址](https://github.com/Mr-Wyff/RTT-ALLConnect_Code)|
|郑伟|[**数采一期下位机**](https://www.cirmall.com/circuit/22180)|数采一期下位机是基于ART-PI开发板开发，服务器采用阿里云学生版云服务器ECS，单机器部署支持每秒采集2000台设备温度压力数据，连接对象（下称下位机）可以是设备也可以是网关（连接协议目前仅支持基于WebSocket，详情参考SocketIO），下位机采集或汇总的数据并通过WIFI 上传云端远程实时监视，也可本地连接串口与 PC 端通讯，上位机通过自定义解析数据后展示到相关订阅端（可同时同步到多个Android手机）。本项目采用WebSocket协议进行设备与云端互联，融合CubeMX、keil、RT-Thread Nano的同时提供OTA功能和气压传感器（**LPS22HH**）的示例。|[服务端](https://gitee.com/iot20201001/service_rtt.git)<br>[管理端](https://gitee.com/iot20201001/service_admin.git)<br>[设备端](https://gitee.com/iot20201001/device.git)<br>[移动端](https://gitee.com/iot20201001/mobile.git)|
|何雄|[**运动手表**](https://www.cirmall.com/circuit/22378)|该作品是基于ART-PI硬件平台，外接OLED，蜂鸣器，按键，**X-NUCLEO-IKS01A3传感器套件（**一款运动MEMS和环境传感器评估板，板载6个MEMS传感器：LSM6DSO-六轴传感器、LIS2MDL-MEMS-3D磁力计、LIS2DW12-MEMS 3D加速度计、LPS22HH-MEMS压力传感器、、HTS221-电容式数字相对湿度和温度环境传感器、STTS751-高精度温度传感器**）**完成实现的运动手表。运动手表应该能够兼顾温湿度，气压信息，指南针以及步数等，能够实时监控环境的状态。|[地址](https://gitee.com/hehung/travel-watch--rt--thread)|
|祁星晨|[**基于ART-PI和RT-Thread Nano的战争雷霆游戏战机飞行参数外设**](https://www.cirmall.com/circuit/22228)|《战争雷霆》提供了一个非常详细和个性化的载具驾驶体验，使玩家可以驾驶数千种不同型号的海陆空载具，在空战模式，模拟真实物理环境状态下的飞行参数是需要及时获取的，PC端界面的局限性，不便直观的查看，因此萌发了利用ART-PI制作一款可方便查看飞行时仪表数据外设的兴趣。|[地址](https://gitee.com/lebment/rtt_full_connect_contest)|
|李博|[**车内二氧化碳检测仪**](https://www.cirmall.com/circuit/22343)|本系统实时监测车内二氧化碳浓度，当二氧化碳浓度高于设定阈值，立刻通过4G Cat1模块报警，用户通过微信收到报警信息。|[地址](https://gitee.com/iot_camp/kits_car_safety_device)|


