import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';


function TitlebarGridList() {

  return (
    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  }}>
      <GridList cellHeight={180} style={{
    width: 500,
    height: 450,
  }}>
        

          <GridListTile key={'tile.img'}>
            <img src={'https://images.pexels.com/photos/784251/pexels-photo-784251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400'} />
            
            
          </GridListTile>


          <GridListTile key={'tile.img'}>
            <img src={'https://images.pexels.com/photos/784251/pexels-photo-784251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400'} />
            
          </GridListTile>

          <GridListTile key={'tile.img'}>
            <img src={'https://images.pexels.com/photos/784251/pexels-photo-784251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400'} />
            
          </GridListTile>

          <GridListTile key={'tile.img'}>
            <img src={'https://images.pexels.com/photos/784251/pexels-photo-784251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400'} />
            
          </GridListTile>

      </GridList>
    </div>
  );
}


export default TitlebarGridList;
