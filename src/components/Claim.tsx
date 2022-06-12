import { ethers } from "ethers";
import { useContractWrite } from "wagmi";
import {
  PASSPORT_CONTRACT_ADDRESS,
  PASSPORT_INTERFACE,
} from "../utils/constants";

export function Claim() {
  const { write: enableClaim } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "setClaimEnabled",
    {
      args: [true], // enable claim
    }
  );

  const { write: claim } = useContractWrite(
    {
      addressOrName: PASSPORT_CONTRACT_ADDRESS,
      contractInterface: PASSPORT_INTERFACE,
    },
    "claim",
    {
      args: [1], // claim amount
      overrides: { value: ethers.utils.parseEther("0.01") }, // claim price (if applicable)
    }
  );

  return (
    <div>
      <button onClick={() => enableClaim()}>Enable claim</button>
      <button onClick={() => claim()}>Claim</button>
    </div>
  );
}
