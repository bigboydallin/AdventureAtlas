import React, { Component }  from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

 const CampGround = ({campground}) => {
    return (
        <Card variant='outlined'>
          <Typography variant='h5' component="div" color="text.primary" gutterBottom>
            {campground.name}
          </Typography>
          <Typography variant="body5">
            {campground.stateprov} {campground.lat} {campground.long}
          </Typography>
          <Grid container spacing={2}>
            {campground.amenities.map((amenitie, index) => (
              <Grid item>
                <Typography>
                  {amenitie}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2}>
            {campground.siteTypes.map((siteType, index) => (
              <Grid item>
                <Typography>
                  {siteType}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid columns={12} container columnSpacing={2}>
            <Grid item xs={6}>
              <Typography>
                Water
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {campground.water ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Sewer
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {campground.sewer ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Pets
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {campground.pets ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Pullthrough
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {campground.pullthrough ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Waterfront
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {campground.waterfront ? "Yes" : "No"}
              </Typography>
            </Grid>
          </Grid>
        </Card>
    );
  }

  export default CampGround