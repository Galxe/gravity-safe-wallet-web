import type { NextPage } from 'next'
import Head from 'next/head'
import MyAccounts from '@/components/welcome/MyAccounts'

const Accounts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gravity Safe</title>
      </Head>

      <MyAccounts />
    </>
  )
}

export default Accounts
