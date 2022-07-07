import { Interface } from "ethers/lib/utils";
import { ClaimlistAddress } from "./merkleTree";

// contract address of you Passport
export const PASSPORT_CONTRACT_ADDRESS = "REPLACE_ME";

// human readable interface
export const PASSPORT_INTERFACE = new Interface([
  "function claim(uint256 _amount) external payable",
  "function setClaimEnabled(bool _claimEnabled)",
  "function setClaimlistClaimEnabled(bool _claimEnabled)",
  "function setClaimlistRoot(bytes32 _claimlistRoot)",
  "function claimClaimlist(bytes32[] calldata _proof, uint256 _maxAmount, uint256 _claimAmount) external payable",
]);

// addresses & maximum claim amount per address
// can be publicly because the security lies with the root being set by you
export const CLAIMLIST_ADDRESSES: ClaimlistAddress[] = [
  {
    address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    maximumClaimAmount: "2",
  },
  {
    address: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    maximumClaimAmount: "2",
  },
  {
    address: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
    maximumClaimAmount: "2",
  },
  {
    address: "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
    maximumClaimAmount: "2",
  },
  {
    address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    maximumClaimAmount: "2",
  },
];
