import { useContractWrite } from "wagmi";
import {
  CLAIMLIST_ADDRESSES,
  PASSPORT_CONTRACT_ADDRESS,
  PASSPORT_INTERFACE,
} from "../utils/constants";
import {
  getClaimlistMerkleProof,
  getClaimlistMerkleRoot,
} from "../utils/merkleTree";

export function ClaimList({ accountAddress }: { accountAddress: string }) {
  const claimlistRoot = getClaimlistMerkleRoot(CLAIMLIST_ADDRESSES);

  const { write: setClaimlistClaimEnabled } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "setClaimlistClaimEnabled",
    {
      args: [true],
    }
  );

  const { write: setClaimlistRoot } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "setClaimlistRoot",
    {
      args: [claimlistRoot],
    }
  );

  const { write: claimClaimlist } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "claimClaimlist",
    {
      args: [
        getClaimlistMerkleProof(CLAIMLIST_ADDRESSES, accountAddress, "2"),
        2,
        2,
      ], // proof, maximum claim amount (as stored in merkle tree), claim amount on transaction
    }
  );

  return (
    <div>
      <button onClick={() => setClaimlistClaimEnabled()}>
        Enable Claimlist Claim
      </button>
      <button onClick={() => setClaimlistRoot()}>Set Claimlist Root</button>
      <button onClick={() => claimClaimlist()}>Claim Claimlist</button>
    </div>
  );
}
