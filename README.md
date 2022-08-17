# thirdweb-authentication
Web3 Client and Server authentication on NextJS using [Thirdweb's Authentication SDK](https://portal.thirdweb.com/auth)

Here we implement the login with wallet flow using the [Next.js](https://nextjs.org/) framework.

## Setup

To run the project, first clone this repository, and then run one of the following commands to install the dependencies:

```bash
npm install
# or
yarn install
```

Then create a `.env.local` file and add the `ADMIN_PRIVATE_KEY` variable to it with the private key of the wallet you want to use as the admin wallet to generate and verify payloads. For example, the private key can be accessed from your Metamask wallet under `Account Details` -> `Export Private Key`. Your private key is highly sensitive so do not share it anywhere else! Also add your domain name in `NEXT_PUBLIC_DOMAIN_NAME`. 

Your file should use something like the following:

```.env
ADMIN_PRIVATE_KEY=111222333xxxyyyzzz
NEXT_PUBLIC_DOMAIN_NAME=example.com
```
A sample `.env.local` file is included. Change the values accordingly.

Finally, run the project with one of the following commands:

```bash
npm run dev
# or
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to visit the client side page where you can connect a wallet, sign-in with ethereum and view the payload, and use the payload to authenticate with the backend.
