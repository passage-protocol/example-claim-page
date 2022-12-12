import { useContractWrite } from "wagmi";
import {
  PRICEDMINT_MM_ADDRESS,
  PASSPORT_CONTRACT_ADDRESS,
  PASSPORT_INTERFACE,
  MM_INTERFACE,
} from "../utils/constants";

export function PricedMintModule() {

  const { write: setIsActive } = useContractWrite(
    {
      addressOrName: PRICEDMINT_MM_ADDRESS,
      contractInterface: MM_INTERFACE,
    },
    "setIsActive",
    {
      args: [true],
    }
  );

  return (
    <div>
      <button onClick={() => setIsActive()}>Enable PricedMint Claim</button>
    </div>
  );
}
