/**
 * Created by RWang on 2016/7/27.
 */
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div data-alt={this.props.alt}>{this.props.content}</div>
        )
    }
});

ReactDOM.render(
    <HelloWorld alt="this is title" content="this is content"/>,
    document.getElementById('example')
);