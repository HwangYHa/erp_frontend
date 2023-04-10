import React, { useState, useEffect } from 'react';
import './modalCommon.css';
import axios from "axios";

export default function WarehouseRegister({ isOpen, onClose }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [sortation, setSortation] = useState('');
    const [productionProcess, setProductionProcess] = useState('');
    const [outsourcingAccountCode, setOutsourcingAccountCode] = useState('');
    const [vatRate, setVatRate ] = useState('');
    const [vatRateSale, setVatRateSale ] = useState('');
    const [vatRateBuy, setVatRateBuy ] = useState('');
    const [salesPriceGroup, setSalesPriceGroup] = useState('');
    const [purchasePriceGroup, setPurchasePriceGroup] = useState('');
    const [warehouseLayerGroup, setWarehouseLayerGroup] = useState('');
    const [msg, setMsg] = useState('');

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const Register = (e) => {
        e.preventDefault();
        try {
            axios.post('http://localhost:5000/erp/warehousesRegister', {
                warehouse_cd: code,
                warehouse_nm: name,
                itemClassification: sortation,
                sales_tax: vatRateSale,
                purchase_tax: vatRateBuy,
                salesPriceGroup: salesPriceGroup,
                purchasePriceGroup: purchasePriceGroup,
                warehouseLayerGroup: warehouseLayerGroup,
                process_nm: productionProcess,
                outsourcingCustomer_nm: outsourcingAccountCode,
            });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        onClose();
        alert('저장이 완료되었습니다.');
    }

    const onSave = (e) => {
        if (e.type === "click" || e.keyCode === 119) {
            Register(e);
        }
    };

    const handleReset = () => {
        setCode('');
        setName('');
        setSortation('');
        setProductionProcess('');
        setOutsourcingAccountCode('');
        setVatRateSale();
        setVatRateBuy();
        setSalesPriceGroup('');
        setPurchasePriceGroup('');
        setWarehouseLayerGroup('');
    };

    useEffect(() => {
        document.addEventListener('keydown', onSave);
        return () => document.removeEventListener('keydown', onSave);
      }, []);




    return (
        <>
          {isOpen && (
                <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front panel panel-primary panel-modal ui-draggable" style={{ height: 'auto', width: '780px', top: '-245px', left: '650px', display: 'block', zIndex: '2002' }}>
                    <div className="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix panel-heading">
                        <span className="ui-dialog-title">창고등록</span>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-new-window btn btn-primary" role="button">
                            <span className="ui-button-text" />
                        </button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-pinned active btn btn-primary" role="button">
                            <span className="ui-button-text" />
                        </button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-refresh btn btn-primary" role="button">
                            <span className="ui-button-text" />
                        </button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-maximize btn btn-primary" role="button">
                            <span className="ui-button-text" />
                        </button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-close btn btn-primary" role="button">
                            <span className="ui-button-text" />
                        </button>
                    </div>



                    <div className="dialog2 ui-dialog-content ui-widget-content panel-body" style={{ width: 'auto', minHeight: '0px', maxHeight: 'none', height: '478px' }}>
                        <div className="page page-fluid page-modal page-loadComplete" style={{ display: 'block' }}>
                            <div className="header header-fixed">
                                <div className="wrapper-title">
                                    <div className="wrapper-toolbar" style={{ maxWidth: '755px' }}>
                                        <div className="pull-left">
                                            <span className="page-name">창고등록</span>
                                            <span className="wrapper-title-notification">
                                                <span className="label label-primary title-notification-heading" />
                                                <span className="label label-primary title-notification-contents" style={{ display: 'none' }} />
                                            </span>
                                        </div>
                                        <div className="pull-right">
                                            <div className="control-set">
                                                <div className="control">

                                                    <button className="btn btn-default btn-title-option dropdown-toggle">Option</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper-header-search" style={{ maxWidth: '755px' }} />
                            </div>
                            <div className="contents  contents-fixed" style={{ marginTop: '30px', top: '30px', bottom: '37px' }}>
                                <div style={{ outline: 'none' }} />
                                <ul className="nav nav-tabs" style={{ width: '755px' }}>
                                    <li
                                        onClick={() => handleTabClick(0)}
                                        className={selectedTab === 0 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">기본</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(1)}
                                        className={selectedTab === 1 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">창고정보</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(2)}
                                        className={selectedTab === 2 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">부가정보</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" style={{ display: 'block' }}>
                                        <ul className="wrapper-form wrapper-form-state-1" style={{ maxWidth: '755px' }}>
                                            <li className="whole-row">
                                                <div className="title">창고코드
                                                    <div className="title-option">
                                                        <span className="user-help-mark" />
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <input type="text" className="form-control form-control" placeholder="창코코드" value={code} onChange={(e) => setCode(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">창고명
                                                    <div className="title-option">
                                                        <span className="user-help-mark" />
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <input type="text" className="form-control form-control" placeholder="창고명" value={name} onChange={(e) => setName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">구분
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <span className="form-radio">
                                                            <input type="radio" name="option" value='창고' onChange={(e) => setSortation(e.target.value)} />
                                                            <label className='labelpr5'>창고</label>
                                                            </span>
                                                            <span className="form-radio labelpr5">
                                                            <input type="radio" name="option" value='공장' onClick={sortation === '공장'} onChange={(e) => setSortation(e.target.value)} />
                                                            <label>공장</label>
                                                            </span>
                                                            <span className="form-radio">
                                                            <input type="radio" name="option" value='공장(외주비관리)' onClick={sortation === '공장(외주비관리)'} onChange={(e) => setSortation(e.target.value)} />
                                                                <label>공장(외주비관리)</label>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="control-set">
                                                        <div className="control">
                                                            {sortation === '공장' && (
                                                                <>
                                                            <div className="control">
                                                            <div>
                                                            <span className="label label-default label-light">생산공정</span>
                                                            </div>
                                                            <button className="btn btn-default btn-code-search popupHandler"/>
                                                            <input type="text" className="form-control" value={productionProcess} placeholder="생산공정" onChange={(e) => setProductionProcess(e.target.value)}/>
                                                            </div>
                                                            </>)}
                                                            {sortation === '공장(외주비관리)' && (
                                                            <>
                                                            <div className="control-set">
                                                            <div className="control">
                                                            <div>
                                                            <span className="label label-default label-light">생산공정</span>
                                                            </div>
                                                            <button className="btn btn-default btn-code-search popupHandler"/>
                                                            <input type="text" className="form-control" value={productionProcess} placeholder="생산공정" onChange={(e) => setProductionProcess(e.target.value)}/>
                                                            </div>
                                                            </div>
                                                            <div className="control-set">
                                                            <div className="control">
                                                            <div>
                                                            <span className="label label-default label-light">외주거래처코드</span>
                                                            </div>
                                                            <button className="btn btn-default btn-code-search popupHandler"/>
                                                            <input type="text" className="form-control" value={outsourcingAccountCode} placeholder="외주거래처코드" onChange={(e) => setOutsourcingAccountCode(e.target.value)}/>
                                                            </div>
                                                            </div>
                                                            </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">부가세율(매출)
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <span className="form-radio" >
                                                                <input type="radio" />
                                                                <label className='labelpr5'>기본설정</label>
                                                            </span>
                                                            <span className="form-radio">
                                                            <input type="radio" name="option" value="부가세율(매출)" onClick={vatRate === '부가세율(매출)'} onChange={(e) => setVatRate(e.target.value)} />
                                                                <label>직접입력</label>
                                                            </span>
                                                        </div>
                                                        {vatRate === '부가세율(매출)' && (
                                                                <>
                                                                <div className="control">
                                                                <input type="text" className="form-control form-control text-right" value={vatRateSale} placeholder="부가세율(매출)" onChange={(e) => setVatRateSale(e.target.value)}/>
                                                                </div>
                                                                <div className="control  flex-none">
                                                                <span>%</span>
                                                                </div>
                                                                </>
                                                            )}
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">부가세율(매입)
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <span className="form-radio" >
                                                                <input type="radio" />
                                                                <label className='labelpr5'>기본설정</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value="부가세율(매입)" onClick={vatRate === '부가세율(매입)'} onChange={(e) => setVatRate(e.target.value)} />
                                                                <label>직접입력</label>
                                                            </span>
                                                        </div>
                                                        {vatRate === '부가세율(매입)' && (
                                                                <>
                                                                <div className="control">
                                                                <input type="text" className="form-control form-control text-right" value={vatRateBuy} placeholder="부가세율(매입)" onChange={(e) => setVatRateBuy(e.target.value)}/>
                                                                </div>
                                                                <div className="control  flex-none">
                                                                <span>%</span>
                                                                </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">영업단가그룹
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <button className="btn btn-default btn-code-search popupHandler" />
                                                            <input type="text" className="form-control" value={salesPriceGroup} placeholder="영업단가그룹" onChange={(e) => setSalesPriceGroup(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">구매단가그룹
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <button className="btn btn-default btn-code-search popupHandler" />
                                                            <input type="text" className="form-control" value={purchasePriceGroup} placeholder="구매단가그룹" onChange={(e) => setPurchasePriceGroup(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">창고계층그룹
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <button className="btn btn-default btn-code-search popupHandler" />
                                                            <input type="text" className="form-control" value={warehouseLayerGroup} placeholder="창고계층그룹" onChange={(e) => setWarehouseLayerGroup(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="has-text-centered">{msg}</p>
                        </div>

                        <div className="page-footer footer-fixed" style={{ display: 'block' }}>
                            <div className="wrapper-toolbar">
                                <div className="pull-left">
                               
                                    <div className="control-set">
                                        <div className="control">
                                            <form onSubmit={Register} className="box">
                                            <button className="btn btn-primary" onClick={onSave}>저장(F8)</button>
                                        </form>
                                            <button className="btn-arrow btn btn-arrow-up btn-primary" />
                                        </div>
                                    </div>
                                
                                    <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-default" onClick={handleReset}>다시 작성</button>
                                        </div>
                                    </div>
                                    <div className="control-set">
                                        <div className="control">

                                            <button className="btn btn-default">웹자료올리기</button>
                                        </div>
                                    </div>
                                    <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-default" onClick={onClose}>닫기</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right"/>
                            </div>
                        </div>
                    </div>
                </div>
              )}
        </>
    );
};
