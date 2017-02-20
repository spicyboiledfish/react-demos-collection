/**
 * Created by RWang on 2016/7/28.
 */
var MyComponent = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

});

var BigComponent = React.createClass({
   render:function(){
       return (
           <div>
               <p>
                   <span>1</span>
                   <span>2</span>
                   <MyComponent />
               </p>
               <em>
                   <span>3</span>
                   <span>4</span>
               </em>
           </div>
       );

   }
});


ReactDOM.render(
    <BigComponent />,
    document.getElementById('example')
);