---
id: ckb-cli-account
title: Account Management
---

## Available Commands

Use `--help` to view the available commands

```shell
# account help doc
ckb-cli account --help
```

<details>
<summary>Click to view detailed output</summary>

```
Manage accounts

USAGE:
    ckb-cli account [FLAGS] [OPTIONS] [SUBCOMMAND]

FLAGS:
        --no-color         Do not hightlight(color) output json
        --debug            Display request parameters
        --wait-for-sync    Ensure the index-store sybchronizes completely before command being excuted
    -h, --help             Prints help information
    -V, --version          Prints version information


SUBCOMMANDS:
    list                List all accounts. There are two kinds of account item indicated by `source` field:
                        When `source` is "Local File System" means the account is stored in json keystore file, 
                        the output fields are:
                       * lock_arg: The blake2b160 hash of the public key.
                       * lock_hash: The lock script hash of secp256k1_blake160_sighash_all lock (See [1]).
                       * has_ckb_pubkey_derivation_root_path: The ckb publick key derivation root path (m/44'/309'/0') 
                       is stored so that password is not required to do public key derivation.
                       * address: The Mainnet/Testnet addresses of secp256k1_blake160_sighash_all lock (See [1]).
                        When `source` is "[plugin]: xxx_keysotre_plugin" means the account is stored in 
                        keystore plugin (Ledger plugin like [2]). If the account metadata is imported 
                        by `ckb-cli account import-from-plugin` the output fields are just like "Local File System". 
                        If the account is not imported, the output fields are:
                       * account-id: The account id used to import the account metadata from plugin.
                        [1]: https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c
                        [2]: https://github.com/obsidiansystems/ckb-plugin-ledger

    new                 Create a new account and print related information.
    import              Import an unencrypted private key from `<privkey-path>` and create a new account.
    import-from-plugin  Import an account from keystore plugin
    import-keystore     Import key from encrypted keystore json file and create a new account.
    update              Update password of an account
    upgrade             Upgrade an account to latest json format
    export              Export master private key and chain code as hex plain text (USE WITH YOUR OWN RISK)
    bip44-addresses     Extended receiving/change Addresses (see: BIP-44)
    extended-address    Extended address (see: BIP-44)
    remove              Print information about how to remove an account
    help                Prints this message or the help of the given subcommand(s)
```
</details>

## <code>account</code> Subcommands

