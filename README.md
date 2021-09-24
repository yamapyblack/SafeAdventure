# SafeAdventure
You can adventure without wasting gas for the rarity game.

https://ftmscan.com/address/0x396162D8b284306fb6142cB42Ec957F08cB9D994

You can check that your summoners can adventure.

```
    function adventuresLog(uint[] calldata _summonerIds) external view returns(bool) {
        uint len = _summonerIds.length;
        for (uint i = 0; i < len; i++) {
            if(block.timestamp <= rarity.adventurers_log(_summonerIds[i])){
                return false;
            }
        }
        return true;
    }
```
