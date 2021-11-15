---
id: ckb-cli-wallet
title: Asset Management
---

## `wallet` Subcommands

|Method|Description|
|---|---|
|transfer          |Transfer capacity to an address(can contain data)|
|get-capacity      |Obtain capaciry by lock script hash, address, lock-arg or pubkey|
|get-live-cells    |Obtain live cells by lock/type/code hash|
|db-metrics        |显示索引数据库指标|
|top-capacity      |Show top n capacity owned by lock-script has|

---
### `transfer``

Transfer capacity to an address(can contain data).

> Usage: `wallet transfer [FLAGS] [OPTIONS] --to-address <to-address> --capacity <capacity> --tx-fee <tx-fee>`

request:
```shell

```

output:
```shell

```

---

### `get-capacity`

Obtain capacity by lock-script hash, address, lock-arg or pubkey.

> Usage: wallet get-capacity --address <address>

request:
```shell
ckb-cli wallet get-capacity --lock-arg 0x580b244d29a10c99c564b53756a071d0a0c6dd51
```

output:
```shell
total: 0.0 (CKB)
```

---

### `get-live-cells`

Obtain live cells by lock/type/code hash