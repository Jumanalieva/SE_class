import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from './Button';  


interface InfoCardProps {
  image: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ image, title, description }) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg ">
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Photo"
      />
      <CardContent>
        <Typography className='text-center font-semibold' gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-center font-semibold'>
        <Button className="text-red-700 hover:text-red-400">READ MORE</Button>  
      </CardActions>
      
    </Card>
  );
};

export default InfoCard;
