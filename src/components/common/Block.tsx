import React, { CSSProperties, useState } from 'react';
import { Container } from '@material-ui/core';
import Utils from '../utils/index';
import common_style from '../widget/common_style';
import type {
    Block,
    Transaction
} from '../types/blockchain';
import ShowTxInfo from './Tx';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

export type BlockProps = {
    block: Block,
    custom_style?: CSSProperties
} 

const styles = {
    ...common_style, ...{
        box: {
            maxWidth: '200px',
            maxHeight: '200px',
            border: '1px solid rgb(131,196,220)',
            margin: '0.5em',
            float: 'left' as const,
            display: 'box',
            textAlign: 'left' as const,
            overflowY: 'hidden' as const
        },
        hover_box: {
            maxWidth: '200px',
            maxHeight: '200px',
            border: '1px solid rgb(131,196,220)',
            margin: '0.5em',
            float: 'left' as const,
            display: 'box',
            textAlign: 'left' as const,
            overflowY: 'hidden' as const,
            background: 'rgb(195,195,195)',
        },

        box_header: {
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis' as const,
            whiteSpace: 'nowrap' as const
        },
        box_header_title: {
            fontSize: '15px',
            fontWeight: 'bolder' as const,
            color: 'rgb(131,196,220)',
            marginTop: '10px',
            marginBottom: '10px'
        },
        box_header_sub_title: {
            fontSize: '12px',
            margin: '0'
        },
        box_content: {
            width: '100%',
            overflow: 'hidden'
        },
        box_content_link: {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    }
}

export default function BlockBox(props: BlockProps) {

    const [isHover, setIsHover] = useState(false);

    const hovering = () => {
        setIsHover(true);
    };

    const unhover = () => {
        setIsHover(false);
    };
    const tooltip_styles = makeStyles({
        tooltip: {
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: '.5px solid #999999',
            fontSize: '.85rem'
        }
    });
    const { block, custom_style } = props;
    
    function show_tx_list(transactions: Transaction[]) {
        const jsx = transactions.map( (tx: Transaction, index: number) => <ShowTxInfo tx={tx} key_id={index} />);
        return jsx;
    }

    const box_style = isHover ? styles.hover_box : styles.box;

    return(
        <div>
            
            <Container style={custom_style ? {...box_style, ...custom_style} : box_style} key={block.header.hash} onMouseEnter={hovering} onMouseLeave={unhover}>
            <Tooltip title={ 'Click on the transaction Hash to view the detailed information in JSON format.'} classes={{ tooltip: tooltip_styles().tooltip }} placement="bottom">
                <div style={styles.box_header}>
                
                <p style={styles.box_header_title}>Block: #{ Utils.hex2dec( block.header.number )}</p>
                
                    {/* <div style={styles.box_header_title}> Block:#{ Utils.hex2dec( block.header.number )} </div> */}
                    <p style={styles.box_header_sub_title}>Block Hash: {block.header.hash.slice(0,12)}.. </p>
                    <p style={styles.box_header_sub_title}>Time: {Utils.convertTimestamp( BigInt(block.header.timestamp).toString(10) )} </p>
                    <hr/> 
                </div></Tooltip>
                              
                <p style={styles.box_header_sub_title}>Transaction: {block.transactions.length}</p>

                <div style={styles.box_content}>
                    <ul style={styles.ul}>
                        { show_tx_list(block.transactions) }
                    </ul>
                </div>      
            </Container>

        </div>
    )
}   