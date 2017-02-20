/**
 * Created by RWang on 2016/7/28.
 */
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div data-title={this.props.title}>{JSON.stringify(this.props)}</div>
        );
    }
});

ReactDOM.render(
    <HelloWorld title="this is title" content="this is content"/>,
    document.getElementById('example')
);

{/*注意：这里的this.props相当于从父级传过来的所有组件的属性集合，JSON.stringify(this.props)就是把这些属性及属性值转换成JSON格式的字符串*/}