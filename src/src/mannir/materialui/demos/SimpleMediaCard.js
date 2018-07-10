import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card style={{maxWidth: 345}}>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image="https://hotelinternazionaleischia.com/hotel-internazionale-ischia/wp-content/uploads/hotel-internazionale-ischia-the-reception-2-768x515.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Dear Mr. James Wong
          </Typography>
          <Typography component="p">
            Welcome to Bits Interactive Hospitality TV. Enjoy Our IPTV experience.We are dedicated to ensuring that you enjoy your stay with us.
          </Typography>

          <ul className="fa-ul">
        <li><i aria-hidden="true" className="fa-li fa fa-map-marker" /><a href="https://goo.gl/maps/bMKU1Zd5rMN2" target="_blank">Kuala Lumpur, Malaysia</a></li>
        <li><i aria-hidden="true" className="fa-li fa fa-comments-o" />English, Dutch, Spanish</li>
        <li><i aria-hidden="true" className="fa-li fa fa-code" />Smart TV Online connected to server</li>
      </ul>
      
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">About</Button>
          <Button size="small" color="primary">More</Button>
          <Button size="small" color="primary">More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SimpleMediaCard;
