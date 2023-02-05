import React, { useEffect, useState } from 'react';
import FrameBody from './FrameBody';

export default function ClientRegister() {
    const [subMenuId, setSubMenuId] = useState(null);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setSubMenuId(urlParams.get('id'));
    }, []);

    return (
        <>
            <FrameBody subMenuId={subMenuId} />
        </>
    );
}