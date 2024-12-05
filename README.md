# LingoPod (译播客) 🎙️

> 一款完全开源的双语播客生成工具，支持 Android、Windows 和 Web 多平台，让英语学习变得有趣而高效！能将任意网页内容转换成沉浸式英语学习材料。

## ✨ 主要特性

- 📱 多平台支持
  - Android 应用
  - Windows 客户端
  - Web 网页版
  - 完全开源代码
- 🤖 智能功能
  - 智能内容提取与总结
  - AI 驱动的自然对话生成
  - 高品质中英文 TTS
  - 自动生成双语字幕
- 🎯 实用功能
  - 中英文音频切换
  - 智能音频处理
  - RESTful API 支持
  - 跨平台数据同步

## 🖼️ 界面预览

<div align="center">
  <img src="https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/home-dark.png" width="45%" alt="主页深色模式"/>
  <img src="https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/player-dark.png" width="45%" alt="播放器深色模式"/>
</div>

## ⚡️ 在线体验

您可以通过以下方式快速体验LingoPod:

### 主要入口
- 🌐 Web客户端: [client.lingopod.top](https://client.lingopod.top)
  - 用于生成和播放双语播客内容
  - 测试账号: test / test（注：仅供功能体验，有使用限制）

### 其他服务
- 📊 管理后台: [manager.lingopod.top](https://manager.lingopod.top)
  - 用于管理任务和查看系统状态
- 🔧 API服务: [server.lingopod.top](https://server.lingopod.top/api/v1/users/health)
  - RESTful API接口服务

## ⚙️ 使用须知

### 1. 内容支持范围
- 在线版本出于安全考虑，仅支持微信公众号文章（https://mp.weixin.qq.com）
- 自部署版本可配置支持任意网页内容

### 2. 试用服务说明
- 仅供功能体验和测试
- 服务可能随时调整，不保证数据持久化
- 生产环境建议自行部署

### 3. 部署配置说明
- 客户端与管理后台：
  - 支持独立部署
  - 默认API地址：https://server.lingopod.top
  - 支持在界面中切换自定义API地址
- 生产环境推荐：
  - 自行部署API服务
  - 可继续使用在线版客户端

## 🎯 项目架构

本项目包含以下组件：

- **API 服务端**：[lingopod](https://github.com/linshenkx/lingopod) - 提供核心 RESTful API
- **客户端应用**：[lingopod-client](https://github.com/linshenkx/lingopod-client) - 支持 Android/Web/Windows
- **管理后台**：[lingopod-manager](https://github.com/linshenkx/lingopod-manager) - 任务和系统管理
- **官网**：[lingopod-web](https://github.com/linshenkx/lingopod-web)

## 📱 客户端下载

您可以通过以下方式获取客户端：

- **Android APK**: [点击下载](https://ghproxy.always200.com/https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-android.apk)
- **Windows 客户端**: [点击下载](https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-windows.zip)
- **Web 版本**: [点击下载](https://github.com/linshenkx/lingopod-client/releases/latest/download/lingopod-web.zip)

> 更多版本及历史更新请访问 [releases 页面](https://github.com/linshenkx/lingopod-client/releases)

## 外部依赖说明

项目依赖两个核心服务:
- **LLM 服务**: 通过 OpenAI 兼容接口对接,支持各类大语言模型，使用免费的 qwen2.5-7b 模型也可以达到较好效果
- **TTS 服务**: 支持两种模式：
  1. 微软 TTS（edge-tts）：默认模式，免费使用。非大陆地区需设置 HTTPS_PROXY 环境变量
  2. OpenAI TTS：通过设置 USE_OPENAI_TTS_MODEL=true 启用，需配置相应的 API

> 推荐参考 [edge-tts-openai-cf-worker](https://github.com/linshenkx/edge-tts-openai-cf-worker) 部署基于 Cloudflare Workers 的免费 Edge OpenAI TTS 服务

## 🤝 贡献指南

欢迎通过以下方式参与项目：
- 提交 Issue 报告问题
- 提出新功能建议
- 改进文档
- 提交 Pull Request

## 📄 开源协议

本项目采用 [MIT 许可证](LICENSE) 开源。

## 🔗 相关项目

- [LingoPod 客户端](https://github.com/linshenkx/lingopod-client) - 跨平台客户端应用
- [LingoPod 管理后台](https://github.com/linshenkx/lingopod-manager) - 任务和系统管理
- [LingoPod 官网](https://github.com/linshenkx/lingopod-web) - 官网展示
- [edge-tts-openai-cf-worker](https://github.com/linshenkx/edge-tts-openai-cf-worker) - 基于 Cloudflare Workers 的免费 OpenAI TTS 服务
