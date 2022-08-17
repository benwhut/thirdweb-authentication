import { useSDK } from "@thirdweb-dev/react"

export default function useAuthenticate() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME
  const sdk = useSDK()

  async function login() {
    // Generate a payload from the connected wallet on the client side
    // prompts the connected wallet to sign a message and create payload
    // payload allows user to login by signing their wallet
    // payload = wallet address, chain_id, site domain, expiration_time, nonce
    const payload = await sdk?.auth.login(domain)
    // console.log(payload)

    // Check if the login payload is valid and get the address
    // const address = sdk?.auth.verify(domain, payload) // not necessary here as 'login()' function already calls verify()
    // If payload is valid, it returns the address of the client-side wallet, otherwise it throws an error
    // if (address) { console.log("Valid payload. Address: " + address) } 
    // else { console.log("Invalid payload") }
    

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    })
  }

  // checks access token cookie to make sure user has already logged in
  // no need to sign wallet and login again
  // authenticate() calls the verify() function to ensure the login request is valid
  async function authenticate() {
    const res = await fetch("/api/authenticate", {
      method: "POST"
    })
    return res
  }

  async function logout() {
    await fetch("/api/logout", {
      method: "POST",
    })
  }

  return { 
    login,
    authenticate,
    logout
  }
}