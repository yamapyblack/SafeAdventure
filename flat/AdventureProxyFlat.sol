// Sources flattened with hardhat v2.6.4 https://hardhat.org

// File contracts/AdventureProxy.sol

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

interface IRarity {
    function adventure(uint _summoner) external;
    function adventurers_log(uint _summoner) external view returns(uint);
}

/**
 * @title AdventureProxy
 */
contract AdventureProxy {
    IRarity rarity = IRarity(0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb);

    function adventuresLog(uint[] calldata _summonerIds) external view returns(bool) {
        uint len = _summonerIds.length;
        for (uint i = 0; i < len; i++) {
            if(block.timestamp <= rarity.adventurers_log(_summonerIds[i])){
                return false;
            }
        }
        return true;
    }

    function adventures(uint[] calldata _summonerIds) external {
        uint len = _summonerIds.length;
        for (uint i = 0; i < len; i++) {
            rarity.adventure(_summonerIds[i]);
        }
    }
}
