import React, { useState } from 'react';
import FreshButton from '../widget/fresh_button';
import Blocks from '../common/Blocks';
import Api from '../api/blockchain';
import {notify} from '../widget/notify';
import type {
    Block
} from '../types/blockchain';
import common_styles from '../widget/common_style';

const styles = {...common_styles, ...{
    container: {
        margin: '20px 0px',
        clear: 'both' as const
    },
    empty_placeholder: {
        width: '100%',
        minHeight: '50px',
        background: 'gray',
        padding: '20px 0'
    }
}}

export default function NewBlocks (){
    const [isLoading, setIsLoading] = useState(false);
    const [blocks, setBlocks] = useState<Block[]>([]);

    const fetchNewBlocks = async () => {
        setIsLoading(true);
        const api = new Api();
        const res = await api.getNewBlocks(9);
        if(res.status === "ok"){
            const blocks = res.data;
            console.log(blocks);
            setBlocks(blocks);
        }else{
            notify(JSON.stringify(res));
        }
        setIsLoading(false);
    }

    return(
        <div style={styles.container}>
            <div style={common_styles.clear_path}>
                <div style={{marginBottom: '20px'}}>
                    <FreshButton isLoading={isLoading} text={'View Blocks'} onClick={fetchNewBlocks} custom_style={{width: '100%', minHeight: '60px', fontSize: '20px'}} ></FreshButton>
                </div>
                <Blocks blocks={blocks}></Blocks>
                <div style={{marginBottom:"20px", clear:'both'}}></div>
                { blocks.length != 0 && 
                    <div style={styles.content}>
                        <p style={styles.explain_text}>
                            The latest 9 blocks of the test chain are shown above.<br/><br/>
                            The the lower half in the block is the transaction information. If you click on the transaction information, the detailed information in JSON format will pop up.<br/><br/>
                        </p>
                        <hr/>
                    </div>
                }
            </div>
        </div>
    )
}