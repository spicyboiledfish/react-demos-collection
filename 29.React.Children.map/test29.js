/**
 * Created by RWang on 2016/8/5.
 */

var Component = React.createClass({
   render:function(){
       return(
           <ol>
               {
                   React.Children.map(this.props.children,function(child){
                       return(
                           <li>{child}</li>
                       );
                   })
               }
           </ol>
       );
   }
});

ReactDOM.render(
    <Component>
        <span>Mother</span>
        <span>Father</span>
    </Component>,
    document.getElementById('example')
);