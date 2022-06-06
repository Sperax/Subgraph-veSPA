# veSPA Subgraph
This subgraph includes the following events:

-------
User level:
- Creating Lock by user.
- Increasing SPA stake per user.
- Increasing lock time per user.
- Initiating Cool Down per user.
- Withdrawing assets per user. 
-------
Analytics level:
- Total SPA Supply (Per Event & Per Day).
- Total veSPA Supply (Per event & Per Day).
- Checkpoints made.
--------
Rewards Level:
- Total distributed Rewards per week.
- Claimed rewards per user.
## Links
The subgraph is available on:
- ETH L1 via [this link](https://thegraph.com/hosted-service/subgraph/sperax/vespa-eth).
- Arbitrum L2 via: [this link](https://thegraph.com/hosted-service/subgraph/sperax/vespa-arbione).

## Deployement
To deploy the subgraphs on a [local node](https://github.com/graphprotocol/graph-node) here are the following commands:
- For ETH L1 network
  
```
 yarn codegen-l1
 yarn create-local-l1
 yarn deploy-local-l1
 ```
 - For Arbitrum L2 Network
  ```
 yarn codegen-l2
 yarn create-local-l2
 yarn deploy-local-l2
 ```