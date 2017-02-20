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
    <HelloWorld title="this is title" content="this is content">
        <span>1</span>
        <span>2</span>
    </HelloWorld>,
    document.getElementById('example')
);