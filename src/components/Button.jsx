import Button from '@mui/material/Button';
import { FaUsersViewfinder } from "react-icons/fa6";
import '../App.scss'
import { CiSquareChevRight } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

export default function CustomButton({ text, classNameCard, classNameNavBar, icon, rediredt }) {
    const navigate = useNavigate();
    const navig = () => {
        navigate('/changer');
    }

    const otherFn = () => {
        alert("Hello! World");
    }

    return (
        <div>
            <Button onClick={rediredt === "toChanger" ? navig : otherFn} endIcon={icon === "down" && <CiSquareChevRight /> || icon === "find" && <FaUsersViewfinder />} className={`${classNameCard} ${classNameNavBar}`} variant="text">{text}</Button>
        </div >
    )
}
