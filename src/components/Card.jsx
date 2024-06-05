import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import bgImg from '../assets/bg-img.jpg';
import CustomButton from './Button';
import '../App.scss'

export default function BgImageCard() {

    return (
        <div style={{ position: "relative" }}>
            <Card style={{ marginTop: "10px", borderRadius: "10px", height: "100%", }}>
                <CardMedia
                    component="img"
                    image={bgImg}
                    alt="bgImg"
                />
            </Card>
            <CustomButton rediredt="toChanger" icon="down" text="Goto Bg-Changer" classNameCard="gotoBtn" />
        </div>
    );
}