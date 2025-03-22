import {NavLink} from "@mantine/core";
import {IconListCheck, IconPencil} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";

export const AppNavbar = () => {
    const navigate = useNavigate();


    return (
        <div>
            <NavLink onClick={() => navigate('/todo')} label="Lista TODO"
                     leftSection={<IconListCheck size={16} stroke={1.5}/>}/>
            <NavLink onClick={() => navigate('/todo/new')} label="Dodaj TODO"
                     leftSection={<IconPencil size={16} stroke={1.5}/>}/>

            {/*<Link to={"/todo"}> Lista TODO</Link> | <Link to={"/todo/new"}>Dodaj</Link>*/}

        </div>
    )
}