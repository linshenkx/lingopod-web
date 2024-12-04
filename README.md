# LingoPod (译播客) 🎙️

> 开源的智能双语播客生成工具 - 将网页内容转化为沉浸式英语学习体验

## 📖 简介

LingoPod 是一个开源项目，旨在将网页内容转换为双语播客。它自动生成中英文音频和字幕，为内容创作者和语言学习者提供一站式解决方案。

## ✨ 核心特性

- 🤖 智能内容提取与总结
- 💬 AI 驱动的自然对话生成
- 🗣️ 高品质中英文 TTS
- 📝 自动生成双语字幕
- 🔄 中英文音频切换
- 🎵 智能音频处理
- 🚀 RESTful API 支持
- 📱 跨平台支持

<div align="center">
  <img src="https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/home-dark.png" width="45%" alt="主页深色模式"/>
  <img src="https://ghproxy.always200.com/https://raw.githubusercontent.com/linshenkx/lingopod-client/main/images/player-dark.png" width="45%" alt="播放器深色模式"/>
</div>

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

### 在线演示

- Web客户端：[client.lingopod.top](https://client.lingopod.top) : 建议使用用户名test，密码test
- 管理后台：[manager.lingopod.top](https://manager.lingopod.top)
- API 服务：[server.lingopod.top](https://server.lingopod.top)

> **注意**: [https://server.lingopod.top](https://server.lingopod.top) 仅提供有限试用，只支持微信公众号文章链接转换为播客，不保证运行稳定性，随时可能删除数据/停止服务，请勿用于重要场景，建议自行部署。

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
