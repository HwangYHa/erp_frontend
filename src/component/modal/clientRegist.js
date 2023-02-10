import React, { useState } from 'react';
import './modalCommon.css';

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ClientRegister() {

    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [ceo, setCeo] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    console.log("code == > ", code)
    console.log("name == > ", name)
    console.log("ceo == > ", ceo)
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/erp/clientsRegister', {
                client_cd: code,
                client_nm: name,
                representative: ceo,
            });
            navigate.push("/erp");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <>
            <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front panel panel-primary panel-modal ui-draggable" style={{ height: 'auto', width: '795px', top: '91px', left: '668px', display: 'block', zIndex: '2002' }}>
                <form onSubmit={Register} className="box">
                    <div className="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix panel-heading">
                        <span className="ui-dialog-title">거래처등록</span>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-new-window btn btn-primary" role="button"><span className="ui-button-text" /></button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-pinned active btn btn-primary" role="button"><span className="ui-button-text" /></button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-refresh btn btn-primary" role="button"><span className="ui-button-text" /></button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-maximize btn btn-primary" role="button"><span className="ui-button-text" /></button>
                        <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-close btn btn-primary" role="button"><span className="ui-button-text" /></button>
                    </div>



                    <div className="dialog2 ui-dialog-content ui-widget-content panel-body" style={{ width: 'auto', minHeight: '0px', maxHeight: 'nonez', height: '807px' }}>

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
                            <div className="wrapper-header-search" style={{ maxWidth: '755px' }}>
                            </div>
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
                                    onClick={() => handleTabClick(3)}
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="has-text-centered">{msg}</p>
                    </div>
                    <div className="footer footer-fixed" style={{ display: 'block' }}>
                        <div className="wrapper-toolbar">
                            <div className="pull-left">
                                <div className="control-set">
                                    <div className="control">
                                        <button className="btn btn-primary">저장(F8)</button>
                                        <button className="btn-arrow btn btn-arrow-up btn-primary" />
                                    </div>
                                </div>
                                <div className="control-set">
                                    <div className="control">
                                        <button className="btn btn-default">다시 작성</button>
                                    </div>
                                </div>
                                <div className="control-set">
                                    <div className="control">

                                        <button className="btn btn-default">웹자료올리기</button>
                                    </div>
                                </div>
                                <div className="control-set">
                                    <div className="control">3
                                        <button className="btn btn-default">닫기</button>
                                    </div>
                                </div>
                            </div>
                            <div className="pull-right">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
