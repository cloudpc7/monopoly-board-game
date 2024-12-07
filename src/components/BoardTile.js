import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, } from 'reactstrap';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../styles/board/board.scss';

const BoardTile = ({space,name, img, value, color }) => {
    const keyId = uuidv4();
    return (
        <Card id={`space-${space}`} className="board-piece">
            <div className="space-color" style={{backgroundColor: color}}></div>
        </Card>
    )
}

export default BoardTile;