---
id: getstarted
title: Getting Started
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

## Prerequisite Knowledge

- The basic knowledge on Nervos CKB. For more information, see <Link to={useBaseUrl('/docs/basics/nervosckb')}>Nervos CKB Basics</Link>.

- The knowledge of CKB Data Model. For more information, see  <Link to={useBaseUrl('/docs/basics/data-structure')}>CKB Data Structure</Link> and [Nervos CKB Reference](https://docs.nervos.org/docs/reference/introduction).

- Programming skills (JavaScript/TypeScript, Rust).

- Be familiar with common Linux distribution is highly beneficial.

  For more information, see the [Linux command line for beginner](https://ubuntu.com/tutorials/command-line-for-beginners).

## Set Up Development Environment

These are the minimum requirements for any application development and testing on Nervos CKB.

- OS: MacOS, Ubuntu Linux, or Windows 10 + WSL2 (Ubuntu)

- IDE: [CKB Studio](https://www.obsidians.io/) or your favorite IDE

- A CKB node installed on DEV chain for testing smart contracts and DApps.

  For more information, see <Link to={useBaseUrl('/docs/develop/installnode')}>Install a CKB Node</Link>.

- CKB accounts for the development.

  For more information, see <Link to={useBaseUrl('/docs/develop/createaccount')}>Create Accounts</Link>.

## Pick Developer Tools and Install Development Stacks

The following is a mind map to show the usage of CKB developer tools. Sometimes several tools can be used in combination for an application development.

<object type="image/svg+xml" data={useBaseUrl("img/DevTools.svg")}><img src={useBaseUrl("img/DevTool.svg")} /></object>

### Recommended Development Stacks

The following are recommended software stacks for application development on Nervos CKB.

- DApp Server Side: <Link to={useBaseUrl('/docs/tools/lumos/introduction/intro')}>Lumos</Link> + Typescript + Node.js + ckb-cli + Tippy
- Smart Contracts: [Capsule](https://github.com/nervosnetwork/capsule) + Rust
- Ethereum DApps Porting to CKB: Godwoken

## Program Application Functions

Follow along with the **Tutorials** to get started with some basic usage of the CKB developer tools.

