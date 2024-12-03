# LingoPod管理后台开发文档

## 开发环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0
- Git

## 开发环境设置

1. **克隆项目**
```bash
git clone <项目地址>
cd lingopod-web
```

2. **安装依赖**
```bash
npm install
```


## 常用开发命令

```bash
# 启动开发服务器
npm run dev

# 代码类型检查
npm run type-check

# 代码格式化
npm run format

# 代码风格检查
npm run lint

# 运行单元测试
npm run test

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 发布到vercel
```bash
# 第一次使用需要安装vercel
npm install -g vercel
# 登录vercel
vercel login

# 发布项目
vercel
```

## 参考资源

- [React官方文档](https://react.dev/)
- [TypeScript文档](https://www.typescriptlang.org/docs/)
- [Material-UI文档](https://mui.com/material-ui/)
- [Vite文档](https://vitejs.dev/)
