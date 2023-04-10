import React, { useState, useEffect } from 'react';
import './modalCommon.css';


export default function WarehouseDetail() {

    return (
        <>
            <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front panel panel-primary panel-modal ui-draggable" style={{ height: 'auto', width: '795px', top: '215px', left: '562px', display: 'block', zIndex: '2002' }}>
                <div className="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix panel-heading">
                    <span className="ui-dialog-title">창고수정</span>
                    <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-new-window btn btn-primary" >
                        <span className="ui-button-text">
                        </span>
                    </button>
                    <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-pin btn btn-primary" >
                        <span className="ui-button-text">
                        </span>
                    </button>
                    <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-refresh btn btn-primary">
                        <span className="ui-button-text">
                        </span>
                    </button>
                    <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-maximize btn btn-primary">
                        <span className="ui-button-text">
                        </span>
                    </button>
                    <button className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-dialog-titlebar-close btn btn-primary">
                        <span className="ui-button-text">
                        </span>
                    </button>
                </div>
                <div className="dialog2 ui-dialog-content ui-widget-content panel-body" style={{ width: 'auto', minHeight: '0px', maxHeight: 'none', height: '478px' }}>
                    <div className="wrapper-overlay position-absolute"/>
                    <div className="page page-fluid page-modal page-loadComplete">
                        <div className="header header-fixed">
                            <div className="wrapper-title">
                                <div className="wrapper-toolbar" style={{ maxWidth: '755px' }}>
                                    <div className="pull-left">
                                        <span className="page-name">창고수정</span> <span className="wrapper-title-notification">
                                            <span className="label label-primary title-notification-heading">
                                            </span>
                                            <span className="label label-primary title-notification-contents" style={{ display: 'none' }}>
                                            </span>
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
                            <div style="outline: none;">
                            </div>
                            <ul className="nav nav-tabs" style={{ width: '755px' }}>
                                <li className="active">
                                    <a href="#" className="cursor-pointer">
                                        <span className="tab-text" >기본</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className="cursor-pointer">
                                        <span className="tab-text">창고정보</span>
                                    </a>
                                </li>
                                <li id="A3" className="" >
                                    <a href="#" className="cursor-pointer">
                                        <span className="tab-text">부가정보</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane" style={{ display: 'block' }}>
                                    <ul className="wrapper-form wrapper-form-state-1">
                                        <li className="whole-row">
                                            <div className="title">창고코드<div className="title-option">
                                                <span className="user-help-mark">
                                                </span>
                                            </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control">

                                                        <span>200</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="whole-row">
                                            <div className="title">창고명<div className="title-option">
                                                <span className="user-help-mark">
                                                </span>
                                            </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control">

                                                        <input type="text" className="form-control form-control" placeholder="창고명" value="조립공장" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="whole-row">
                                            <div className="title">구분<div className="title-option">
                                                <span className="user-help-mark">
                                                </span>
                                            </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control">
                                                        <span className="form-radio" >
                                                            <input type="radio" value="0" checked="" />
                                                            <label >창고</label>
                                                        </span>
                                                        <span className="form-radio">
                                                            <input type="radio" value="1" />
                                                            <label>공장</label>
                                                        </span>
                                                        <span className="form-radio" >
                                                            <input type="radio" value="2" />
                                                            <label >공장(외주비관리)</label>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="control-set">
                                                    <div className="control">
                                                        <div>
                                                            <span className="label label-default label-light">생산공정</span>
                                                        </div>
                                                        <button className="btn btn-default btn-code-search popupHandler">
                                                        </button>
                                                        <input type="text" className="form-control" placeholder="생산공정" value="조립" />
                                                        <button className="btn btn-default btn-remove"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="whole-row">
                                            <div className="title">부가세율(매출)
                                                <div className="title-option">
                                                    <span className="user-help-mark" />
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control  flex-none">

                                                        <span className="form-radio">
                                                            <input type="radio" value="N" />
                                                            <label>기본설정</label>
                                                        </span>
                                                        <span className="form-radio">
                                                            <input type="radio" value="Y" />
                                                            <label>직접입력</label>
                                                        </span>
                                                    </div>
                                                    <span>%</span>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="whole-row">
                                            <div className="title" data-listid="rate_buy">부가세율(매입)
                                                <div className="title-option">
                                                    <span className="user-help-mark" data-listid="rate_buy" data-ecpath="ESA006M_10∫contents∫A2∫formESA006M∫∫∫" data-function="popover" data-original-title="" title="" data-popoverindex="897">
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control  flex-none" data-ecpath="ESA006M_10∫contents∫A2∫∫∫rate_buy_radio∫rate_buy">
                                                        <span className="form-radio">
                                                            <input type="radio" value="N" />
                                                            <label>기본설정</label>
                                                        </span>
                                                        <span className="form-radio">
                                                            <input type="radio" value="Y" />
                                                            <label>직접입력</label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-listid="price_group" className="whole-row">
                                            <div className="title" data-listid="price_group">영업단가그룹
                                                <div className="title-option">
                                                    <span className="user-help-mark"></span>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control">
                                                        <button className="btn btn-default btn-code-search popupHandler" />
                                                        <input type="text" className="form-control" placeholder="영업단가그룹" value="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-listid="price_group" className="whole-row">
                                            <div className="title" data-listid="price_group">구매단가그룹
                                                <div className="title-option">
                                                    <span className="user-help-mark"></span>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control">
                                                        <button className="btn btn-default btn-code-search popupHandler" />
                                                        <input type="text" className="form-control" placeholder="구매단가그룹" value="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-listid="price_group" className="whole-row">
                                            <div className="title" data-listid="price_group">창고계층그룹
                                                <div className="title-option">
                                                    <span className="user-help-mark"></span>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="control-set">
                                                    <div className="control">
                                                        <button className="btn btn-default btn-code-search popupHandler" />
                                                        <input type="text" className="form-control" placeholder="창고계층그룹" value="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer footer-fixed" style={{display: 'block'}}>
                            <div className="wrapper-toolbar">
                                <div className="pull-left">
                                    <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-primary">저장(F8)</button>
                                            <button className="btn-arrow btn btn-arrow-up btn-primary"/>
                                        </div>
                                    </div>
                                    <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-default">다시 작성</button>
                                        </div>
                                    </div>
                                    <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-arrow btn-arrow-up btn-default">사용중단/재사용</button>
                                        </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control">
                                            <button className="btn btn-default">닫기</button>
                                        </div>
                                        </div>
                                        <div className="control-set">
                                        <div className="control">
                                            <button className="btn btn-default">H</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui-resizable-handle ui-resizable-n" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-e" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-s" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-w" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-se" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-sw" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-ne" style={{ zIndex: '90' }} />
                <div className="ui-resizable-handle ui-resizable-nw" style={{ zIndex: '90' }} />
            </div>

        </>
    );
};
