/**
 * Created by RWang on 2016/8/2.
 */
{/*Mixins里也可以编写组件生命周期的方法，需要注意的是：Mixins里的方法并不会覆盖组件的生命周期方法，会在先于组件生命周期方法执行。*/}

var Mixin = {
    componentWillMount:function(){
        console.log('Mixin will Mount');
    }
};

var Component = React.createClass({
    mixins:[Mixin],
    componentWillMount:function(){
        console.log('Component will Mount');
    },
    render:function(){
        return(<div>Component</div>);
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);

{/* 执行的结果是
    Mixin will Mount
    Component will Mount
    */}