import React from 'react';
import { BsFillHeartFill, BsFillGearFill, BsFillPrinterFill, BsMailbox2 } from "react-icons/bs";

const Footer = () => {

    const link = [{id:1,
                icon:<BsFillHeartFill/>,
                linkto:""},
                {id:2,
                icon:<BsFillGearFill/>,
                linkto:""},
                {id:3,
                icon:<BsFillPrinterFill/>,
                linkto:""},
                {id:4,
                icon:<BsMailbox2/>,
                linkto:""}
            ]
    return (
        <div>
            <ul className="drop-shadow-lg ...flex-col fixed top-1/3 left-6">
                {link.map(item=>{return(
                    <li key={item.id} className="text-4xl text-lime-300 mb-8 hover:scale-125 duration-100">{item.icon}</li>
                )})}
            </ul>
        </div>
    );
};

export default Footer;