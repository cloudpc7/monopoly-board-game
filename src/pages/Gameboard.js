import { Container, Row, Col } from 'react-bootstrap';
import Board from '../components/Board';
import '../styles/board/board.scss';
const GameBoard = () => {
    return (
        <Container className="board-container">
                <Board />
        </Container>
    )
}

export default GameBoard;