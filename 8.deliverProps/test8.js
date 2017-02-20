/**
 * Created by RWang on 2016/7/27.
 */
var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>Hello, {this.props.name1}, {this.props.name2}</div>
        );
    }
});

var hahha = {
    name1: 'Jack',
    name2: 'Tom'
};

ReactDOM.render(
    <HelloWorld {...hahha}/>,
    document.getElementById('example')
);

{/*
...props相当于name1="Jack" name2="Tom"，如下面代码所示：
ReactDOM.render(
    <HelloWorld {...props}/>,
    document.getElementById('example')
);
这里的props是自定义的变量名，可以自己取名的
*/}