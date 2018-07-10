import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const c1 = () => <Grid key={channels[0].id} item><Card style={st1} raised><CardMedia><img src={channels[0].image} style={im1} /></CardMedia></Card></Grid>

const channels = [
  { id: 1, name: 'CNN', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png' },
  { id: 2, name: 'BBC', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/800px-BBC_News.svg.png' },
  { id: 3, name: 'Aljazeera', image: 'https://ulango.tv/uploads/channels/3783622/logo_al%20jazeera%20arabic%20news.png' },
  { id: 4, name: 'National Geograhy', image: 'https://www.seeklogo.net/wp-content/uploads/2016/05/national-geographic-channel-logo-vector-download.jpg' },
  { id: 5, name: 'Discovery Channels', image: 'https://vignette.wikia.nocookie.net/logopedia/images/3/34/Discovery_Channel_2000.png/revision/latest?cb=20100728112637' },
  { id: 6, name: 'Astro', image: 'https://vectorise.net/logo/wp-content/uploads/2011/02/Astro-Arena.jpg' },
  { id: 7, name: 'Astro Arena', image: 'https://www.satlogo.com/hires/aa/astro_arena_my.png' },
  { id: 8, name: 'Atro Warna', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Logo_of_TV1_%28Malaysia%29.svg/656px-Logo_of_TV1_%28Malaysia%29.svg.png' },
  { id: 9, name: 'CNN', image: 'https://www.astro.com.my/Portals/_default/Skins/ACM2015/images/socialpluginshare/astro_share.png' },
  { id: 10, name: 'NBC', image: 'https://vignette.wikia.nocookie.net/channel101/images/2/22/300px-NBC_logo.svg.png/revision/latest?cb=20090926144150' },
];

const st1 = { margin: 10, width: 220, height: 250 }
const im1 = {
  height: 250,
  width: 220,
};

export default class TVChannels extends Component {
  render() {
    return (
      <div>


        <Grid container style={{ flexGrow: 1, width: 1080 }} spacing={4}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={Number(4)}>


              {channels.map(ch => (
                <Grid key={ch.id} item>
                  <Card style={st1}>

                    <CardMedia>
                      <img src={ch.image} style={im1} />
                    </CardMedia>

                  </Card>
                </Grid>
              ))}

            </Grid>
          </Grid>
        </Grid>

      </div>
    );
  }
}
