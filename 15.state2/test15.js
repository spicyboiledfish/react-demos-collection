/**
 * Created by RWang on 2016/7/28.
 */
var ColorButton = React.createClass({
    getInitialState: function () {
        return {name: 'button'};
    },
    handleClick: function (event) {
        console.log(this.state);
        console.log(event.target);
    },
    render: function () {
        return (
            <p onClick={this.handleClick}><span>click</span></p>
        )
    }

});

ReactDOM.render(
    <ColorButton />,
    document.getElementById('example')
);