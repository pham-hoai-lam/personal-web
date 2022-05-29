import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Layout} from "antd";
import Link from 'next/link'
import Header from "../components/header";

export default function Home() {
    return (
        <div className="md:container md:mx-auto p-5">
            <Header/>
        </div>
    )
}
