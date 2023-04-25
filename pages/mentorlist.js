import MentorListInformation from "@/components/information/mentor-list";
import Head from 'next/head'
import Layout from '../components/layout'
import Picutre from '../components/information/picture'

export default function MentorList() {
    return (
      <Layout>
        <Head>
          <title>김멘토넷</title>
          <meta name="description" content="김멘토넷" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Picutre />
        <MentorListInformation/>
      </Layout>
    )
  }