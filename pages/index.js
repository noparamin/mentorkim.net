import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김멘토넷</title>
        <meta name="description" content="김멘토넷" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}