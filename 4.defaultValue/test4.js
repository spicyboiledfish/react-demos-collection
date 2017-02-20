/**
 * Created by RWang on 2016/7/22.
 */
var DefaultValue = React.createClass({
    render:function(){
        return(
            <div>
                <input type="radio" name="opt" defaultChecked /> Option1
                <input type="radio" name="opt" /> Option2 &nbsp;
                <select multiple={true} value={['B','C']}>
                    {/*给value传递一个数组，则可以选中多个选项*/}
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Purple</option>
                </select>&nbsp;&middot;
                {/*&middot; 代表的是转义字符，在界面上显示为一个小点*/}
                <select defaultValue="C">
                    {/*给value初始化一个选项*/}
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Purple</option>
                </select>
                {'First · Second'}   {/*这个方法不行，中间的小点浏览器识别不了*/}
                <br/>
                {'First \u00b7 Second'}
                {'First ' + String.fromCharCode(183) + ' Second'}
                <br/>

               {['First ', <span>&middot;</span>, ' Second']}
            </div>
        );
    }
});

ReactDOM.render(
    <DefaultValue />,
    document.getElementById('example')
);