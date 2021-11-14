---
id: ckb-cli-dao
title: Nervos DAO Operations
---

## `dao` Subcommands

|Method|Description|
|---|---|
|deposit                  |deposit ckb capacity into NervosDAO|
|prepare                  |prepare specified cells from NervosDAO|
|withdraw                 |Withdraw specified cells from NervosDAO |
|query-deposited-cells    |Query NervosDAO deposited capacity by lock script hash or address|
|query-prepared-cells     |Query NervosDAO prepared capacity by lock script hash or address |
---

### `deposit`

Deposit CKB capacity into NervosDAO

> Usage: dao deposit [OPTIONS] --tx-fee <tx-fee> --capacity <capacity> 

request:
```shell
ckb-cli dao deposit [OPTIONS] --tx-fee <tx-fee> --capacity <capacity> --privkey-path <privkey-path>
```

output:
```shell

```

### `prepare`

Prepare specified cells from NervosDAO

>Usage: 
