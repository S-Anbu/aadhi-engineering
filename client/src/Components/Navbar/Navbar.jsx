import React from "react";
import AADHI3 from "../../assets/AADHI3.png"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    SparklesIcon,
    BoltIcon,
    WrenchIcon
} from "@heroicons/react/24/solid";
import ConsultationButton from "./ConsultationButton";

const navListMenuItems = [
    {
        title: "Welding",
        description: "Find the perfect solution for your needs.",
        icon: SparklesIcon,
        href: '#Welding'

    },
    {
        title: "Plumbing",
        description: "Meet and learn about our dedication",
        icon: WrenchIcon,
        href: '#Plumbing'
    },
    {
        title: "Electrical",
        description: "Find the perfect solution for your needs.",
        icon: BoltIcon,
        href: '#Electrical'
    }

];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description, href }, key) => (
            <a href={href} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg  !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-md font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-900  focus:text-yellow-800"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            OUR SERVICES
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList({ setOpenNav }) {
    return (
        <List className=" mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-semibold"
            >
                <Link to="/" >
                <ListItem className="flex items-center gap-2 py-2 pr-4  focus:text-yellow-800 " onClick={() => setOpenNav(false)} >HOME</ListItem>
                </Link>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="font-semibold"
            >
                <a href="#About">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 focus:text-yellow-800 active:text-yellow-800 " onClick={() => setOpenNav(false)}>
                        ABOUT
                    </ListItem>
                </a>
            </Typography>
            <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="font-semibold"
            >
                <a href="#works">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 focus:text-yellow-800 uppercase" onClick={() => setOpenNav(false)}>
                        works
                    </ListItem>
                </a>
            </Typography>
            <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="font-semibold"
            >
                <a href="#Contacts">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 focus:text-yellow-800 uppercase" onClick={() => setOpenNav(false)}>
                        Contact
                    </ListItem>
                </a>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-semibold"
            >
                <a href="#price">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 focus:text-yellow-800 uppercase" onClick={() => setOpenNav(false)}>
                        Price details
                    </ListItem>
                </a>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-semibold"
            >
                <a href="#Payment">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 focus:text-yellow-800 uppercase" onClick={() => setOpenNav(false)}>
                        Payment
                    </ListItem>
                </a>
            </Typography>

        </List>
    );
}

export function NavbarIndex() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Login"); // Redirects to /login
      };
    return (
        <Navbar className="fixed top-0 z-50  mx-auto max-w-full px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
            <Link to="/" > 
                <img src={AADHI3} className="w-12 h-12 rounded-full" alt="AADHI Engineering Works" />
            </Link>
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2 xl:text-2xl uppercase font-bold"
                >
                    <Link to="/" >
                    AADHI Engineering Works
                    </Link>
                </Typography>
                <div className="hidden lg:block">
                    <NavList setOpenNav={setOpenNav} />
                </div>
                <button onClick={handleClick} className="bg-deep-orange-300 rounded text-sm  hidden md:block md:px-3 py-1 ">@ login</button>
                <div className="hidden gap-2 lg:flex">
                    <button>
                        <ConsultationButton />
                    </button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList setOpenNav={setOpenNav} />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <button>
                        <ConsultationButton />
                    </button>
                </div>
            </Collapse>
        </Navbar>
    );
}