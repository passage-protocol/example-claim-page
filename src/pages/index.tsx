import * as React from "react";
import { useAccount, useNetwork } from "wagmi";

import { Account, Connect, NetworkSwitcher } from "../components";
import { Claim } from "../components/Claim";
import { ClaimlistModule } from "../components/ClaimlistModule";
import { PricedMintModule } from "../components/PricedMintModule";
import { useIsMounted } from "../hooks";

function Page() {
  const isMounted = useIsMounted();
  const { data } = useAccount();
  const { activeChain } = useNetwork();

  return (
    <>
      <Connect />
      {isMounted && data?.address && (
        <>
          <Account />
          <NetworkSwitcher />
          {activeChain && !activeChain.unsupported && (
            <>
              <Claim accountAddress={data.address} />
              <ClaimlistModule />
              <PricedMintModule />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Page;
