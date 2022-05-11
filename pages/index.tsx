import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import ReviewerGrid from '../components/layout/ReviewerGrid'
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "../app/firebaseApp";

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(firebase.auth())
  console.log("Loading", loading, "|", "Current User", user)

  return (
    <div className={styles.container}>
      <Head>
        <title>iReviewer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout/>
      <ReviewerGrid/>
    </div>
  )
}

export default Home
