/**
 * Created by RWang on 2016/7/28.
 */
var Hello = React.createClass({
    render: function () {
        return (
            <div>no</div>
        )
    }
});

ReactDOM.render(
    <Hello>
        <p>content</p>
    </Hello>,
    document.getElementById('example')
);


{/*渲染出来的DOM结构是<div>no</div,如果想让浏览器渲染出来的结果是content，
那么在Hello组件中的return下面的语句应该写成return(<div>{this.props.children}</div>)*/}