import React, { useState, useRef } from 'react';
import FreshButton from '../widget/fresh_button';
import Api from '../api/blockchain';
import { notify } from '../widget/notify';
import commonStyle from '../widget/common_style';

const styles = {...commonStyle, ...{
    input_wrap: {
        padding: '5px',
        marginBottom: '10px',
        display: 'block',
        background: 'white',
    },
    input: {
        width: '100%',
        outline: 'none',
        lineHeight: '2em',
        fontSize: '16px',
        border: '0',
    },
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
}}

export default function Signer(){

    const [isLoading, setIsLoading] = useState(false);
    const [signature, setSignature] = useState('');
    const msg_ref = useRef<HTMLInputElement>(null);
    const key_ref = useRef<HTMLInputElement>(null);

    const sign_message = async () => {
        setIsLoading(true);
        const msg = msg_ref.current?.value || '';
        const key = key_ref.current?.value || '';
        const api = new Api();
        const sig = await api.getSignature(msg, key);
        if(sig.status === "ok")
            setSignature(sig.data);
        else notify(sig.data);
        
        setIsLoading(false);
    }

    return(
        <div style={styles.root}>
            <span style={styles.input_wrap}>
                <input style={styles.input} ref={msg_ref} placeholder={'message'} type="text"/>
            </span>
            <span style={styles.input_wrap}>
                <input style={styles.input} ref={key_ref} placeholder={'private key'} type="text"/>
            </span>
            <FreshButton isLoading={isLoading} onClick={sign_message} text={'签名'} custom_style={{width:'100%', fontSize: '16px'}} ></FreshButton>
            <div style={styles.result}>
                <p>{signature} </p>
            </div>
        </div>
    )
}