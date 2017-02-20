/**
 * Created by RWang on 2016/7/28.
 */
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
                {
                    this.props.children.map(function (child) {
                        return child;
                    })}
            </div>
        )
        {/*当子节点只有一个的时候直接通过this.props.children获取子节点。当子节点的个数大于1，this.props.children是一个数组。此时代码的浏览器显示是12*/}
    }
});

ReactDOM.render(
    <HelloWorld title="this is title">
        <span>1</span>
        <span>2</span>
    </HelloWorld>,
    document.getElementById('example')
);