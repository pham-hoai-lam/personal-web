import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Card, Col, Layout, Row} from "antd";
import Link from 'next/link'
import Header from "../components/header";


const techImages = [
    // region web
    {
        'img': '/tech/javascript.svg',
        'desc': 'Javascript'
    },
    {
        'img': '/tech/typescript.svg',
        'desc': 'Typescript'
    },
    {
        'img': '/tech/nodejs.svg',
        'desc': 'NodeJs'
    },
    {
        'img': '/tech/react.svg',
        'desc': 'ReactJs'
    },
    {
        'img': '/tech/nextjs.svg',
        'desc': 'Nextjs'
    },
    {
        'img': '/tech/html.svg',
        'desc': 'Html'
    },
    {
        'img': '/tech/css.svg',
        'desc': 'Css'
    },
    {
        'img': '/tech/antd.svg',
        'desc': 'Ant Design'
    },
    {
        'img': '/tech/bootstrap.svg',
        'desc': 'Bootstrap'
    },
    {
        'img': '/tech/npm.svg',
        'desc': 'NPM'
    },
    {
        'img': '/tech/mysql.svg',
        'desc': 'Mysql'
    },
    {
        'img': '/tech/mongodb.svg',
        'desc': 'MongoDB'
    },
    {
        'img': '/tech/dynamodb.svg',
        'desc': 'DynamoDB'
    },
    {
        'img': '/tech/php.svg',
        'desc': 'PHP'
    },
    {
        'img': '/tech/laravel.svg',
        'desc': 'Laravel'
    },


    // endregion

    // region service
    {
        'img': '/tech/firebase.svg',
        'desc': 'Firebase'
    },
    {
        'img': '/tech/bigquery.svg',
        'desc': 'BigQuery'
    },
    {
        'img': '/tech/airflow.svg',
        'desc': 'Airflow'
    },
    {
        'img': '/tech/python.svg',
        'desc': 'Python'
    },
    {
        'img': '/tech/digitalocean.svg',
        'desc': 'DigitalOcean'
    },
    {
        'img': '/tech/docker.svg',
        'desc': 'Docker'
    },
    // {
    //     'img': '/tech/kubernetes.svg',
    //     'desc': 'Kubernetes'
    // },
    {
        'img': '/tech/ubuntu.svg',
        'desc': 'Ubuntu'
    },
    {
        'img': '/tech/dotnet.svg',
        'desc': 'DotNet'
    },
    {
        'img': '/tech/csharp.svg',
        'desc': 'C#'
    },
    {
        'img': '/tech/unity.svg',
        'desc': 'Unity'
    },
    {
        'img': '/tech/git.svg',
        'desc': 'Git'
    },
    {
        'img': '/tech/jetbrains.svg',
        'desc': 'JetBrains IDE'
    },
    {
        'img': '/tech/discord.svg',
        'desc': 'Discord'
    },

    // endregion
]


export default function Home() {

    return (
        <div className="md:container md:mx-auto p-5">
            <div className='box'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
            <Header/>

            <div>
                <Row gutter={[8, 8]}>
                    <Col lg={24} sm={24}>
                        <Row gutter={[32, 32]}>
                            {techImages.map(t =>
                                <Col key={t.desc}>
                                    <Card className={styles.card}>
                                        <img className={"w-[5rem] h-[5rem]"} src={t.img}/>
                                        <div>{t.desc}</div>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Col>
                   {/* <Col lg={12} sm={24}>
                        <Row gutter={[8, 8]}>
                            <Col>
                                <Card>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum metus dolor, at suscipit nulla facilisis vitae. Cras pretium magna ac nisl luctus efficitur. Sed efficitur, augue et lacinia tincidunt, purus libero aliquam tortor, non mattis odio turpis id arcu. Nulla facilisi. Duis vitae magna a libero pulvinar sodales at sed leo. Proin vehicula magna ac leo elementum lacinia. Cras dignissim ut ipsum vel tempus. Cras efficitur enim ornare interdum posuere. Integer suscipit ornare ultrices. Nullam sodales lacus eget odio tincidunt, a pellentesque nunc interdum. Nam ac gravida nunc. Mauris turpis risus, accumsan nec neque sed, congue congue lectus.
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                    </Col>*/}
                </Row>
            </div>
        </div>
    )
}
