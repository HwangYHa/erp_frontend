import React from 'react';
import './Foot.css';
export default function Footer() {
    return (
        
        <div className="footer">
            <div id="pageFooter" data-referrer="page_footer" data-testid="page_footer">
                <ul className="footerUl" data-nocookies="1">
                    <li><a className="Adress_01" href="#!">1공장 : 울산광역시 북구 매곡산업3길 17(매곡동)</a></li>
                    <img src="img/bottom_line.gif" className="Bottom_line" alt="line" />
                    <li><a className="Adress_02" href="#!">2공장 : 경남 김해시 진례면 고모로134번길 54-97</a></li>
                    <img src="img/bottom_line.gif" className="Bottom_line" alt="line" />
                    <li><a className="Date_Establishment" href="#!">설립일 : 2021.01.01</a></li>
                    <img src="img/bottom_line.gif" className="Bottom_line" alt="line" />
                    <li><a className="CEO" href="#!">대표이사 : 황인범</a></li>
                    <img src="img/bottom_line.gif" className="Bottom_line" alt="line" />
                    <li><a className="Representative_number." href="#!">대표번호: 010-9026-6491</a></li>
                    <img src="img/bottom_line.gif" className="Bottom_line" alt="line" />
                    <li><a className="Business_registration_number." href="#!">사업자등록번호 : 1234-5678-90</a></li>
                    <img src="img/bottom_line.gif" className="Bottom_line" alt="line" />
                    <li><a className="Email" href="#!">Email : gursung6491@naver.com</a></li>
                </ul>
                <div id="contentCurve_02" />
                <div className="copyright">
                    <span> Copyright 20**-2021 GURSUNG TECH Co.Ltd.All rights reserved</span>
                </div>
                
            </div>
        </div>
    )
}