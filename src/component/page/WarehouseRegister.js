import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CCC from './CCC';
import WR from '../modal/warehouseRegist';
import WD from "../modal/warehouseDetail";

export default function WarehouseRegister() {
    // 모듈화로 인해 기능 삭제 예정
    const [subMenuId, setSubMenuId] = useState(null);
    const [warehouses, setWarehouses] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const axiosJWT = axios.create();

    const getWarehouses = async () => {
        const response = await axiosJWT.get('http://localhost:5000/erp/warehouse-Register', {
        });
        setWarehouses(response.data);
    }

    const handleOpenModal = (e) => {
    if (e.type === "click" || e.keyCode === 113) { // F2 key
        setModalOpen(true);
    }};
          
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const getWarehouseDetails = async (id) => {
        const response = await axiosJWT.get(`http://localhost:5000/erp/warehouse-Register/${id}`);
        return response.data;
      };
      
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setSubMenuId(urlParams.get('id'));
        getWarehouses();
        document.addEventListener('keydown', handleOpenModal);
    }, []);

    return (
        <>
            <CCC subMenuId={subMenuId} />
            <div className='contents' style={{ marginTop: '30px', top: '30px', bottom: '41px' }}>
                    <table className='table table-bordered table-hober table-list' style={{ width: '690px' }}>
                        <colgroup>
                            <col className='colgroup-col' style={{ width: '25px' }} />
                            <col className='colgroup-col' style={{ width: '89px' }} />
                            <col className='colgroup-col' style={{ width: '198px' }} />
                            <col className='colgroup-col' style={{ width: '100px' }} />
                            <col className='colgroup-col' style={{ width: '90px' }} />
                            <col className='colgroup-col' style={{ width: '128px' }} />
                            <col className='colgroup-col' style={{ width: '60px' }} />
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
                                    <a href="#">창고코드<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">창고명<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">구분<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">생산공정명<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <a href="#">외주거래처명<span className="fa fa-caret-down" /></a>
                                </th>
                                <th className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                    <span>사용</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {warehouses.map((warehouse) => (
                                <tr key={warehouse.id}>
                                    <td className="text-center">
                                        <div className="form-checkbox-numbered">
                                            <input type="checkbox" />
                                            <div className="checkbox-numbered">{warehouse.id}</div>
                                        </div>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <a>{warehouse.warehouse_cd}</a>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <a onClick={() => setSelectedWarehouse(warehouse)}>{warehouse.warehouse_nm}</a>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{warehouse.itemClassification}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{warehouse.process_nm}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{warehouse.outsourcingCustomer_nm}</span>
                                    </td>
                                    <td className="font-dotum font-12px text-center valign-middle resize-enable resize-width">
                                        <span>{warehouse.useStatus}</span>
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
                                    {modalOpen && (<WR isOpen={modalOpen} onClose={handleCloseModal} />)}
                                    <button className="btn-arrow btn btn-arrow-up btn-primary" />
                                </div>
                            </div>
                            <div className="control-set">
                                <div className="control">
                                    <button className="btn btn-default">계층그룹</button>
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
                        </div>
                    </div>
                </div>
        </>
    );
}