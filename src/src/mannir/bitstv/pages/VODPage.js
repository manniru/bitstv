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

const c1 = {maxWidth: 300, margin: 10}
const p1 = {padding: 5, textAlign: 'center', color: 'blue'}


export default class Card1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'BitsTV',
      shadow: 1,
      raised1: false,
      raised2: false,
    };
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

  render() {
    return (
      <div>
      <Grid container spacing={8}>
      <Grid item xs={3}>
          
          <Card style={c1}
      onMouseOver={ (e) => this.onMouseOver1(e, '1') }
      onMouseOut={ (e) => this.onMouseOut1(e, '1') }
      raised={this.state.raised1}
      
      >
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://cdn.movieweb.com/img.teasers.posters/FIvHJ0sRccQIzv_381_a/Black-Panther.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Black Panther
          </Typography>
          <Typography component="p">
            Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="Share"><ShareIcon /></IconButton>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">More</Button>


        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={c1}
      onMouseOver={ (e) => this.onMouseOver2(e, '2') }
      onMouseOut={ (e) => this.onMouseOut2(e, '2') }
      raised={this.state.raised2}
      >
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://noguiltlife.com/wp-content/uploads/2018/01/image021.jpg"
          title="Avengers"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Avengers
          </Typography>
          <Typography component="p">
            Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="Share"><ShareIcon /></IconButton>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">More</Button>


        </CardActions>
      </Card>
        </Grid>
        

        
      </Grid>


      



      

    </div>
    );
  }
}