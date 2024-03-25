# DUBBO-JS DEMOS

通过实践使用 Dubbo-js 进行开发，以暴露当前存在的问题。
## 问题记录

1. 如何使用 `IDL` ?
> 全局安装 `protoc` 和 `@bufbuild/protoc-gen-es`。
> 
> 这里可以有一个快捷的命令行工具。

2. 如何在原生 HTML 中引入 Dubbo-js ?
> 目前没有支持 CDN 引入，需要创建一个 Vite/Webpack 等服务器解析依赖路径后才能正确引入。

3. 如何解决原生 Node 服务器中引入 DubboNodeAdapter 后的跨域问题 ?
> 根据报错的提示信息，要允许自定义的请求头 `Tri-Service-Version`, 但是实际情况并不只是这一个请求头引起的，还有  `Tri-Protocol-Version` 和 `Tri-Service-Group`——这意味着这里的报错信息是不准确的。