import Button from '@mui/material/Button';
import { FaUsersViewfinder } from "react-icons/fa6";
import '../App.scss'
import { CiSaveDown2 } from "react-icons/ci";

export default function CustomButton({ text, classNameCard, classNameNavBar, icon }) {
    return (
        <div>
            <Button endIcon={icon === "down" && <CiSaveDown2 /> || icon === "find" && <FaUsersViewfinder />} className={`${classNameCard} ${classNameNavBar}`} variant="text">{text}</Button>
        </div >
    )
}
