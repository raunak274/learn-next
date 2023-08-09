// import Link from "next/link"
import Router from 'next/router';
import Head from 'next/head'

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Welcome to Next.js!</title>
            </Head>
            <div>Welcome to Next.js!</div>
            {/* <Link href="/posts/first">
                First Post
            </Link> */}
            <span onClick={() => Router.push('/posts/one')}>First Post</span>
            <span onClick={() => Router.push('/?counter=1', undefined, {shallow: true})}>Reload</span>
            <br/>
            <div>Next stars: {props.stars}</div>
            <img src="/bird.png" alt="bird logo" />
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return {
        props: {
            stars: json.stargazers_count
        }
    }
}

export default HomePage