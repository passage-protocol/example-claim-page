import { ethers, utils } from "ethers";
import { useContractWrite } from "wagmi";
import {
  PASSPORT_CONTRACT_ADDRESS,
  PASSPORT_INTERFACE,
  CLAIMLIST_ADDRESSES
} from "../utils/constants";
import {
  getClaimlistMerkleProof,
} from "../utils/merkleTree";

export function Claim({ accountAddress }: { accountAddress: string }) {

  const { write: claimPricedMint } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "claim",
    {
      args: [
        0,
        [0],
        [1],
        [],
        "0x"
      ],
      overrides: { value: ethers.utils.parseEther("0.1") }, // claim price (if applicable)
    }
  );

  const supplementalArgs = utils.defaultAbiCoder.encode(["uint", "uint"], [2, 2]);
  const { write: claimClaimlist } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "claim",
    {
      args: [
        0,
        [0],
        [2],
        getClaimlistMerkleProof(CLAIMLIST_ADDRESSES, accountAddress, "2"),
        supplementalArgs
      ], // proof, maximum claim amount (as stored in merkle tree), claim amount on transaction
      overrides: { value: ethers.utils.parseEther("0.2") }, // claim price * 2 (claim amt)
    }
  );

  return (
    <div>
      <button onClick={() => claimPricedMint()}>Claim via PricedMint</button>
      <button onClick={() => claimClaimlist()}>Claim via ClaimList</button>
    </div>
  );
}
