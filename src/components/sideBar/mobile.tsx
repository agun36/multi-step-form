import {  Nav } from "react-bootstrap";
import bgImageMobile from "../../assets/images/bg-sidebar-mobile.svg";
import "./style.scss";

export default function Mobile() {
    return (
        <div className="image-column-mobile">
            <div className="image-container">
                <img src={bgImageMobile} alt="bgImage" />
                    <Nav >
                        <Nav.Item>
                            <Nav.Link eventKey="first">1
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                2
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                3
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">
                                4
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
            </div>
        </div>
    )
}