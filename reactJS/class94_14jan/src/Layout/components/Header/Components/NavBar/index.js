import { Button } from '../../../../../components'
import { SuitHeartFill } from 'react-bootstrap-icons';


const menu = [{ text: "Alojamiento", icon: <SuitHeartFill /> },
{ text: "Vuelos", icon: "@" },
{ text: "Paquetes", icon: "!!" },
{ text: "Imbatibles", icon: "**" },
{ text: "Escapadas", icon: "++" },
]


const NavBar = () => {
    return (
        <div>
            NavBar
            {menu.map(item => {
                return <Button className='btn-primary' variant='vertical' text={item.text} icon={item.icon} />
            })
            }
        </div>
    )
}

export { NavBar }