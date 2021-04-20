import {
  Card,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography
} from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
});

const BootcampCard = ({ bootcamp }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar />}
        title={<Typography variant='h6'>{bootcamp.name}</Typography>}
      />
      <CardContent>
        <Typography variant='caption'>{bootcamp.description}</Typography>
        <Typography variant='h6'>{formatter.format(bootcamp.price)}</Typography>

        <Rating
          name={bootcamp.name}
          value={bootcamp.rating}
          precision={0.5}
          size='small'
          readOnly
        />
      </CardContent>
      <CardActions>
        <Button variant='contained' size='small' color='primary'>
          Book Now
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BootcampCard;
