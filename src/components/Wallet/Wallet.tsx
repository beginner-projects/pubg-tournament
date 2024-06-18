'use client'

import '../Buttons/ConnectWallet/index.css'
import { useMetaMask } from '@/context/useMetaMask'
import { formatAddress } from '@/utils'
import ConnectWallet from '../Buttons/ConnectWallet/ConnectWallet'
import RedBtn from '../Buttons/Red/RedBtn'

export default function Wallet() {
    const { wallet, connectMetaMask } = useMetaMask()

    return (
        <>
            {!wallet.accounts.length ? (
                <div onClick={connectMetaMask}>
                    <RedBtn text="Connect Wallet" />
                </div>
            ) : (
                <div>
                    <RedBtn text={formatAddress(wallet.accounts[0])} />
                </div>
            )}
        </>
    )
}
