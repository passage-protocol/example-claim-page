import { useContractWrite } from "wagmi";
import {
  CLAIMLIST_ADDRESSES,
  CLAIMLIST_MM_ADDRESS,
  MM_INTERFACE,
  PASSPORT_CONTRACT_ADDRESS,
  PASSPORT_INTERFACE,
  CLAIMLIST_MM_INTERFACE
} from "../utils/constants";
import {
  getClaimlistMerkleRoot,
} from "../utils/merkleTree";

export function ClaimlistModule() {
  const claimlistRoot = getClaimlistMerkleRoot(CLAIMLIST_ADDRESSES);
  console.log(claimlistRoot);

  const { write: setIsActive } = useContractWrite(
    {
      addressOrName: CLAIMLIST_MM_ADDRESS,
      contractInterface: MM_INTERFACE,
    },
    "setIsActive",
    {
      args: [true],
    }
  );

  const { write: setClaimlistRoot } = useContractWrite(
    {
      addressOrName: CLAIMLIST_MM_ADDRESS,
      contractInterface: CLAIMLIST_MM_INTERFACE,
    },
    "setClaimlistRoot",
    {
      args: [claimlistRoot],
    }
  );

  return (
    <div>
      <button onClick={() => setIsActive()}>
        Enable Claimlist Claim
      </button>
      <button onClick={() => setClaimlistRoot()}>Set Claimlist Root</button>
    </div>
  );
}
