/**
 * Created by RWang on 2016/8/2.
 */

var Amixin = {
    componentWillMount:function(){
        console.log('Amixin will Mount');
    }
};

var Bmixin = {
    componentWillMount:function(){
        console.log('Bmixin will Mount');
    }
};

var Component = React.createClass({
    mixins:[Bmixin,Amixin],
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

{/*
   可以使用多个mixin，注意：数组引入的顺序决定了mixin里面生命周期方法执行的顺序
   执行结果是：
   Bmixin will Mount
   Amixin will Mount
   Component will Mount
*/}