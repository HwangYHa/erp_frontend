import React from 'react';

export default function FrameBody() {

    return (
        <>
            <div className='wrapper-frame-body'>
                <div style={{ display: "block" }}>
                    <div id='mainPage' className='page page-fluid page-loadComplete'>
                        <div className='header header-fixed'>
                            <div className="wrapper-title">
                                <div className="wrapper-toolbar" style={{ maxWidth: '755px' }}>

                                    <div className="pull-left">
                                        <span className="page-name">거래처리스트</span>
                                        <span className="wrapper-title-notification">
                                            <span id="progressMarkF" className="label label-primary title-notification-heading" />
                                            <span id="progressMarkS" className="label label-primary title-notification-contents" style={{ display: 'none' }} />
                                        </span>
                                    </div>

                                    <div className="pull-right">
                                        <div className="control-set">
                                            <div className="control">

                                                <button id="searchWithDeactivate" className="btn btn-default btn-sm">사용중단포함</button>
                                            </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control wrapper-title-simple-search">

                                                <input type="text" className="form-control title-simple-search flexible form-control" placeholder="입력 후 [Enter]" value="" />
                                                <button type="button" className="btn btn-default btn-fn dropdown-toggle fn btn-sm hidden" />
                                            </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control">

                                                <button id="tgHeaderSearch" className="btn btn-primary btn-title-search">Search(F3)</button>
                                            </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control">

                                                <button id="tgHeaderOption" className="btn btn-default btn-title-option dropdown-toggle">Option</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}