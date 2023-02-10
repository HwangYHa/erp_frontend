import React, { useEffect, useState } from 'react';
import CCC from './CCC';

export default function ItemRegister() {
    const [subMenuId, setSubMenuId] = useState(null);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setSubMenuId(urlParams.get('id'));
    }, []);

    return (
        <>
           <CCC subMenuId={subMenuId} />
        </>
    );
}