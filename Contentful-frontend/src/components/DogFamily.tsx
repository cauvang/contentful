import { ISuccessStory } from "@/interface/ISuccessStory";
import { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


interface Props{
    data:ISuccessStory;
}
export const DogFamily:FC<Props>=({data})=>{
return( <Card sx={{ maxWidth: 145 ,p:2,border:1,borderRadius: '15px',}}>
    <CardMedia
      sx={{ height: 140 ,width:140}}
      image={`https:${data.familyPicture}`}
      title="dog and its owner family"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {data.dogName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Owner: {data.onwerName}
      </Typography>
    </CardContent>
   
  </Card>
    
)
}