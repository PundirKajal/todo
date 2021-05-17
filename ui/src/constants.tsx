import { FaTasks } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

export const NavbarOptions = [
    {
        id: 1,
        title: 'Tasks',
        icon: <FaTasks />,
        path: '/Tasks'
    },{
        id: 2,
        title: 'Create new',
        icon: <CgNotes />,
        path: '/Task'
    }
]

export const ServerURL = process.env.Host || 'http://api:8080';