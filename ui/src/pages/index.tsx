import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';
import Menu from '../components/Menu';

export default function Home() {
  return <>
  <Layout>
    <Menu></Menu>
    </Layout>
  </>
}
