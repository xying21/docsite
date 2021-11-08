import React, { useState } from 'react';
import Wallets from '../common/Wallets';
import WalletTxs from './WalletTransaction';
import ChainConfig from './ChainConfig';
import WalletCells from './WalletCells';
import NewBlocks from './new_blocks';
import styles from '../widget/common_style';
import type { Wallet } from '../types/blockchain';

export default function ShowChainInfo(){
    const [wallets, setWallets] = useState<Wallet[]>([]);

    return(
        <div>
            <div style={styles.content}>
                <p>
                    A node was installed in cloud and some account addresses were created to facilitate the use of this tutorial.
                    <br/><br/>
                    Click the button below to view the latest blocks of the chain.
                </p>
            </div>
            
            <div id="watch-a-chain">
            <NewBlocks></NewBlocks>

            <div style={styles.content}>
                <p> Move mouse over the following wallets and check the information of the wallet.</p>
            </div>

            <Wallets onFetchWallets={setWallets}></Wallets>

            <div style={styles.content}>
                <div style={styles.explain_text}>
                    <p>Each wallet includes the following information:</p>
                    <ul>
                        <li>mainnet: The mainnet address of the wallet.</li>
                        <li>testnet: The testnet address of the wallet. Only testnet address is used in this tutorial.</li>
                        <li>lock_arg: The first 20 bytes of the corresponding public key hash.</li>
                        <li>private_key: The private key of the wallet.</li>
                    </ul>
					<p>Note: The wallet information is only used for demonstration in this tutorial. Do not use these private keys, addresses and args elsewhere.</p>
                    <p>
                        The three wallets will be used in the later sections to send transactions, deploy contracts.
                    </p>
                </div>
                <hr/>
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
                </div>
            </div>
            <hr/>
            <div style={styles.content}>
			<p>Each CKB chain has several embeded smart contracts in genesis blocks when the chain is installed or deployed.</p>
			<p>The following shows the three embeded smart contracts.</p>
			 <div style={styles.explain_text}>
                    <p><code style={styles.single_line_code}>prefix: ckt</code> This is a testnet chain.</p>
                    <p><code style={styles.single_line_code}>scripts</code> The smart contracts embeded in the chain, i.e. the type and lock scripts.</p>

                </div>
			        <ul>
                        <li>SECP256K1_BLAKE160: The default lock script that is used to protect the ownership of cells.</li>
                        <li>SECP256K1_BLAKE160_MULTISIG: The multisig version of SECP256K1_BLAKE160.</li>
                        <li>DAO: The smart contract for Nervos DAO.</li>
                    </ul>
                <ChainConfig />

                <hr/>
                </div>
            </div>
        </div>
    )
}