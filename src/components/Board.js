import { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import { Card, CardImg } from 'reactstrap';

import '../styles/board/board.scss';
import BoardTile from './BoardTile';
import boardPieces from '../db.json';
import monopolyMan from '../assets/images/monopolyman.png';
import chest from '../assets/images/communitychest.png';
import chance from '../assets/images/chance1.png';
import { v4 as uuidv4} from 'uuid';

const Board = () => {
    const {boardSpaces } = boardPieces.data;

    return (
        <Row className="game-board">
            {boardSpaces.map((space) => (
                <BoardTile 
                    key={uuidv4()}
                    boardPiece={space}
                />
            ))}
            <Col className="center-board">
                <Card className="chest-card">
                    <CardImg className="chest" src={chest} alt="community chest"/>
                </Card>
                <Card className="center-piece">
                    <span className="game-description">fast dealing property trading game</span>
                    <CardImg className="monopoly-man" src={monopolyMan} alt="monopoly man" />
                    <h2 className="game-title">monopoly</h2>
                </Card>
                <Card className="chance-card">
                    <CardImg  className="chance" src={chance} alt="chance card"/>
                </Card>
            </Col>
        </Row>
    )
}

export default Board;