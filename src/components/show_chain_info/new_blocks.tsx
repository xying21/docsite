import React, { useState } from 'react';
import FreshButton from '../widget/fresh_button';
import Blocks from '../common/Blocks';
import BlockchainApi from '../api/BlockchainApi';
import {notify} from '../widget/notify';
import type {
    Block
} from '../types/blockchain';
import common_styles from '../widget/common_style';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useSpring } from "react-spring";

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
    const imgUrl = useBaseUrl("img/fetchblocks.svg");
    const fetchNewBlocks = async () => {
        setIsLoading(true);
        const api = new BlockchainApi();
        const res = await api.getNewBlocks(8);
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
                <div>

                <p>Click the <b>Fetch Blocks</b> button to fetch the latest blocks of the chain.</p>  
                <FreshButton isLoading={isLoading} text={'Fetch Blocks'} onClick={fetchNewBlocks} custom_style={{width: '30%', minHeight: '45px', fontSize: '16px'}} ></FreshButton>
                <Blocks blocks={blocks}></Blocks>
                <br/>
                </div>

                
                <div style={{marginBottom:"20px", clear:'both'}}></div>
{/*                 { blocks.length != 0 && 
                    <div style={styles.content}>
                        <p style={styles.explain_text}>
                           Click on the transaction information to view the detailed information in JSON format.<br/><br/>
                            <br/><br/>
                        </p>
                        <hr/>
                    </div>
                } */}
            </div>
        </div>
    )
}