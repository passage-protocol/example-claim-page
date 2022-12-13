import { utils } from "ethers";
import { useContractWrite } from "wagmi";
import {
  PASSPORT_CONTRACT_ADDRESS,
  PASSPORT_INTERFACE,
  CLAIMLIST_ADDRESSES,
  MINT_PRICE
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
        0, // assuming PricedMint module is index 0
        [0],
        [1],
        [],
        "0x"
      ],
      overrides: { value: MINT_PRICE }, // claim price (if applicable)
    }
  );

  const supplementalArgs = utils.defaultAbiCoder.encode(["uint", "uint"], [1, 1]);
  const { write: claimClaimlist } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "claim",
    {
      args: [
        1, // assuming ClaimList module is index 1
        [0],
        [1],
        getClaimlistMerkleProof(CLAIMLIST_ADDRESSES, accountAddress, "1"),
        supplementalArgs
      ], // proof, maximum claim amount (as stored in merkle tree), claim amount on transaction
      overrides: { value: MINT_PRICE }, // claim price
    }
  );

  return (
    <div>
      <button onClick={() => claimPricedMint()}>Claim via PricedMint</button>
      <button onClick={() => claimClaimlist()}>Claim via ClaimList</button>
    </div>
  );
}
