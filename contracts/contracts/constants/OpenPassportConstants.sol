//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

library OpenPassportConstants {
    uint256 constant PROVE_RSA_NULLIFIER_INDEX = 0;
    uint256 constant PROVE_RSA_REVEALED_DATA_PACKED_INDEX = 1;
    uint256 constant PROVE_RSA_OLDER_THAN_INDEX = 4;
    uint256 constant PROVE_RSA_PUBKEY_DISCLOSED_INDEX = 6;
    uint256 constant PROVE_RSA_FORBIDDEN_COUNTRIES_LIST_PACKED_DISCLOSED_INDEX = 38;
    uint256 constant PROVE_RSA_OFAC_RESULT_INDEX = 40;
    uint256 constant PROVE_RSA_COMMITMENT_INDEX = 41;
    uint256 constant PROVE_RSA_BLINDED_DSC_COMMITMENT_INDEX = 42;
    uint256 constant PROVE_RSA_CURRENT_DATE_INDEX = 43;
    uint256 constant PROVE_RSA_USER_IDENTIFIER_INDEX = 49;
    uint256 constant PROVE_RSA_SCOPE_INDEX = 50;

    uint256 constant PROVE_ECDSA_NULLIFIER_INDEX = 0;
    uint256 constant PROVE_ECDSA_REVEALED_DATA_PACKED_INDEX = 1;
    uint256 constant PROVE_ECDSA_OLDER_THAN_INDEX = 4;
    uint256 constant PROVE_ECDSA_PUBKEY_DISCLOSED_INDEX = 6;
    uint256 constant PROVE_ECDSA_FORBIDDEN_COUNTRIES_LIST_PACKED_DISCLOSED_INDEX = 18;
    uint256 constant PROVE_ECDSA_OFAC_RESULT_INDEX = 20;
    uint256 constant PROVE_ECDSA_COMMITMENT_INDEX = 21;
    uint256 constant PROVE_ECDSA_BLINDED_DSC_COMMITMENT_INDEX = 22;
    uint256 constant PROVE_ECDSA_CURRENT_DATE_INDEX = 23;
    uint256 constant PROVE_ECDSA_USER_IDENTIFIER_INDEX = 29;
    uint256 constant PROVE_ECDSA_SCOPE_INDEX = 30;

    uint256 constant DSC_BLINDED_DSC_COMMITMENT_INDEX = 0;
    uint256 constant DSC_MERKLE_ROOT_INDEX = 1;

}