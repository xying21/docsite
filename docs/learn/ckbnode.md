---
id: ckbnode
title: CKB Nodes and Networks
---

import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

## CKB Nodes

CKB nodes can be categorized in the following three types:

- Mining Node: Mining nodes participate in the CKB consensus process. Mining nodes collect new transactions, package them into blocks and produce new blocks when they have found a Proof-of-Work. Mining nodes do not have to store the entire transaction history, only the current cell set.
- Full Node: Full nodes verify new blocks and transactions, relay blocks and transactions, and select the chain fork on which they agree. Full nodes are the verifiers of the network.
- Light Node: Light nodes trust full nodes, only subscribe and store a subset of cells that they are concerned with. They use minimal resources. Users increasingly rely on mobile devices and mobile apps to access the Internet, the light node is designed to run on mobile devices.

## CKB Networks

A CKB node can be set up to connect and interact with one of the following CKB networks:

- **Mainnet (Lina)**: Mainnet is the main CKB public network. The real-time information of the Lina Mainnet can be checked on the [CKB Explorer](https://explorer.nervos.org/) page.

- **Testnet (Aggron4)**: Testnet is used to test applications integration and smart contracts in real environment with actual data. 

  :::info

  For the first time to run a node on the **Testnet**, syncing data requires upwards of one hour for the current number (**1,300,000+**) of blocks depending on the network connection. The real-time block number on the Testnet can be checked on the [CKB Explorer](https://explorer.nervos.org/aggron) page.<br/>
  :::

- **DEV Chain**:  DEV chain is a local blockchain that provides an efficient and useful development mode for building and testing applications.
