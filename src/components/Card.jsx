import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import bgImg from '../assets/bg-img.jpg';
import CustomButton from './Button';
import '../App.scss'

export default function ActionAreaCard() {

    return (
        <div style={{ position: "relative" }}>
            <Card style={{ margin: "10px", borderRadius: "10px", height: "100%", }}>
                <CardMedia
                    component="img"
                    image={bgImg}
                    alt="bgImg"
                />
            </Card>
            <CustomButton icon="down" text="Scroll Down" classNameCard="gotoBtn" />
        </div>
    );
}