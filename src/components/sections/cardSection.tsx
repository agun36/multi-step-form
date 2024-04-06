import {  FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import './style.scss';

interface CardSectionProps {
    title: string;
    montly: string;
    image: string;
    active?: boolean;
    onClick?: () => void;
}

const CardSection: FunctionComponent<CardSectionProps> = (props) => {

    return (
        <div className={`card-wrappers card ${props.active ? 'active' : ''}`}>
            <Card.Body
            onClick={props.onClick}
            >
                <Card.Img variant="top" src={props.image} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.montly}</Card.Text>
            </Card.Body>
        </div>
    )


};
export default CardSection
