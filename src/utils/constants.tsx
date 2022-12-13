import { Interface } from "ethers/lib/utils";
import { ClaimlistAddress } from "./merkleTree";
import { ethers } from "ethers";

// contract address of you Passport
export const PASSPORT_CONTRACT_ADDRESS = "REPLACE_ME";
export const CLAIMLIST_MM_ADDRESS = "REPLACE_ME";
export const PRICEDMINT_MM_ADDRESS = "REPLACE_ME";

// human readable interface
// support pricedmint & claimlist
export const PASSPORT_INTERFACE = new Interface([
  "function claim(uint256 mintingModuleIndex, uint256[] calldata tokenIds, uint256[] calldata mintAmounts, bytes32[] calldata proof, bytes calldata data) external payable"
]);

export const MM_INTERFACE = new Interface([
  "function setIsActive(bool _isActive) external",
  "function setMintPrice(uint256 _mintPrice) external",
  "function setMaxClaim(uint256 _maxClaim) external"
]);

export const CLAIMLIST_MM_INTERFACE = new Interface([
  "function setClaimlistRoot(bytes32 _claimlistRoot) external"
]);

export const MINT_PRICE = ethers.utils.parseEther("0.1"); // minting price

// addresses & maximum claim amount per address
// can be publicly because the security lies with the root being set by you
export const CLAIMLIST_ADDRESSES: ClaimlistAddress[] = [
  {
    address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    maximumClaimAmount: "1",
  },
  {
    address: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    maximumClaimAmount: "1",
  },
  {
    address: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
    maximumClaimAmount: "1",
  },
  {
    address: "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
    maximumClaimAmount: "1",
  },
  {
    address: "0x41B69076873C5e02C81f750504dc0d22e138c25d",
    maximumClaimAmount: "1",
  },
];
