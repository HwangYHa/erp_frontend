import React from 'react'
import { SideMenuItems } from '../MenuItems';
import { useLocation } from "react-router-dom";

export default function CCC() {
    const location = useLocation();
    const subMenuId = new URLSearchParams(location.search).get("id");
    const defaultItem = { subject: '선택된 메뉴가 없습니다.' };
    const selectedSubMenu = SideMenuItems.reduce((acc, item) => {
        return item.submenu && item.submenu.find(submenu => submenu.id === Number(subMenuId)) || acc;
    }, defaultItem);


    return (
        <>
                        <div className='header header-fixed'>
                            <div className="wrapper-title">
                                <div className="wrapper-toolbar" style={{ maxWidth: '755px' }}>
                                    <div className="pull-left">
                                        <span className="user-help-mark" />
                                        <span className="page-name" to={`${location.pathname}?id=${subMenuId}`}>{selectedSubMenu.subject}</span>
                                    </div>

                                    <div className="pull-right">
                                        <div className="control-set">
                                            <div className="control">
                                                <button className="btn btn-default btn-sm">사용중단포함</button>
                                            </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control wrapper-title-simple-search">

                                                <input type="text" className="form-control title-simple-search flexible form-control" placeholder="입력 후 [Enter]" />
                                                <button type="button" className="btn btn-default btn-fn dropdown-toggle fn btn-sm hidden" />
                                            </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control">

                                                <button className="btn btn-primary btn-title-search">Search(F3)</button>
                                            </div>
                                        </div>
                                        <div className="control-set">
                                            <div className="control">

                                                <button className="btn btn-default btn-title-option dropdown-toggle">Option</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


               


        </>
    );
};