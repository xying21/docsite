import React, { useState } from 'react';
import Wallets from '../common/Wallets';
import WalletCells from './WalletCells';
import styles from '../widget/common_style';
import type { Wallet } from '../types/blockchain';

export default function FetchWallets(){
    const [wallets, setWallets] = useState<Wallet[]>([]);
  
    return(
        <div>
         
            <div id="watch-a-chain">
             <Wallets onFetchWallets={setWallets}></Wallets>

            <div style={styles.content}>
                
                <p>
                    Choose a wallet to see it's related cells and transactions.
                </p>
            </div>

            <div>
                <WalletCells wallets={wallets}></WalletCells>
            </div>

            <div style={styles.content}>
                <div style={styles.explain_text}>
                    <p>
                        Click any cell or transaction to see the details in JSON format.
                    </p>
                    <p>
                        The CKB (Native Tokens) that a wallet owns refers to the total amount of the capacity of all live cells that can be unlocked by this wallet, which is also the total storage space occupied by this wallet on the chain.
                    </p>

                    <p> Wallet 1 was set up as the miner to receive mining rewards.<br/><br/>
                        So wallet 1 owns more live cells than the other two wallets. <br/><br/>
                    </p>
                    <hr/>
                </div>
            </div>
            <hr/>
        </div>
    </div>
    )
}