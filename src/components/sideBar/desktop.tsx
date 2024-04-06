import {  Nav } from "react-bootstrap";
import bgImage from "../../assets/images/bg-sidebar-desktop.svg";
import "./style.scss";

export default function Desktop() {
    return (
        <div className="h-100 image-column-desktop">
            <div className="image-container">
                <img src={bgImage} alt="bgImage" />
                <div className="overlay">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">1
                            </Nav.Link>
                            <div className="navs-title">
                                <small>Step 1</small>
                                <h1> YOUR INFO</h1>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                2
                            </Nav.Link>
                            <div className="navs-title">
                                <small>Step 2</small>
                                <h1>SELECT PLAN</h1>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                3
                            </Nav.Link>
                            <div className="navs-title">
                                <small>Step 3</small>
                                <h1>ADD-ONS</h1>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">
                                4
                            </Nav.Link>

                            <div className="navs-title">
                                <small>Step 4</small>
                                <h1>SUMMARY</h1>
                            </div>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    )
}