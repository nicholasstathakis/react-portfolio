import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import { skillToChip } from '../../enum/Skills';

const PictureCard = (
    { title, blurb, fullDescription, image, moreInfoLink, skills }
) => {
    return (
        <div className='individual-item'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="company logo"
                        draggable={false}
                    />
                    <CardContent>
                        <Stack
                            direction={{ xs: 'row', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 2 }}
                            // direction="row" 
                            // spacing={1} 
                            alignItems="center"
                            style={{ width: '100%', marginBottom: '7px' }}>
                            {skills.map((skill, idx) => {
                                return skillToChip(skill, idx)
                            })}
                        </Stack>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blurb}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={moreInfoLink} target={"_blank"}>
                        Website
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PictureCard;