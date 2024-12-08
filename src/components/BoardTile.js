import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, } from 'reactstrap';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../styles/board/board.scss';

const BoardTile = ({boardPiece }) => {
    const keyId = uuidv4();
    const {space,name,img,value,color} = boardPiece;
    console.log(color);
    return (
        <Card id={`space-${space}`} className="board-piece">
            {
                color && <div className="space-color" style={{backgroundColor: color}}></div>
            }
            <CardTitle className="space-title">
            {
               name === "just visiting" ? (
                <>
                    <span className="just">Just</span>
                    <span className="visiting">Visiting</span>
                </>
               ) : name === "Free Parking" ? (
                <>
                    <span className="free">free</span>
                    <span className="parking">parking</span>
                </>
               ) : name === "Go To Jail" ? (
                <>
                    <span className="go-to">Go To</span>
                    <span className="jail">Jail</span>
                </>
               ) : (
                name
               )
            }    
            </CardTitle>
            {
                name === "just visiting" ? (
                    <>
                    <div className="border-box" >
                        <CardImg 
                            className="space-image" 
                            src={img}
                        />
                    </div>
                    </>
                ) : img && (
                    <CardImg className="space-image"src={img}/>
                )
            }
            {
                value &&    <CardBody className="board-content">
                    {
                        value &&  (
                            <CardText className="value">
                            &#x24c2; {value}
                            </CardText>
                        )
                    }
                
                    
                </CardBody>
            }
        </Card>
    )
}

export default BoardTile;