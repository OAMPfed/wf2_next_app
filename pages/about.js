import Link from 'next/link';

function AboutPage() {

    const styles = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={styles}>
            <h1>About page.</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default AboutPage