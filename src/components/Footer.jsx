import React, { useState } from 'react';
import { BsFillHeartFill, BsFillGearFill, BsFillPrinterFill, BsMailbox2 } from "react-icons/bs";

const Footer = () => {

    const [isOver, setIsOver] = useState(false);
    const link = [{id:1,
                icon:<BsFillHeartFill/>,
                linkto:"add to favorite"},
                {id:2,
                icon:<BsFillGearFill/>,
                linkto:"settings"},
                {id:3,
                icon:<BsFillPrinterFill/>,
                linkto:"print"},
                {id:4,
                icon:<BsMailbox2/>,
                linkto:"send by email"}
            ]
    return (
        <div>
            <ul className="drop-shadow-lg ...flex-col fixed top-1/3 left-6">
                {link.map(item=>{return(
                    <span className="flex flex-row... "
                    onMouseOver={(e)=>setIsOver(e.target.value=true)}
                    onMouseOut={(e)=>setIsOver(e.target.value=false)}>
                        <li key={item.id} className="cursor-pointer text-4xl text-lime-300 mb-8 hover:scale-125 duration-100"
                        >{item.icon}</li>
                        <p className="text-m text-slate-300 ml-4"
                        value={isOver}>{isOver && item.linkto}</p>
                    </span>
                )})}
            </ul>
        </div>
    );
};

export default Footer;