|command|description|
|---|---|
|[list](#list)                |Show accounts list|
|[new](#new)                 |Creat a new account and print the relevant information|
|[import](#import)              |Import an unencrypted private key from `<privkey-path>` and create a new account|
|[import-from-plugin]           |Import an account from keystore plugin|
|[import-keystore](#import-keystore)     |Import key from encrypted keystore json file and create a new account.|
|[update](#update)              |Update password of an account|
|[upgrade]                      |Upgrade an account to latest json format|
|[export](#export)              |Export master private key and chain code as hex plain text (USE WITH YOUR OWN RISK)|
|[bip44-addresses](#bip44-addresses)     |Extended receiving/change Addresses (see: BIP-44)|
|[extended-address](#extended-address)    |Extended address (see: BIP-44)|
|[remove]                       |Print information about how to remove an account|

---

### `list`

Display the list of accounts

> Usage：`ckb-cli account list [FLAGS] [OPTIONS]`

```shell
ckb-cli account list --output-format json
```

<details>
<summary>Click for detailed output</summary>

```json
[
  {
    "#": 0,
    "address": {
      "mainnet": "ckb1qyqw5ps6f323lqhwzdcg0jy74ums73dssqdsmxfwet",
      "testnet": "ckt1qyqw5ps6f323lqhwzdcg0jy74ums73dssqdsxrh34h"
    },
    "lock_arg": "0xea061a4c551f82ee137087c89eaf370f45b0801b",
    "lock_hash": "0x22c596304fa49bd37d21a3eeb94bb572e69e9e18e329c251e42b91289721bf1e"
  },
  {
    "#": 1,
    "address": {
      "mainnet": "ckb1qyqwn2ajzmve7vhmmn0qmq33gvmzacmlr4vs2q3x0w",
      "testnet": "ckt1qyqwn2ajzmve7vhmmn0qmq33gvmzacmlr4vsh90erj"
    },
    "lock_arg": "0xe9abb216d99f32fbdcde0d823143362ee37f1d59",
    "lock_hash": "0xb8b81481d0ce46444d52b9bd23c429111029b0f38349ba9374db1b5be74de1a4"
  },
]
```

</details>

---

### `new`

Generate a new address

> Usage：`ckb-cli account new [FLAGS] [OPTIONS]`

request：
```shell
ckb-cli account new

Your new account is locked with a password. Please give a password. Do not forget this password.
Password: # type your own password
Repeat password: # retype the password you just entered
```

output：
```
address:
  mainnet: ckb1qyqgxjh9jk4fyxy3mu9g4p5nvgnmvj8h8lmqh70qkn
  testnet: ckt1qyqgxjh9jk4fyxy3mu9g4p5nvgnmvj8h8lmq2m3l60
lock_arg: 0x834ae595aa921891df0a8a86936227b648f73ff6
lock_hash: 0x90b367c3086ad34412d795081c9be789973680ffc2586c0b56f3330aa9d8851e
```

---
### `import`

Import an unencrypted private key from `<privkey-path>` and create a new account

> Usage：`ckb-cli account import --extended-privkey-path <extended-privkey-path> --output-format <output-format> --privkey-path <privkey-path>`

request：
```
ckb-cli account import --privkey-path wallet1
```
* wallet1 文件中为一段 256bit 的随机数

output：
```shell
Password: # enter the password
Repeat password: # re-enter the password
address:
  mainnet: ckb1qyqrku7facdusmm6dgcfv4rs237pwqt27jnsuf9ye7
  testnet: ckt1qyqrku7facdusmm6dgcfv4rs237pwqt27jnspvmm4z
lock_arg: 3b73c9ee1bc86f7a6a30965470547c17016af4a7
```
---
### `import-from-plugin`

Import an account from keystore plugin

> Usage: `account import-from-plugin --account-id <account-id>` 
  #The account id, in hex format, can be found in account list

request:
```shell
ckb-cli account import-from-plugin --account-id 
```

output:
```shell

```
---
### `import-keystore`

从加密的 keystore json 文件导入密钥，并创建一个新帐户

> Usage：`ckb-cli account import-keystore --path <path>`

request：
```shell

```

output:
```shell

```

---

### `update`

Update password of an account

> Usage：`ckb-cli account update --lock-arg <lock-arg>`

request：
```shell
ckb-cli account update --lock-arg 0xc4841b76021839360b4b
bea51a290150b268abab
```

output：
```shell
Old password: # enter the old password
New password:  # enter the new password
Repeat password:  # re-enter the new password
status: success
```
---

### `upgrade`

Upgrade an account to latest json format

> Usage: `account upgrade --lock-arg <lock-arg>`

request:
```shell
ckb-cli account upgrade --lock-arg 0x7ec842a42136c2508a9bad1a1cee1763af166ed8
```

output:
```shell
Password: #enter the password
status: success
```

---

### `export`

Export privkey with `lock arg`

> Usage：`ckb-cli account export [FLAGS] [OPTIONS] --extended-privkey-path <extended-privkey-path> --lock-arg <lock-arg>`

- `--extended-privkey-path` 后跟导出的文件位置和文件名
- `--lock-arg 0x834ae5...` 导出 lock-arg 对应值的私钥

request：
```shell
ckb-cli account export --extended-privkey-path wallet --lock-arg 0x834ae595aa921891df0a8a86936227b648f73ff6 # 导出私钥到当前路径的 wallet 文件
# 输入密码
Password:
Success exported account as extended privkey to: "wallet", please use this file carefully
```

output：
```shell
cat wallet #使用 cat 命令查看文本，其中第 1 行为私钥

97de6c08b3dd8f859d9fc1efed4301b0c05b6839ac3a097b80bfcfd7108e9fc6
a353ac6cf05bef04be186ad788a4512081c32f501a59810927398c6e448ff00c
```
---

### `bip44-addresses`

> Usage：`ckb-cli account bip44-addresses --change-length <change-length> --from-change-index <from-change-index> --from-receiving-index <from-receiving-index> --lock-arg <lock-arg> --output-format <output-format> --receiving-length <receiving-length>`

---

### `extended-address`

> Usage：` ckb-cli account extended-address --lock-arg <lock-arg> --path <path> `

request:
```shell
ckb-cli account extended-address --lock-arg 0x7ex842a42136c2508a9bad1a1cee1763af166ed8
```

output:
```shell
Password: # enter the password
address:
  mainnet: ckb1qyq8ajzz5ssndsjs32d66xsuactk8tckdmvq32fkcx
  testnet: ckt1qyq8ajzz5ssndsjs32d66xsuactk8tckdmvqv0hf56
lock_arg: 0x7ec842a42136c2508a9bad1a1cee1763af166ed8
```



---