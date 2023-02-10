import React, { useEffect, useState } from 'react';
import CCC from './CCC';

export default function WarehouseRegister() {
    const [subMenuId, setSubMenuId] = useState(null);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setSubMenuId(urlParams.get('id'));
    }, []);


    return (
        <>
            <CCC subMenuId={subMenuId} />
            <div className='contents' style={{ marginTop: '30px', top: '30px', bottom: '41px' }}>
                <h1 style={{marginTop: '50px', textAlign: 'center'}}>죄송합니다.<br/>취업 준비로 창고등록및 기타 페이지 추후 개발 예정<br/><br/>2023-02-10</h1>
            </div>
        </>
    );
}