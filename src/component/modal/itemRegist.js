import React, { useState, useEffect } from 'react';
import './modalCommon.css';
import axios from "axios";

export default function ItemRegister({ isOpen, onClose }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [specification, setSpecification] = useState('');
    const [sortation, setSortation] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [salesPrice, setSalesPrice] = useState('');
    const [inventoryMng, setInventoryMng] = useState('');
    const [salesPriceGroup, setSalesPriceGroup] = useState('');
    const [productionProcess, setProductionProcess] = useState('');
    const [msg, setMsg] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [label, setLabel] = useState('');
    const [img, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const handleFileUpload = (e) => {
        const files = e.target.files;
        const updatedFiles = [];

        for (let i = 0; i < files.length; i++) {
            updatedFiles.push(files[i]);
        }
        setImage(e.target.files[0]); // 첫 번째 파일을 선택하여 setImage 함수 호출
        setUploadedFiles(updatedFiles);
    }
    
    const Register = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product_cd', code);
        formData.append('product_nm', name);
        formData.append('product_g', group);
        formData.append('specification', specification);
        formData.append('purchase_p', purchasePrice);
        formData.append('sales_p', salesPrice);
        formData.append('product_c', sortation);
        formData.append('inventory_m', inventoryMng);
        formData.append('sales_p_g', salesPriceGroup);
        formData.append('production_p', productionProcess);
        formData.append('file', img);
        formData.append('label', label);
      
        try {
          const res = await axios.post('http://localhost:5000/erp/itemsRegister', formData, {
            headers: {
              'Content-Type': 'multipart/form-data; charset=UTF-8'
            }
          });
          setImageUrl(imageUrl);
          onClose();
          alert('저장이 완료되었습니다.');
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };

    const onSave = (e) => {
        if (e.type === "click" || e.keyCode === 119) {
            Register(e);
        }
    };

    const handleReset = () => {
        setCode('');
        setName('');
        setGroup('');
        setSpecification('');
        setSortation('');
        setPurchasePrice('');
        setSalesPrice('');
        setInventoryMng('');
        setSalesPriceGroup('');
        setProductionProcess('');
    };

    useEffect(() => {
        document.addEventListener('keydown', onSave);
        return () => document.removeEventListener('keydown', onSave);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front panel panel-primary panel-modal ui-draggable" style={{ height: 'auto', width: '700px', top: '200px', left: '650px', display: 'block', zIndex: '2002' }}>
                    <div className="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix panel-heading">
                        <span className="ui-dialog-title">품목등록</span>
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
                                            <span className="page-name">품목등록</span>
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
                                            <span className="tab-text">품목정보</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(2)}
                                        className={selectedTab === 2 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">수량</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(3)}
                                        className={selectedTab === 3 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">단가</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(4)}
                                        className={selectedTab === 4 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">원가</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(5)}
                                        className={selectedTab === 5 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">부가정보</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => handleTabClick(6)}
                                        className={selectedTab === 6 ? "active" : ""}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            <span className="tab-text">관리대상</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" style={{ display: 'block' }}>
                                        <ul className="wrapper-form wrapper-form-state-1" style={{ maxWidth: '755px' }}>
                                            <li className="whole-row">
                                                <div className="title">품목코드
                                                    <div className="title-option">
                                                        <span className="user-help-mark" />
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <input type="text" className="form-control form-control" placeholder="품목코드" value={code} onChange={(e) => setCode(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">품목명
                                                    <div className="title-option">
                                                        <span className="user-help-mark" />
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <input type="text" className="form-control form-control" placeholder="품목명" value={name} onChange={(e) => setName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">품목그룹
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <button className="btn btn-default btn-code-search popupHandler" />
                                                            <input type="text" className="form-control" value={group} placeholder="품목룹" onChange={(e) => setGroup(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="whole-row">
                                                <div className="title">규격
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value='규격명' onChange={(e) => setSpecification(e.target.value)} />
                                                                <label className='labelpr5'>규격명</label>
                                                            </span>
                                                            <span className="form-radio labelpr5">
                                                                <input type="radio" name="option" value='규격그룹' onClick={specification === '규격그룹'} onChange={(e) => setSpecification(e.target.value)} />
                                                                <label>규격그룹</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value='규격계산' onClick={specification === '규격계산'} onChange={(e) => setSpecification(e.target.value)} />
                                                                <label>규격계산</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value='규격계산그룹' onClick={specification === '규격계산그룹'} onChange={(e) => setSpecification(e.target.value)} />
                                                                <label>규격계산그룹</label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="control-set">
                                                        <div className="control">
                                                            {specification === '규격그룹' && (
                                                                <>
                                                                    <div className="control">
                                                                        <div>
                                                                            <span className="label label-default label-light">생산공정</span>
                                                                        </div>
                                                                        <button className="btn btn-default btn-code-search popupHandler" />
                                                                        <input type="text" className="form-control" value={productionProcess} placeholder="생산공정" onChange={(e) => setProductionProcess(e.target.value)} />
                                                                    </div>
                                                                </>)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">입고단가
                                                    <div className="title-option">
                                                        <span className="user-help-mark" />
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <input type="text" className="form-control form-control text-right" placeholder="입고단가" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
                                                        </div>
                                                        <div className="control  flex-none">
                                                            <span className="form-checkbox">
                                                                <input type="checkbox" value="1" />
                                                                <label>VAT포함</label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">츨고단가
                                                    <div className="title-option">
                                                        <span className="user-help-mark" />
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <input type="text" className="form-control form-control text-right" placeholder="입고단가" value={salesPrice} onChange={(e) => setSalesPrice(e.target.value)} />
                                                        </div>
                                                        <div className="control  flex-none">
                                                            <span className="form-checkbox">
                                                                <input type="checkbox" value="1" />
                                                                <label>VAT포함</label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">품목구분
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <span className="form-radio" >
                                                                <input type="radio" value='원재료' onChange={(e) => setSortation(e.target.value)} />
                                                                <label className='labelpr5'>원재료</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value="부재료" onClick={sortation === '부재료'} onChange={(e) => setSortation(e.target.value)} />
                                                                <label>부재료</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value="제품" onClick={sortation === '제품'} onChange={(e) => setSortation(e.target.value)} />
                                                                <label>제품</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value="반제품" onClick={sortation === '반제품'} onChange={(e) => setSortation(e.target.value)} />
                                                                <label>반제품</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value="상품" onClick={sortation === '상품'} onChange={(e) => setSortation(e.target.value)} />
                                                                <label>상품</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" name="option" value="무형상품" onClick={sortation === '무형상품'} onChange={(e) => setSortation(e.target.value)} />
                                                                <label>무형상품</label>
                                                            </span>

                                                        </div>
                                                        {sortation === '제품' && (
                                                            <>
                                                                <div className="control">
                                                                    <input type="text" className="form-control form-control text-right" value={sortation} placeholder="" onChange={(e) => setSortation(e.target.value)} />
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
                                                <div className="title">재고수량관리
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <span className="form-radio" >
                                                                <input type="radio" value='사용' onChange={(e) => setInventoryMng(e.target.value)} />
                                                                <label className='labelpr5'>사용</label>
                                                            </span>
                                                            <span className="form-radio">
                                                                <input type="radio" value="사용안함" onClick={inventoryMng === '사용안함'} onChange={(e) => setInventoryMng(e.target.value)} />
                                                                <label>사용안함</label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">생산공정
                                                    <div className="title-option">
                                                        <span className="user-help-mark">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className="control">
                                                            <button className="btn btn-default btn-code-search popupHandler" />
                                                            <input type="text" className="form-control" value={productionProcess} placeholder="생산공정" onChange={(e) => setProductionProcess(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="whole-row">
                                                <div className="title">이미지
                                                    <div className="title-option">
                                                        <span className="user-help-mark"></span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="control-set">
                                                        <div className='control flex-none'>
                                                            <a href="#" style={{ position: 'relative', zIndex: '1' }}>이미지삽입</a>
                                                            <div className='moxie-shim moxie-shim-html5' style={{ position: 'absolute', top: '0px', left: '0px', width: '24px', height: '17px', overflow: 'hidden', zIndex: '0px' }}>
                                                                <input type="file"  style={{ fontSize: '999px', opacity: '0', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }} accept=".bmp,.jpg,.png,.gif,.jpeg" onChange={handleFileUpload } />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {uploadedFiles.map((file, index) => (
                                                        <div className="control-set" key={index}>
                                                            <div className="control">
                                                                <ul className="wrapper-attach-file">
                                                                    <li style={{ display: 'none' }} />
                                                                    <li className="normal">
                                                                        <span className="label label-default label-light">파일</span>
                                                                        <span>{file.name}</span>
                                                                        <span className="file-status" />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </li>
                                            {uploadedFiles.map((index) => (
                                                <li key={index}>
                                                    <div className="title">라벨</div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <button className="btn btn-default btn-code-search btn-vertical-top" />
                                                                <div className="tags-input">
                                                                    <div className="input-height-fixed">
                                                                        <div>
                                                                            <div className="tags-input-typeahead">
                                                                                <div>
                                                                                    <div className="tags-input-typeahead">
                                                                                        <input type="text" className="form-control form-control-code noneEvent" value={label} placeholder="라벨" onChange={(e) => setLabel(e.target.value)} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                        <div className="page-footer footer-fixed" style={{ display: 'block' }}>
                            <div className="wrapper-toolbar">
                                <div className="pull-left">

                                    <div className="control-set">
                                        <div className="control">
                                            <form onSubmit={Register} className="box" encType="multipart/form-data">
                                                <button className="btn btn-primary" onClick={onSave}>저장(F8)</button>
                                            </form>
                                            <button className="btn-arrow btn btn-arrow-up btn-primary" />
                                        </div>
                                    </div>

                                    <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-default">다규격품목</button>
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
                                <div className="pull-right" />
                                <p className="has-text-centered">{msg}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
