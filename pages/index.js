import Link from 'next/link';
import Greeting from '../components/greeting';

function HomePage() {

    const styles = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={styles}>
            <h1>Stay Tuned.</h1>
            <Link href="/about">
                <a title="About page">About</a>
            </Link>
            <Greeting greetingProp={"Hello!"} />
        </div>
    )
}

export default HomePage