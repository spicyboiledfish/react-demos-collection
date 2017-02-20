1. 此时在ReactDOM.render中最后一步渲染，定义了一个对象var my = ......
在浏览器的控制台来直接调用my,并更改titleMessage，会实时更新到浏览器页面上
my.setState({titleMessage:'哇哈哈哈哈哈'})。
点击回撤后，页面的titleMessage会实时发生相应改变

2. 这时候如果在控制台上写：
my.state.isVisible = false
但是在页面上显示却是仍然显示，并没有消失。
在React官网的组件API中讲到：绝对不要直接改变 this.state，因为在之后调用 setState() 可能会替换掉你做的更改。
把 this.state 当做不可变的。一般情况下，如果使用了state来更改的话，需要my.forceUpdate()来更新整个组件。