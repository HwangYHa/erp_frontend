import React, { useState, useEffect} from 'react';
import './modalCommon.css';
import axios from "axios";

export default function ClientRegister({ isOpen, onClose }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [ceo, setCeo] = useState('');
    const [event, setEvent] = useState('');
    const [companyNb, setCompanyNb] = useState('');
    const [fax, setFax] = useState('');
    const [searchContents, setSearchContents] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [homePage, setHomePage] = useState('');
    const [manager, setManager] = useState('');
    const [email, setEmail] = useState('');
    const [accountGroup, setAccountGroup] = useState('');
    const [accountGroup2, setAccountGroup2] = useState('');
    const [accountLayerGroup, setAccountLayerGroup] = useState('');
    const [msg, setMsg] = useState('');

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const Register = (e) => {
        e.preventDefault();
        try {
            axios.post('http://localhost:5000/erp/clientsRegister', {
                client_cd: code,
                client_nm: name,
                Classification: selectedOption,
                ceo: ceo,
                event: event,
                company_nb: companyNb,
                fax: fax,
                searchContents: searchContents,
                mobile: mobile,
                address: address,
                address2: address2,
                homePage: homePage,
                manager: manager,
                email: email,
                accountGroup: accountGroup,
                accountGroup2: accountGroup2,
                accountLayerGroup: accountLayerGroup,
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
        if (e.type === "click" || e.keyCode === 113) {
            Register(e);
        }
    };

    const handleReset = () => {
        setCode('');
        setName('');
        setSelectedOption('');
        setCeo('');
        setEvent('');
        setCompanyNb('');
        setFax('');
        setSearchContents('');
        setMobile('');
        setAddress('');
        setAddress2('');
        setHomePage('');
        setManager('');
        setEmail('');
        setAccountGroup('');
        setAccountGroup2('');
        setAccountLayerGroup('');
    };

    useEffect(() => {
        document.addEventListener('keydown', onSave);
        return () => document.removeEventListener('keydown', onSave);
      }, []);

    return (
        <>
            {isOpen && (
                    <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front panel panel-primary panel-modal ui-draggable" style={{ height: 'auto', width: '800px', top: '126px', left: '668px', display: 'block', zIndex: '2002' }}>
                        <div className="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix panel-heading">
                            <span className="ui-dialog-title">거래처등록</span>
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

                        <div className="dialog2 ui-dialog-content ui-widget-content panel-body" style={{ width: 'auto', minHeight: '0px', maxHeight: 'none', height: '750px' }}>
                            <div className="page page-fluid page-modal page-loadComplete" data-ecpageid="ESA002M_11" style={{ display: 'block' }}>
                                <div className="header header-fixed">
                                    <div className="wrapper-title">
                                        <div className="wrapper-toolbar" style={{ maxWidth: '755px' }}>
                                            <div className="pull-left">
                                                <span className="page-name">거래처등록</span>
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
                                                <span className="tab-text">거래처정보</span>
                                            </a>
                                        </li>
                                        <li
                                            onClick={() => handleTabClick(2)}
                                            className={selectedTab === 2 ? "active" : ""}
                                        >
                                            <a href="#" className="cursor-pointer">
                                                <span className="tab-text">여신/단가</span>
                                            </a>
                                        </li>
                                        <li
                                            onClick={() => handleTabClick(2)}
                                            className={selectedTab === 3 ? "active" : ""}
                                        >
                                            <a href="#" className="cursor-pointer">
                                                <span className="tab-text">부가정보</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane" style={{ display: 'block' }}>
                                            <ul className="wrapper-form wrapper-form-state-1">
                                                <li className="whole-row">
                                                    <div className="title">거래처코드
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="거래처코드" value={code} onChange={(e) => setCode(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">상호(이름)
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="상호(이름)" value={name} onChange={(e) => setName(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">거래처코드구분
                                                        <div className="title-option">
                                                            <span className="user-help-mark" title="">
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <span className="form-radio" >
                                                                    <input type="radio" value="사업자등록번호" checked={selectedOption === '사업자등록번호'} onChange={handleOptionChange} />
                                                                    <label>사업자등록번호</label>
                                                                </span>
                                                                <span className="form-radio">
                                                                    <input type="radio" value="비사업자(내국인)" checked={selectedOption === '비사업자(내국인)'} onChange={handleOptionChange} />
                                                                    <label>비사업자(내국인)</label>
                                                                </span>
                                                                <span className="form-radio">
                                                                    <input type="radio" value="비사업자(외국인)" checked={selectedOption === '비사업자(외국인)'} onChange={handleOptionChange} />
                                                                    <label>비사업자(외국인)</label>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">대표자명
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="대표자명" value={ceo} onChange={(e) => setCeo(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">업태
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="업태" value={event} onChange={(e) => setEvent(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">전화
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="전화" value={companyNb} onChange={(e) => setCompanyNb(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">Fax
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="Fax" value={fax} onChange={(e) => setFax(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">검색창내용
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="검색창내용" value={searchContents} onChange={(e) => setSearchContents(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">모바일
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="모바일" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">주소1
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control  flex-none">
                                                                <a href="#">주소검색</a>
                                                            </div>
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="주소" maxLength="8" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <textarea rows="2" className="form-control " placeholder="상세주소" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">홈페이지
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="홈페이지" value={homePage} onChange={(e) => setHomePage(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">담당자
                                                        <div className="title-option">
                                                            <span className="user-help-mark" title="">
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <button className="btn btn-default btn-code-search popupHandler" />
                                                                <input type="text" className="form-control" placeholder="담당자" value={manager} onChange={(e) => setManager(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">Email
                                                        <div className="title-option">
                                                            <span className="user-help-mark" />
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <input type="text" className="form-control form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">거래처그룹1
                                                        <div className="title-option">
                                                            <span className="user-help-mark" title="">
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <button className="btn btn-default btn-code-search popupHandler" />
                                                                <input type="text" className="form-control" placeholder="거래처그룹1" value={accountGroup} onChange={(e) => setAccountGroup(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">거래처그룹2
                                                        <div className="title-option">
                                                            <span className="user-help-mark" title="">
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <button className="btn btn-default btn-code-search popupHandler" />
                                                                <input type="text" className="form-control" placeholder="거래처그룹2" value={accountGroup2} onChange={(e) => setAccountGroup2(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="whole-row">
                                                    <div className="title">거래처계층그룹
                                                        <div className="title-option">
                                                            <span className="user-help-mark" title="">
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form">
                                                        <div className="control-set">
                                                            <div className="control">
                                                                <button className="btn btn-default btn-code-search popupHandler" />
                                                                <input type="text" className="form-control" placeholder="거래처계층그룹" value={accountLayerGroup} onChange={(e) => setAccountLayerGroup(e.target.value)} />
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
                                    <form onSubmit={Register} className="box">
                                        <div className="control-set">
                                            <div className="control">
                                                <button className="btn btn-primary" onClick={onSave}>저장(F8)</button>
                                                <button className="btn-arrow btn btn-arrow-up btn-primary" />
                                            </div>
                                        </div>
                                        </form>
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
                                </div>
                            </div>
                        </div>


                    </div>
                
            )}
        </>
    );
};
