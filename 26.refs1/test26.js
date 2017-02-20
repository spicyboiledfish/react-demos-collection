/**
 * Created by RWang on 2016/8/4.
 */

var Component = React.createClass({
   handleChange:function(){
     ReactDOM.findDOMNode(this.refs.hahha).focus();
   },
    render:function(){
        return(
            <div>
                <input type="text" ref="hahha"/>
                <input type="button" value="Click it to focus btn" onClick={this.handleChange}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);