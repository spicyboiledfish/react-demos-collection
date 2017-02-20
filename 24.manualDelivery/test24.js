/**
 * Created by RWang on 2016/8/3.
 */
var FancyCheckbox = React.createClass({
    render: function() {
        var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
        return (
            <div className={fancyClass} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <FancyCheckbox checked={true} onClick={()=>{console.log(11)}}>
        Hello world!
    </FancyCheckbox>,
    document.getElementById('example')
);