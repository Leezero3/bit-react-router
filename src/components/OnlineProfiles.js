import React from "react"
import logo from '../images/pf.png'

const OnlineProfile = () => (
    <div>
        <img src={logo}/>
        <figcaption>
            오늘은 남은 인생이 시작되는 첫째날
        </figcaption>
    
        <h1>Youngeun Lee</h1>
        <p>이메일 : zero3ee@gmail.com</p>
        <h2>Who I am?</h2>
        <p>개발 경력은 아직 없지만 멋쟁이 개발자가 되고싶습니다</p>
        <h2>Github</h2>
        <ul>
            <li>
                <a href="https://github.com/Leezero3" target="_blank">Github</a>
            </li>
        </ul>
        <hr/>
        <h2>Skills</h2>
        <ul>
            <li>사용 언어
                <ul>
                    <li><mark>HTML</mark></li>
                    <li><mark>CSS</mark></li>
                    <li>JAVA</li>
                    <li>Javascript</li>         
                    <li>python</li>
                </ul>
            </li>
            <li>사용 툴
                <ul>
                    <li>IntelliJ</li>
                    <li>Spring FrameWork</li>
                    <li>Docker</li>
                    <li>Flask</li>
                    <li>Mini Conda</li>
                    <li><b>Visual Studio</b></li>
                </ul>
            </li>
        </ul>
        <h2>Academic</h2>
    
        <table border="1">
            <caption>학력 사항</caption>
            <thead>
                <tr>
                    <th>출신학교</th>
                    <th>전공</th>
                    <th>기간</th>
                    <th>졸업구분</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ㅇㅇㅇ고등학교</td>
                    <td> (해당사항 없음)</td>
                    <td>2009.2 ~ 2012.2</td>
                    <td>졸업</td>
                </tr>
                <tr>
                    <td>ㅁㅁ대학교</td>
                    <td>- -  학과</td>
                    <td>2012.3 ~ 2018.2</td>
                    <td>졸업</td>
                </tr>
            </tbody>
        </table>
    </div>
);


export default OnlineProfile;
