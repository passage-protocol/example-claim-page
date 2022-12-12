import { Interface } from "ethers/lib/utils";
import { ClaimlistAddress } from "./merkleTree";

// contract address of you Passport
export const PASSPORT_CONTRACT_ADDRESS = "0x525C7063E7C20997BaaE9bDa922159152D0e8417"; // currently pointed at local
export const CLAIMLIST_MM_ADDRESS = "0x4bb279a97dA674b94F5b79c9fE5c44Cf5896DCef";
export const PRICEDMINT_MM_ADDRESS = "0xdE1FB1BE65a44C73761ebDABb10c4b101bc819c7";

// human readable interface
// support pricedmint & claimlist
export const PASSPORT_INTERFACE = new Interface([
  "function claim(uint256 mintingModuleIndex, uint256[] calldata tokenIds, uint256[] calldata mintAmounts, bytes32[] calldata proof, bytes calldata data) external payable",
  "function setClaimEnabled(bool _claimEnabled)",
  "function setClaimlistClaimEnabled(bool _claimEnabled)",
  "function setClaimlistRoot(bytes32 _claimlistRoot)",
  "function claimClaimlist(bytes32[] calldata _proof, uint256 _maxAmount, uint256 _claimAmount) external payable",
]);

export const MM_INTERFACE = new Interface([
  "function setIsActive(bool _isActive) external",
  "function setMintPrice(uint256 _mintPrice) external",
  "function setMaxClaim(uint256 _maxClaim) external"
]);

export const CLAIMLIST_MM_INTERFACE = new Interface([
  "function setClaimlistRoot(bytes32 _claimlistRoot) external"
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
