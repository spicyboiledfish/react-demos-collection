/**
 * Created by RWang on 2016/7/29.
 */

var Mixin = {
    log:function(){
        console.log('Mixin log');
    }
};

var Component = React.createClass({
    mixins: [Mixin],
    componentWillMount: function () {
        this.log();
    },
    render: function () {
        return (
            <div>Component</div>
        )
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);

{/* 组件调用Mixins方法：
    将Minxin封装成一个log方法，然后在使用componentWillMount的时候调用这个log()方法
    渲染出来的控制台结果是：Mixin log */}