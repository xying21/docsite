---
id: createaccount
title: Create CKB Accounts
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

CKB accounts can be created by using ckb-cli. DEV chain also provides two accounts from the genesis cells that were issued with a considerable amount of capacity. 

You can create new accounts when developing applications by using the method demonstrated in this guide. 

## Prerequisites 

The following prerequisites apply for creating the accounts:

- The CKB node is installed and running. 

## Create the Accounts by Using ckb-cli

> **ckb-cli** is included in the CKB pre-built installer package. It is a command line tool that provides the functions of RPC requests, creating CKB addresses, managing wallets, sending transactions, and depositing to Nervos DAO etc. These functions can help with debugging and testing during the development process. For more information, see [ckb-cli Sub Commands](https://github.com/nervosnetwork/ckb-cli/wiki/Sub-Commands).

### Step 1. Download the CKB pre-built installer package.

This guide uses the CKB 0.39.0 version. All releases can be found on the <a title="Download" href="https://github.com/nervosnetwork/ckb/releases"><i class="feather icon-download"></i>CKB releases</a> page. If the package is already downloaded, go to step 2 directly.

For more information, see <Link to={useBaseUrl('/docs/develop/installnode#step-1-download-the-ckb-pre-built-installer-package')}>Download the CKB Pre-built Installer Package</Link>.

### Step 2. Verify the ckb-cli tool is working and check the version.

<p>Navigate into the folder where the ckb-cli tool locates, then verify the tool is working.</p>

```shell {1}
ckb-cli -V
ckb-cli 0.39.0
```

### Step 3. Create the account for Alice.

```shell {1}
ckb-cli account new
Your new account is locked with a password. Please give a password. Do not forget this password.
Password: 
Repeat password: 
address:
  mainnet: ckb1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qxe85u4
  testnet: ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf
lock_arg: 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e
lock_hash: 0xf6ea009a4829de7aeecd75f3ae6bcdbaacf7328074ae52a48456a8793a4b1cca
```

### Step 4. Get the private key for the account of Alice.

The extended private key (a private key and a chain code) is exported to the <var>alice</var> file under the current working directory. The first line in the file is the private key of the account. The second line is the chain code.

```shell {1}
ckb-cli account export --extended-privkey-path alice --lock-arg 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e
Password: 
message: "Success exported account as extended privkey to: \"alice\", please use this file carefully"
```

### Step 5. Get CKB capacity for the account of Alice.

The process of getting CKB capacity varies for the accounts on different networks (chains). 

- To get CKB capacity for an account on **DEV chain**, specify the account as the miner who receives mining rewards.

  :::note

  The CKB is mature 4 [epochs](https://docs.nervos.org/docs/basics/glossary#epoch "An epoch is a period of time for a set of blocks. ") after it is mined. In Nervos, an epoch is approximately four hours. For DEV chain, the epoch length is defined by the `genesis_epoch_length` parameter in the **dev.toml** file. For more information about shortening the epoch length for DEV chain, see Step 4 of <Link to={useBaseUrl('/docs/tools/lumos/preparation/setupsystem#install-a-ckb-node-on-dev-chain-by-using-tippy')}>Install a CKB node on DEV chain by using Tippy</Link>.

  :::  

  - If the CKB node is installed by Tippy: Assign the lock args of the account to <b>Block Assembler Lock Arg</b> in the Edit Chain form and save the changes.

    <img src={useBaseUrl("img/editchain.png")} width="50%"/>

     After the miner is specified, restart the CKB node and start the CKB miner on the Tippy dashboard.

  - If the CKB node is installed by the pre-built installer package: Assign the lock args of the account to `args` in the `block_assembler` section in ckb.toml.

    ```toml title="devnet/ckb.toml" {2-5}
      [block_assembler]
      code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"
      args = "0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e"
      hash_type = "type"
      message = "0x"
    ```

    After the miner is specified, restart the CKB node and start the CKB miner.

    To restart the CKB node, stop the CKB node by using the `ctrl + C` command in the terminal that runs the node and then start the node by executing `ckb run -C devnet`.

    To start the miner, open a new terminal, and navigate into the folder where the ckb-cli tool locates to run the command `ckb miner -C devnet`.

- To get CKB capacity for an account on **Testnet**, go to https://faucet.nervos.org and paste the Testnet address of the account in the address inputbox, then click the **Claim** button.

  50,000 CKB can be claimed for each Testnet address from the [faucet](https://faucet.nervos.org/) per 24 hours. 

### Step 6. Check the balance for the account of Alice.

To check the balance of an account on DEV chain or Testnet, execute the `ckb-cli wallet get-capacity --address <the Testnet address of the account>` command.

```shell {1}
ckb-cli wallet get-capacity --address "ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf"
immature: 8039446.8758295 (CKB)
total: 10451302.54823011 (CKB)
```

To check the balance of an account on Mainnet, execute the `ckb-cli wallet get-capacity --address <the Mainnet address of the account>` command.

### Step 7. Create an account for Bob.

```shell {1}
ckb-cli account new
Your new account is locked with a password. Please give a password. Do not forget this password.
Password: 
Repeat password: 
address:
  mainnet: ckb1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsewv2mv
  testnet: ckt1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsytj4hs
lock_arg: 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99
lock_hash: 0x34f085b5d2fa3f4ad2880713082a72864522a6ebffa1eb931b09e0407092eda5
```

### Step 8. Get the private key for the account of Bob.

The extended private key (a private key and a chain code) is exported to the <var>bob</var> file under the current working directory. The first line in the file is the private key of the account. The second line is the chain code.

```shell {1}
ckb-cli account export --extended-privkey-path bob --lock-arg 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99
Password: 
message: "Success exported account as extended privkey to: \"bob\", please use this file carefully"
```

## Get Two Accounts Provided by Genesis Issued Cells

There is another option to get two accounts. DEV chain provides the two accounts from genesis issued cells. Each account has a considerable amount of capacity that can be used  for development and testing without extra configuration or mining settings. 

### Step 1. Get the private key, lock args from the specs/dev.toml file.

The **dev.toml** file is generated when the CKB node is initialized on DEV chain. 

```toml {1,5,8,12}
# issue for random generated private key: d00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc
[[genesis.issued_cells]]
capacity = 20_000_000_000_00000000
lock.code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"
lock.args = "0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7"
lock.hash_type = "type"

# issue for random generated private key: 63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d
[[genesis.issued_cells]]
capacity = 5_198_735_037_00000000
lock.code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"
lock.args = "0x470dcdc5e44064909650113a274b3b36aecb6dc7"
lock.hash_type = "type"
```

### Step 2. Generate the addresses for the two accounts.

The addresses of the two accounts can be generated by importing the private keys by using the ckb-cli tool.

1. Save `d00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc` to the <var>genesis1</var> file.

2. Save `63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d` to the <var>genesis2</var> file.

3. Generate the addresses for the two accounts.

   ```shell {1,7}
   ckb-cli account import --privkey-path "genesis1"
   Password: 
   address:
     mainnet: ckb1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts6f6daz
     testnet: ckt1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts8vyj37
   lock_arg: 0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7
   ckb-cli account import --privkey-path "genesis2"
   Password: 
   address:
     mainnet: ckb1qyqywrwdchjyqeysjegpzw38fvandtktdhrsj8renf
     testnet: ckt1qyqywrwdchjyqeysjegpzw38fvandtktdhrs0zaxl4
   lock_arg: 0x470dcdc5e44064909650113a274b3b36aecb6dc7
   ```