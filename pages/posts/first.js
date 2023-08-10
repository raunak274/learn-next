import Link from "next/link";
import Head from 'next/head';
import Container from "../../Component/container";

export default function FirstPost(props) {
    return (
        <>
            <Container>
                <Head>
                    <title>My First Post</title>
                </Head>
                <h1>My First Post</h1>
                <h2>
                    <Link href="/">
                        Home
                    </Link>
                    <div>
                        Next stars: {props.stars}
                    </div>
                </h2>
                <h1>Database Credentials</h1>
                <p>Host: {props.host}</p>
                <p>Username: {props.username}</p>
                <p>Password: {props.password}</p>
                <br />
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: {
            stars: json.stargazers_count,
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASS
        }
    }
}