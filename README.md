# Example Passport Claim Page

Built from [WAGMI Next.js example](https://github.com/tmm/wagmi/tree/main/examples/next)

Example wallet connect & claim functionality for a Passport membership NFT contract.

Uses [WAGMI](https://wagmi.sh) for wallet connection & contract write hooks.

See [Passage Docs](https://docs.passage.xyz) for complete documentation.

## Startup

Create an `.env` file in the root following `.env.example`

Add your Passport Contract address `PASSPORT_CONTRACT_ADDRESS` in `constant.tsx`

Change chain in `_app.tsx` `configureChains` hook to the chain where your Passport contract is

Install:

```
yarn install
```

Run:

```
yarn dev
```
