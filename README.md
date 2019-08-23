## 简介

这是一个企业级脚手架的精简教学 demo，用最精简的代码，实现了最核心的功能

一个 cli 的核心功能包括

- cli 本身提供全局命令，起到安装、调用、调度的总控作用
- 模板仓库，快速初始化一个工程，类似 vue-cli create-react-app 提供的模板功能
- 构建插件，把 webpack 的功能单独拎出来并封装，工程中无需再关心 webpack。当然，如果有特殊的 webpack 需求，也支持个性化的配置

## 使用

```bash
# 安装 cli
npm i cli-tpl -g

# 安装模板仓库
dcli install gen-tpl # 注：模板仓库的核心是 yeoman-generator，cli 约定模板包的名称都为特定前缀，比如案例中的 gen-

# 初始化工程
dcli init # 会弹出对话框，然你选择已经安装了的模板仓库，如 gen-tpl

# 构建
dcli build # 在工程目录下执行，调用构建插件，对工程进行 webpack 打包
```

## 相关文章

https://github.com/imaoda/js-front-end-practice
