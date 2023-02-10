import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CCC from './CCC';
import CR from '../modal/clientRegist';

export default function ClientRegister() {
    // 모듈화로 인해 기능 삭제 예정
    const [showModal, setShowModal] = useState(false);
    const [subMenuId, setSubMenuId] = useState(null);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setSubMenuId(urlParams.get('id'));
        getClients();
    }, []);
    
    const [clients, setClients] = useState([]);

    const axiosJWT = axios.create();

    const getClients = async () => {
        const response = await axiosJWT.get('http://localhost:5000/erp/client-Register', {
        });
        setClients(response.data);
    }

    const handleButtonClick = () => {
        setShowModal(true);
      };
    // useEffect(() => {
    //     getClients();
    // }, []);

    return (
        <>
            <CCC subMenuId={subMenuId} />
            <div className='contents' style={{ marginTop: '30px', top: '30px', bottom: '41px' }}>
                    <table className='table table-bordered table-hober table-list' style={{ width: '1124px' }}>
                        <colgroup>
                            <col className='colgroup-col' style={{ width: '25px' }} />
                            <col className='colgroup-col' style={{ width: '87px' }} />
                            <col className='colgroup-col' style={{ width: '300px' }} />
                            <col className='colgroup-col' style={{ width: '110px' }} />
                            <col className='colgroup-col' style={{ width: '87px' }} />
                            <col className='colgroup-col' style={{ width: '94px' }} />
                            <col className='colgroup-col' style={{ width: '60px' }} />
                            <col className='colgroup-col' style={{ width: '61px' }} />
                            <col className='colgroup-col' style={{ width: 'auto' }} />
                        </colgroup>
                        <thead>
                            <tr style={{ height: '27px' }}>
                                <th className='text-center'>
                                    <div className='form-checkbox-numbered'>
                                        <input type='checkbox' />
                                        <div className='checkbox-numbered' />
                                    </div>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">거래처코드<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">거래처명<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">대표자명<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">전화번호<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">핸드폰번호<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>사용구분</span>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>이체정보</span>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width" style={{width:"auto"}}>
                                    <a href="#">주소<span className="fa fa-caret-down" /></a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td className="text-center">
                                        <div className="form-checkbox-numbered">
                                            <input type="checkbox" />
                                            <div className="checkbox-numbered">{client.id}</div>
                                        </div>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <a>{client.client_cd}</a>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <a>{client.client_nm}</a>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{client.representative}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{client.company_nb}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{client.phone}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{client.useStatus}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <a>{client.transferInfo}</a>
                                    </td>
                                    <td className="font-dotum font-12px text-left valign-middle resize-enable resize-width">
                                        <span>{client.Address}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="footer-btn" style={{ display: 'block' }}>
                    <div className="wrapper-toolbar toolbar-collapse  ">
                        <div className="pull-left">
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-primary" onClick={handleButtonClick}>신규(F2)</button>
                                    {showModal && ( <CR/> )}
                                    <button className="btn-arrow btn btn-arrow-up btn-primary" />
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">관계설정</button>
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">계층그룹</button>
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">변경</button>
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-arrow btn-arrow-up btn-default">사용중단/재사용</button>
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">Excel</button>
                                    <button className="btn-arrow btn btn-arrow-up btn-default" />
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">웹자료올리기</button>
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">SMS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}