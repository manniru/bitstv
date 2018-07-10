import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import $ from 'jquery'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div id="SceneMain">

        <div id="MainBG">
                <div id="MainDate"></div>
                <div id="MainDateLine"></div>
        
                <div id='Title'><strong>Title</strong></div>
                <br />
        
                <div id='Content-0'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/welcome.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-1'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/main.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-2'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/tv.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-3'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/vod.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-4'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/amenities.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-5'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/messages.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-6'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/interactives.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-7'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/weather.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-8'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/order.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-9'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/housekeeping.html" frameborder="0" allowfullscreen></iframe></div>
                <div id='Content-10'><iframe width="100%" height="100%" src="https://mannir.net/bitstv/pages/weather.html" frameborder="0" allowfullscreen></iframe></div>
        
                <div id='MainListTitles'>
                    <div id='MainList0'>
                        <div id='MainListTitle0'></div>
                        <div id='MainListLine'></div>
                    </div>
                    <div id='MainList1'>
                        <div id='MainListTitle1'></div>
                        <div id='MainListLine'></div>
                    </div>
                    <div id='MainList2'>
                        <div id='MainListTitle2'></div>
                        <div id='MainListLine'></div>
                    </div>
                    <div id='MainList3'>
                        <div id='MainListTitle3'></div>
                        <div id='MainListLine'></div>
                    </div>
                    <div id='MainList4'>
                        <div id='MainListTitle4'></div>
                        <div id='MainListLine'></div>
                    </div>
                    <div id='MainList5'>
                        <div id='MainListTitle5'></div>
                        <div id='MainListLine'></div>
                    </div>
                    <div id='MainList6'>
                        <div id='MainListTitle6'></div>
                        <div id='MainListLine'></div>
                    </div>

                    <div id='MainList7'><div id='MainListTitle7'></div><div id='MainListLine'></div></div>
                    <div id='MainList8'><div id='MainListTitle8'></div><div id='MainListLine'></div></div>
                    <div id='MainList9'><div id='MainListTitle9'></div><div id='MainListLine'></div></div>
                    <div id='MainList10'><div id='MainListTitle10'></div><div id='MainListLine'></div></div>
                        
                </div>
            
            
            </div>
        
            <div id="MainTitleBarBG"></div>
            <div id="MainTitleBar"></div>
            <div id="MainCategoryBG"></div>
            <div id="MainCategoryList">
                <div id="MainCategoryList0">
                    <div id="MainCategoryTitle0"></div>
                </div>
                <div id="MainCategoryList1">
                    <div id="MainCategoryTitle1"></div>
                </div>
                <div id="MainCategoryList2">
                    <div id="MainCategoryTitle2"></div>
                </div>
        
                <div id="MainCategoryList3">
                    <div id="MainCategoryTitle3"></div>
                </div>
        
                <div id="MainCategoryList4">
                    <div id="MainCategoryTitle4"></div>
                </div>
        
                <div id="MainCategoryList5">
                    <div id="MainCategoryTitle5"></div>
                </div>
        
                <div id="MainCategoryList6">
                    <div id="MainCategoryTitle6"></div>
                </div>
        
                <div id="MainCategoryList7">
                    <div id="MainCategoryTitle7"></div>
                </div>

                <div id="MainCategoryList8"><div id="MainCategoryTitle8"></div></div>       
                <div id="MainCategoryList9"><div id="MainCategoryTitle9"></div></div>       
                <div id="MainCategoryList10"><div id="MainCategoryTitle10"></div></div>       
        
            </div>
        
            <div id="MainPageNumber"></div>
            <div id="Mainkeyhelp"></div>
        
            <div id='MainScroll'></div>




</div>
    );
  }
}