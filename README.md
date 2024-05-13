# prePO Tech Demo

A simple **demo for [prePO](https://prepo.io), built by [Pradeep](https://www.linkedin.com/in/pradeepsekarg), to showcase transfer of a custom `ERC-20` token, to a specified wallet on `Holesky testnet`.** `prePO` is a decentralized trading platform allowing anyone to gain synthetic exposure to any pre-IPO company or pre-token crypto project. It's mission is to democratize pre-public investing, transforming a world of financial exclusion into a world of permissionless access.

## Table of Contents

- [Brief Overview](#prepo-tech-demo)
- [Setup Metamask](#setup-metamask)
  - [Add Holesky Testnet](#add-holesky-testnet)
  - [Add Custom Token](#add-custom-token)
  - [Running the App](#running-the-app)
- [The Coding Journey](#the-coding-journey)
  - [Boilerplate Setup](#boilerplate-setup)
  - [Required Features](#required-features)
    - [Connect to `Holesky Testnet`](#connect-to-holesky-testnet-)
    - [Wallet Address and Balance](#wallet-address-and-balance-)
    - [Transfer some `FAKE_ETH`](#transfer-some-fake_eth-)
    - [Clean, Responsive UI/UX](#clean-responsive-uiux-)
  - [Improvements](#improvements)
    - [Loading / Status Indicators](#loading--status-indicators)
    - [Transfer Form / Validation](#transfer-form--validation)
  - [More Time](#more-time)
    - [Support for mobile wallets](#support-for-mobile-wallets)
    - [Stricter balance validation](#stricter-balance-validation)
    - [Programmatically disconnect](#programmatically-disconnect)
- [Available Scripts](#available-scripts)
  - [`npm run dev`](#npm-run-dev)
  - [`npm run build`](#npm-run-build)
  - [`npm run start`](#npm-run-start)

## Setup Metamask

Set up a new [MetaMask](https://metamask.io/) wallet (or set up a new browser profile if you already have `MetaMask` installed). You can add a custom network manually by importing the desired network's RPC information. Follow the steps below to do this for `Holesky testnet`:

> [!TIP]
> The process of adding `Holesky testnet` to your wallet may be slightly different depending on the wallet you are using. The steps below are for `MetaMask`. If you are using a different wallet, there is most likely a similar process you can follow.

### Add Holesky Testnet

- Open `Metamask`, and in the top left corner click on the 'Networks' list, then click on the 'Add network' button.

- You will see a list of available networks. Scroll to the bottom, then click on the 'Add a network manually' button.

- In the next step you need to enter `Holesky`'s RPC information (provided below), and then click the 'Save' button.

- You have now successfully added `Holesky testnet`! **Switch to it, by selecting it from the available networks list.**

> [!NOTE]
>
> **Holesky RPC**
>
> Chain ID: `17000`
>
> Currency symbol: `ETH`
>
> Network name: `Holesky Testnet`
>
> Block explorer URL: `https://holesky.etherscan.io`
>
> Network URL: `https://ethereum-holesky.publicnode.com`

### Add Custom Token

- Open `Metamask`, and navigate to the 'Tokens' tab. Scroll to the bottom, then click on the 'Import tokens' link.

- Navigate to the 'Custom token' tab, enter the custom token's contract address, then click on the 'Next' button.

- If the remaining information is not auto-filled, enter the symbol and decimal, then click on the 'Import' button.

- You have now successfully added `FAKE_WETH`! **[Email me](mailto:pradeep87sekar@gmail.com) your test wallet address to receive some `FAKE_WETH`**.

- I will send you a small amount of `Holesky ETH` and `FAKE_WETH`, which can be used to test the `ERC-20` transfers.

> [!NOTE]
>
> **Token details**
>
> Contract address: `0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5`
>
> Symbol: `FAKE_WETH`
>
> Decimal: `18`

![Screenshot of Metamask home page](/docs/screens/prepo-web3-wagmi-viem-tech-demo_metamask_1600x900.png "Screenshot of Metamask home page")

### Running the App

Install the latest `LTS` version of [Node](https://nodejs.org/en/) and its package manager (which in `localhost` were, `v18.18.1` and `9.8.1` at the time of writing this document). Once `Node` is installed on your machine, open the terminal or command prompt at the root of the project directory, and run the commands provided below. Then **open [http://localhost:3000](http://localhost:3000) in your browser to see the app (main home page)** run on the local development server.

```bash
npm install
npm run dev
```

![Screenshot of the main home page](/docs/screens/prepo-web3-wagmi-viem-tech-demo_home-page_1600x900.png "Screenshot of the main home page")

## The Coding Journey

In tackling this challenge, one of the key rules was to **get it done within a tight four-hour window** (not including the time it took to write this document). So, I've laid out my brainstorming and coding journey, outlining the necessary features I whipped up within that time frame, and the improvements I made along the way, including the nitty-gritty of how long each feature took to cook up.

### Boilerplate Setup

<kbd>Time taken: ~1.5 hours</kbd>

In my recent projects, **I've been diving deep into `Next.js` with `React`, and I cloned one that came with `CSS Modules`, `Wagmi`, and `Viem` as a boilerplate.** The perk? Basic setup and a seamless CI/CD pipeline already in place, ready to connect to [Vercel](https://vercel.com/) with minimal fuss. Plus, a handful of UI and layout components to jumpstart the design.

But here's the kicker, many of these projects also used `Tailwind` (its `SASS` version alongside `CSS Modules`), so I had to spend some time stripping it out. Unexpectedly, I also hit a snag installing the latest version of `Wagmi`, forcing me to revert to an older version, but one that still contained its newer API changes.

> [!CAUTION]
> You can track the above issue with `Wagmi`, that caused the installation with `npm` to hang at https://github.com/wevm/wagmi/issues/3907.

> [!NOTE]
> The `Vercel` production domain for the `main` branch is set up at https://prepo-tech-demo-pradeep.vercel.app.

![Screenshot of deployments on Vercel](/docs/screens/prepo-web3-wagmi-viem-tech-demo_nextjs-vercel_1600x900.png "Screenshot of deployments on Vercel")

### Required Features

<kbd>Time taken: ~1.5 hours</kbd>

> [!NOTE]
> All **required features** (listed below), that were to be tackled as part of this challenge, **have been completed** 🚀

#### Connect to `Holesky Testnet` ✅

- Users can connect their wallet (i.e. `Metamask`) to `Holesky Testnet` by clicking on the 'Connect wallet' button.

#### Wallet Address and Balance ✅

- Once connected, the description changes to show the address, e.g. 'Connected: `0xad917d6a609…4d955ddf525`'.

- Once connected, the list of available tokens updates to show on-chain balances, e.g. `2234.117457 FAKE_WETH`.

#### Transfer some `FAKE_ETH` ✅

- Users can transfer specified `FAKE_ETH` to a 'Receiving wallet' by clicking on the 'Transfer `FAKE_WETH`' button.

![Screenshot of transfer widget](/docs/screens/prepo-web3-wagmi-viem-tech-demo_transfer-widget_1600x900.png "Screenshot of transfer widget")

#### Clean, Responsive UI/UX ✅

- The UI embodies a sophisticated dark theme, drawing inspiration from the sleek aesthetics of [shadcn/ui](https://ui.shadcn.com).

- Additionally, the color pallete has been personalized with influence from the refined hues of [app.prepo.io](https://app.prepo.io).

![Screenshot of loading skeleton](/docs/screens/prepo-web3-wagmi-viem-tech-demo_loading-skeleton_1600x900.png "Screenshot of loading skeleton")

### Improvements

<kbd>Time taken: ~1 hour</kbd>

#### Loading / Status Indicators ✅

- Dynamic components in the UI gracefully display either a skeleton, or a spinner, to signal pending status.

#### Transfer Form / Validation ✅

- While the original requirement was to use a preset wallet / amount, users can change it in the transfer form.

- The transfer form also performs validation on whether the 'Receiving wallet' and 'Transfer amount' are valid.

![Screenshot of form validation](/docs/screens/prepo-web3-wagmi-viem-tech-demo_form-validation_1600x900.png "Screenshot of form validation")

### More Time?

When it comes to building something awesome, there's always room for a little extra sparkle, whether it's jazzing up the UI/UX, fine-tuning functionality, or giving your code a makeover to make it as clear as crystal. Below, I've jotted down a few fabulous improvements I had in mind, but, alas, time slipped through my fingers 😔

#### Support for mobile wallets

- While the layout is responsive and works well on mobile, I used the default [`injected`](https://wagmi.sh/core/api/connectors/injected) connector, which meant it doesn't work well with `Metamask` on mobile. The ideal scenario would have been to use the [`metaMask`](https://wagmi.sh/core/api/connectors/metaMask) connector, or better yet, use a more comprehensive solution like [`walletConnect`](https://wagmi.sh/core/api/connectors/walletConnect), which could have supported a wide variety of mobile wallets.

#### Stricter balance validation

- The form validation at the moment uses the formatted (`string`) value of the `FAKE_WETH` balance. This is not very accurate solution, since it only considers the first 6 decimals and can lead to plenty of dust being left over. The better solution would have been to use the raw unformatted (`bigint`) value instead. I did have a `@TODO` in the code to change it towards the end, but didn't get the time action it.

#### Programmatically disconnect

- Wagmi's hooks at the moment uses [`shimDisconnect`](https://wagmi.sh/core/api/connectors/safe#shimdisconnect) which simulates the disconnect behavior by keeping track of connection status in storage since `Metamask` does not support programmatic disconnect. Surprisingly [`wallet_revokePermissions`](https://github.com/MetaMask/core/pull/1889) RPC method was just added to `metamask/core`, and ideally It'd been nice to implement it, even if it was using a temporary hack / custom hook.

## Available Scripts

This is a [Next.js](https://nextjs.org/) project bootstrapped with [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). **At the root of the project directory, you can execute the following commands** (listed below) via the terminal or command prompt.

### `npm run dev`

Run the `Next.js` app locally in **development mode**. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### `npm run build`

Build the `Next.js` app locally for **production usage**, with a detailed breakdown of the optimized production build.

### `npm run start`

Once built locally, start a `Next.js` **production server**. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
