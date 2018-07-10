import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery'

// $("#myDiv").keypress(function (e) {
//   console.log('myDuv='+e.which)
//      if (e.which == 13) {
//          alert('You pressed enter!');
//      } 
//  });

const c1 = {width: 300, margin: 5}
const p1 = {padding: 5, textAlign: 'center', color: 'blue'}

// const styles = {
//   root: {
//     '&:focus': {
//       color: 'green',
//       backgroundColor: 'green'
//     },
//   },
//   disabled: {},
// };


export default class TVPage extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      name: 'BitsTV',
      shadow: 1,
      raised1: false,
      raised2: false,
    };
  }

  componentDidMount1 = () => {
    // this.nameInput.focus();    
    // var m1 = document.getElementById("mytext").value();
    // $('#m5').focus();
    // $('#a1').addClass('active')
    // $('#a1').hide()
    // $('#a1').addClass('raised');
    this.div.focus();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
}

  onMouseOver = (e, id) => {
    this.setState({ raised1: true })
  };
  onMouseOut = (e, id) => {
    console.log('onMouseOut')
    this.setState({ raised1: false })
  };

  onMouseOver1 = () => this.setState({ raised1: true });
  onMouseOut1 = () => this.setState({ raised1: false });

  onMouseOver2 = () => this.setState({ raised2: true });
  onMouseOut2 = () => this.setState({ raised2: false });

  __handleKeyDown = () => {
    console.log('__handleKeyDown')
  }

  onKeyPressed(e) {
    // if (e === 'ArrowRight') {
    // this.setState({ raised1: false })
    this.setState({ raised2: true })
    // }
    // if (e === 'ArrowLeft') {
    // this.setState({ raised1: true })
    // this.setState({ raised2: false })
    // }
  console.log('onKeyPressed='+e.key);
}
  render() {
    return (
      <div id="myDiv"
      // onKeyDown={this.__handleKeyDown} ref={(c) => {this.div = c;}}
      // onKeyDown={this.onKeyPressed}
      // tabIndex="0"
      onKeyDown={(e) => this.onKeyPressed(e)}
      >


      <input defaultValue="Won't focus" />
      <input  ref={(input) => { this.nameInput = input; }}  defaultValue="will focus" />

      <Grid container spacing={8}>
      <Grid item xs={3}>
         
         
      <Card
        style={c1} id="a1"
        onMouseOver={ (e) => this.onMouseOver1(e, '1') }
        onMouseOut={ (e) => this.onMouseOut1(e, '1') }
        raised={this.state.raised1}

      classes={{
    root: 'classes-state-root',
  raised: true, }
  }


  
      >
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/800px-BBC_News.svg.png"
          title="Contemplative Reptile"
        />
        <CardContent textAlign='center'>
          <Typography gutterBottom variant="headline" component="h2">BBC News</Typography>
          
        </CardContent>
        
      </Card>


        </Grid>
        <Grid item xs={3}>
          <Card style={c1}
      onMouseOver={ (e) => this.onMouseOver2(e, '2') }
      onMouseOut={ (e) => this.onMouseOut2(e, '2') }
      raised={this.state.raised2}
      ref={(input) => { this.nameInput1 = input; }}
      >
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            CNN
          </Typography>
          
        </CardContent>
        
      </Card>
        </Grid>
        

        
      </Grid>


      



      

    </div>
    );
  }
}