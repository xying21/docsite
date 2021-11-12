import React, {useState} from 'react';
import {
    HexString,
    WitnessArgs,
    RawTransaction,
    Cell,
    Message
} from '../types/blockchain';
import FreshButton from '../widget/fresh_button';
import BlockchainApi from '../api/BlockchainApi';
import {notify} from '../widget/notify';
import commonStyle from '../widget/common_style';

const styles = {...commonStyle, ...{
    root: {
        width: '100%',
        padding: '10px 0px',
    },
    result: {
        padding: '10px',
        border: '1px solid gray',
        marginTop: '5px',
        overflowWrap: 'break-word' as const,
    }
}};

export type Props = {
    raw_tx: RawTransaction | undefined,
    witnesses?: HexString[],
}

export default function FetchToSignMessage(props: Props){
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const generateMessage = async () => {
        setIsLoading(true);
        //const raw_tx = JSON.parse(JSON.stringify(eval("(" + props.raw_tx + ")")));
        //console.log(raw_tx);
        if(props.raw_tx){
            const blockchainApi = new BlockchainApi();
            const result = await blockchainApi.getToSignMessage(props.raw_tx, props.witnesses ? props.witnesses: Array(props.raw_tx.inputs?.length).fill('0x'));
            console.log(result, typeof result);
            if(result.status === "ok"){
                const msgs = result.data.map( (m: Message) => <li>{m.message}</li>);
                setMessage(msgs);
            }else{
                notify(result.data);
            }
        }else{
            notify('raw_tx is undefind.')
        }
        setIsLoading(false);
    }
    return(
        <div style={styles.root}>
            <FreshButton isLoading={isLoading} text={'生成 message'} onClick={generateMessage} custom_style={{width:'100%', fontSize: '16px'}} />
            <div style={styles.result}>
                <p>{message}</p>
            </div>
        </div>
    )
}
