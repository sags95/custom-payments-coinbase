This is a Next.js 13 example using Swell and Coinbase Commerce. It's primarily meant to demonstrate creating a custom payment method and integrating Coinbase Checkout into a headless storefront. While it can be used as a storefront starter kit, not all components are functional beyond those that are covered in the example.

<img width="1492" alt="Screenshot 2023-05-31 at 1 35 17 PM" src="https://github.com/sags95/custom-payments-coinbase/assets/9522171/976b3879-f9c8-435b-a640-0e748505a916">


## Getting Started

- Ensure you've signed up for a [Swell](https://swell.store/signup#ph_id=185a794f7f5fd7-0594d5953bdbc8-17525635-4da900-185a794f7f6295f) store
    - Add a handful of products and categories to your Swell store.
- Sign up for a [Coinbase Commerce](https://www.coinbase.com/commerce#flexible-plans) account
    - Follow the steps [here](https://docs.cloud.coinbase.com/commerce/docs/pay-button-adding#whitelist-your-website) to whitelist your localhost url

Create a `.env.local` file using the `.env.template`

Run `npm install` to install dependencies

You can then run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

