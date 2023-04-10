import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CCC from './CCC';
import IR from '../modal/itemRegist';

export default function Item() {
    // 모듈화로 인해 기능 삭제 예정
    const [subMenuId, setSubMenuId] = useState(null);
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const axiosJWT = axios.create();

    const getItems = async () => {
        const res = await axiosJWT.get('http://localhost:5000/erp/item', {
        });
        setItems(res.data);
    }

    const handleOpenModal = (e) => {
        if (e.type === "click" || e.keyCode === 113) { // F2 key
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setSubMenuId(urlParams.get('id'));
        getItems();
        document.addEventListener('keydown', handleOpenModal);
    }, []);

    return (
        <>
            <CCC subMenuId={subMenuId} />
            <div className='contents' style={{ marginTop: '30px', top: '30px', bottom: '41px' }}>
                <table className='table table-bordered table-hober table-list' style={{ width: '590px' }}>
                    <colgroup>
                        <col className='colgroup-col' style={{ width: '25px' }} />
                        <col className='colgroup-col' style={{ width: '80px' }} />
                        <col className='colgroup-col' style={{ width: '300px' }} />
                        <col className='colgroup-col' style={{ width: '80px' }} />
                        <col className='colgroup-col' style={{ width: '155px' }} />
                        <col className='colgroup-col' style={{ width: '80px' }} />
                        <col className='colgroup-col' style={{ width: '80px' }} />
                        <col className='colgroup-col' style={{ width: '80px' }} />
                        <col className='colgroup-col' style={{ width: '70px' }} />
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
                                <a href="#">품목코드<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">품목명<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">그룹명<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">규격명<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">입고단가<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">출고단가<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">품목구분<span className="fa fa-caret-down" /></a>
                            </th>
                            <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                <a href="#">이미지<span className="fa fa-caret-down" /></a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td className="text-center">
                                    <div className="form-checkbox-numbered">
                                        <input type="checkbox" />
                                        <div className="checkbox-numbered">{item.id}</div>
                                    </div>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a>{item.product_cd}</a>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a>{item.product_nm}</a>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>{item.product_g}</span>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>{item.specification}</span>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>{item.purchase_p}</span>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>{item.sales_p}</span>
                                </td>
                                <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>{item.product_c}</span>
                                </td>
                                <td className="font-dotum font-9px text-center valign-middle resize-enable resize-width">
                                    {item.image ? (
                                        <a href="#" className="thumbnail">
                                           <img src={`http://localhost:5000/${item.image}`} alt={item.label} />
                                        </a>
                                    ) : (
                                        <span></span>
                                    )}
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
                                <button className="btn btn-primary" onClick={handleOpenModal}>신규(F2)</button>
                                {modalOpen && (<IR isOpen={modalOpen} onClose={handleCloseModal} />)}
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
                                <button className="btn btn-default">재고조정</button>
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
                            </div>
                        </div>
                        <div className="control-set">
                            <div className="control">
                                <button className="btn btn-default">웹자료올리기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}