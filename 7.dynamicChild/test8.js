/**
 * Created by RWang on 2016/7/26.
 */
var ListItemWrapper = React.createClass({
    render: function() {
        return <li>{this.props.data}</li>;
    }
});

var MyComponent = React.createClass({

    render: function() {
        var results = this.props.results;
        return (
            <ul>
                {results.map(function(item) {
                    return <ListItemWrapper key={item.id} data={item}/>;
                })}
            </ul>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);