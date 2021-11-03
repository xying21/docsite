---
id: intro
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

- ckb-indexer

	ckb-indexer is an indexer RPC service for ckb developers. This is a standalone service for creating cell and transaction indexes as an alternate solution. 

- ckb-cli

	ckb-cli is a command line tool for debugging CKB in development to facilitate user interaction with CKB. The functions of ckb-cli include:

	- Search for blockchain information.
	- Configure environment variables.
	- Invoke RPC to interact with CKB nodes.
	- Handle mock transactions.
	- Creates wallets and queries balances, etc.

- Capsule

	Capsule is a development framework that creates smart contracts for the Layer 1 blockchain of Nervos' CKB. Capsule is designed to provide an out-of-the-box solution that helps developers accomplish common tasks swiftly and effortlessly.

	Capsule offers features including:

	- Setting up footprints for new projects.
	- Building RISC-V binaries for Nervos CKB-VM.
	- Executing smart contract scripts locally with Docker.
	- Auto-testing of smart contract scripts.
	- Deploying configurable scripts to the Nervos CKB.
	- Generating demo transaction data for debugging.

  	Scenario

  	- [Write a SUDT script by Capsule](https://docs.nervos.org/docs/labs/sudtbycapsule)

- Tippy

	Tippy is a tool to help set up and manage CKB nodes, enabling the installation and launching of a CKB node with a simple click.

	Function:

	- Install and launch CKB Node

- Mercury 

	Mercury is a tool that handles the development of applications on the CKB. Simply put, within the Nervos ecosystem, CKB is the Linux kernel and Mercury is Ubuntu. 
	Mercury is the bridge between CKB and applications by providing useful RPC services for applications such as dApps built on Lumos as well as wallets and exchanges built on `ckb-sdk`.

	Function:

	- on developing wallet applications: Mercury has interfaces for obtaining the balance of an address and for assembling transactions for transferring CKBytes, sUDT or xUDT.
	- For exchanges: Mercury offers functions such as aggregating digital seets and fectching blocks. 

- CKB SDK

	ckb-sdk is a collection of libraries that allow interactions with local or remote CKB nodes through the use of JSON-RPC. The SDK uses the NewCkbApi API to support the **CKB**, **CKB indexer** and **Mercury** module starting from 0.43.1 version. 

	Function:

	- Wallet management
	- Account management
	- Cryptocurrency management
	- Communication with CKB networks
	- Token management


- Lumos

	Lumos is an open-source framework that was developed by the Nervos Developer Tools team, for building Nervos CKB DApps, designed to simplify dApp development  on Nervos CKB. For more information, refer to [this link](https://xying21.github.io/lumos_doc/docs/preparation/setupsystem/)


- Polyjuice

	Polyjuice is an Ethereum compatible layer designed upon the Godwoken account model. Godwoken comes together with Polyjuice giving developers the ability to seamlessly deploy and run Ethereum contracts.

- Godwoken

	Godwoken is a layer 2 rollup framework that provides an abstracted account model and abstracted layer 2 transactions upon Nervos CKB. For more information, visit [Godwoken Documentation](https://docs.godwoken.io)

- Forcebridge

	Force Bridge currently supports cross-chains in Bitcoin, Ethereum, Tron and Eos, and will support more blockchain projects in the future. Users can use Force Bridge Dapp to transfer assets from other chains to CKB to obtain the corresponding shadow assets, as well as to transfer the shadow assets back and obtain the native assets.
