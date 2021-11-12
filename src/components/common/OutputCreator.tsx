import React from 'react';
import { Cell, TxOutput } from '../types/blockchain';
import TotalCapacity from './TotalCapacity';

export type OutputCreatorProps = {
    input_cells: Cell[],
    get_tx_output?: (txo: TxOutput) => void,
    onClearCall?: boolean
}

export default function OutputCreator(props: OutputCreatorProps){
    const {input_cells, get_tx_output, onClearCall} = props;
    return(
        <TotalCapacity cells={input_cells} get_tx_output={get_tx_output} onClearCall={onClearCall}/>
    )
}