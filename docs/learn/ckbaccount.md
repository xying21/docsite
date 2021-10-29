---
id: ckbaccount
title: CKB Accounts and Capacity
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

This guide introduces the concepts of CKB account, CKB capacity of an account, and how to create CKB accounts before the DApp development.

The accounts can be created by using ckb-cli. DEV chain also provides two accounts from the genesis cells that were issued with a considerable amount of capacity. 

You can create new accounts when developing your DApps by using the method demonstrated in this guide. 

## CKB Account

In CKB, an account is represented as a collection of [live cells](https://docs.nervos.org/docs/reference/cell#live-cell) (unspent cells) that contain the same lock script.

> A live cell refers to an unspent cell in CKB. The concept is similar to that of [UTXO](https://en.wikipedia.org/wiki/Unspent_transaction_output) in Bitcoin's terminology. The full set of live cells in CKB is considered being the full state of CKB at that particular point in time. Any transaction on CKB consumes some live cells. After the transaction is submitted, the live cells become spent cells. Concurrently, some new live cells are created.

The following example is a cell retrieved by Lumos query functions:

:::note

Lumos enriches the cell structure defined in [CKB RFC: Cell](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell) with some customized fields (`out_point`, `block_hash` and `block_number`). 

:::

```typescript
{
  cell_output: {
    capacity: '0x2ecbd7d7dc',
    lock: {
      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
      hash_type: 'type',
      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'
    },
    type: undefined
  },
  out_point: {
    tx_hash: '0x0db73acbbbb04bb1b52153d30ef7486b191b5e376dcc6bc1439b3a6ed2a451d8',
    index: '0x0'
  },
  block_hash: '0x353b8153561400ed623ef295edb7488025ff517a119770cf0c9dca886f193c5a',
  block_number: '0x16',
  data: '0x'
}
```

## CKB Capacity of an Account

> The `capacity` of a cell serves two purposes: 
>
> - It represents the amount of CKB tokens stored in the cell. 
> - It sets a limit on how much information can be stored in a cell. 
>
> The basic unit for CKB capacity is **shannon**. A larger unit, **CKByte** or just **CKB** is also in use. 1 CKB equals to 10<sup>8</sup> shannons. 1 CKB also means a cell can store 1 byte of information. For more information about how to calculate the cell information size, see [Nervos Docs: Cell Information Size Calculation](http://docs.nervos.org/docs/reference/cell#cell-information-size-calculation).

The CKB capacity of an account is the total `capacity` of the live cells owned by the account.

Let us look at the following example. There are three live (unspent) cells in Charlie's account. The three cells contain the same lock script with the lock args "0x9118f7600d395709d08dc4596967d8c929982f1a". Each cell contains **200** (0x4a817c800 in hex) CKB. So the total amount of CKB capacity that Charlie owns is **200 * 3 = 600** CKB.

- Cell 1

  ```typescript
  {
    cell_output: {
      capacity: '0x4a817c800',
      lock: {
        code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        hash_type: 'type',
        args: '0x9118f7600d395709d08dc4596967d8c929982f1a'
      },
      type: undefined
    },
    out_point: {
      tx_hash: '0x513cd686d4e79a78d92598b525816d2d3253f1840b41e277473b3004208df2e6',
      index: '0x0'
    },
    block_hash: '0x9ba2564a84886c7bb03385aa17a1f063af9c687bbd6d0955fbe567fff8075020',
    block_number: '0x30',
    data: '0x'
  }
  ```

- Cell 2

  ```typescript
  {
    cell_output: {
      capacity: '0x4a817c800',
      lock: {
        code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        hash_type: 'type',
        args: '0x9118f7600d395709d08dc4596967d8c929982f1a'
      },
      type: undefined
    },
    out_point: {
      tx_hash: '0x301d8439c42b6448c9b23fddf69bb4671c8479a807afe8e2bbd8fc041130e2d5',
      index: '0x0'
    },
    block_hash: '0xa621dd650b3da3045759072119b0b5b7ab2e15e87fdd96ca81e035c4f6848e3c',
    block_number: '0x3c',
    data: '0x'
  }
  ```

- Cell 3

  ```typescript
  {
    cell_output: {
      capacity: '0x4a817c800',
      lock: {
        code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        hash_type: 'type',
        args: '0x9118f7600d395709d08dc4596967d8c929982f1a'
      },
      type: undefined
    },
    out_point: {
      tx_hash: '0xb90d91dffca55cae4bdf9c7b4c91ce5fe8f9e50bcd7510d28280eb2d4cfc0ee9',
      index: '0x0'
    },
    block_hash: '0xa821a4637c220878baeaeb6b9e1412e9e4179d69c5a456ca9271fdb7f601c16e',
    block_number: '0x43',
    data: '0x'
  }
  ```

:::note

If an account seeks to perform transactional actions, such as transferring CKB to other accounts, the account must have sufficient CKB capacity that equals or exceeds the minimum CKB requirement for the transaction.

For example, the minimum CKB capacity requirement for a regular transaction is 61 [CKB](https://docs.nervos.org/docs/basics/glossary#shannon "One CKByte is equal to 100,000,000 Shannons.") (6,100,000,000 shannons), and the minimum CKB capacity requirement for a DAO deposit transaction is 102 CKB (10,200,000,000 shannons).

Accounts on Testnet can request CKB capacity on [https://faucet.nervos.org](https://faucet.nervos.org/). Accounts on DEV chain can obtain CKB capacity by mining blocks as miners. For more information about getting CKB capacity, see **<Link to={useBaseUrl('/docs/lumos/preparation/createaccount#step-5-get-ckb-capacity-for-the-account-of-alice')}>step 5</Link>** of <Link to={useBaseUrl('/docs/lumos/reference/ckbaccount#create-the-accounts-by-using-ckb-cli')}>Create the accounts by Using ckb-cli</Link>.

:::

## Ownership of CKB Capacity

The ownership of CKB capacity for a CKB account is established through private key, public key, lock script, and CKB address.

- **Private Key**: A private key is a string of letters and numbers that is normally stored in a wallet. The private key is used to generate signatures on messages to prove the ownership of the CKB capacity. It allows the user to send his/her CKB capacity to other addresses.<br/>Example:<br/>

  ```
  0x5503cc1d40b9e05a46fe8e1d4702786c624a1b5e774f964db6746ea754b4843a
  ```

- **Public Key**: A public key is derived from a private key. The public key is used to validate the signature generated by the private key without revealing the private key. <br/>Example:<br/>

  ```
  0x03ff69140121e0f1b1533e451ead79849acae8cd4e1ad77feac2ec5186598a98a9
  ```

- **Lock Script**: A lock script consists of three key parameters, including *code_hash*, *hash_type* and *args*. The unique identifier of an account, is the lock script used in the cells for this account. For more information, see [CKB RFC: Data Structures](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script).<br/>Example:<br/>

  ```typescript
  {
  	code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8', 
  	hash_type:'type',
  	args: '0x9118f7600d395709d08dc4596967d8c929982f1a'
  }
  ```

- **CKB Address**: A CKB address packages a lock script into a single line in a verifiable and human-readable format. For more information, see [CKB RFC: CKB Address Format](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md).<br/>Example:<br/>

  ```
  ckt1qyqfzx8hvqxnj4cf6zxugktfvlvvj2vc9udqww932t
  ckb1qyqfzx8hvqxnj4cf6zxugktfvlvvj2vc9udqntmwxh
  ```
  
  The address with the "**ckb**" prefix is for CKB Mainnet. The address with the "**ckt**" prefix is for both Testnet and DEV chain.

The following figure shows the relationship between private key, public key, lock script, and CKB address.

<img src={useBaseUrl("img/ownership.png")}/>
