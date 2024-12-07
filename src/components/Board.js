import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { CardImg } from 'reactstrap';
import '../styles/board/board.scss';
import BoardTile from './BoardTile';
import boardPieces from '../db.json';
import monopolyMan from '../assets/images/monopolyman.png';
import chest from '../assets/images/communitychest.png';
import chance from '../assets/images/chance1.png';

const Board = () => {
    const [boardSpace, setBoardSpace] = useState([...boardPieces]);
    return (
        <>
            <BoardTile 

            />
        </>
    )
}

export default Board;