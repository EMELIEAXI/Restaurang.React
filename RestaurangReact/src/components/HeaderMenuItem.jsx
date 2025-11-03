import React from "react";

const HeaderMenuItem =({ text, href }) => {
    return (
        <li>
            <a className="headeranchor" href={href}>
                {text}
            </a>
        </li>
    );
};

export default HeaderMenuItem;