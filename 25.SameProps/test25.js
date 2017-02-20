/**
 * Created by RWang on 2016/8/3.
 */
var FancyCheckbox = React.createClass({
    render: function() {
        var {checked, title,...other } = this.props;
        console.log(checked);

        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
        console.log(fancyClass)
        var fancyTitle = checked ? 'X ' + title : 'O ' + title;
        return (
            <label>
                <input {...other}
                    checked={checked}
                    className={fancyClass}
                    type="checkbox"
                    id={other.mmdd}
                    />
                {fancyTitle}
            </label>
        );
    }
});

ReactDOM.render(
    <FancyCheckbox checked={true} mmdd={2222} />,
    document.getElementById('example')
);


