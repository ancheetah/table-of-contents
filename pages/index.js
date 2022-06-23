import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <header className='App-header'>
                <h1>
                    <a href='https://slipsum.com/lite/'>Samuel L. Ipsum</a>
                </h1>
            </header>

            <main className={styles.main}>
                <h2>Your bones don't break, mine do</h2>
                <p>
                    Your bones don't break, mine do. That's clear. Your cells
                    react to bacteria and viruses differently than mine. You
                    don't get sick, I do. That's also clear. But for some
                    reason, you and I react the exact same way to water. We
                    swallow it too fast, we choke. We get some in our lungs, we
                    drown. However unreal it may seem, we are connected, you and
                    I. We're on the same curve, just on opposite ends.{' '}
                </p>

                <h2>No, motherfucker</h2>
                <p>
                    Well, the way they make shows is, they make one show. That
                    show's called a pilot. Then they show that show to the
                    people who make shows, and on the strength of that one show
                    they decide if they're going to make more shows. Some pilots
                    get picked and become television programs. Some don't,
                    become nothing. She starred in one of the ones that became
                    nothing.{' '}
                </p>

                <h2>Hold on to your butts</h2>
                <p>
                    The path of the righteous man is beset on all sides by the
                    iniquities of the selfish and the tyranny of evil men.
                    Blessed is he who, in the name of charity and good will,
                    shepherds the weak through the valley of darkness, for he is
                    truly his brother's keeper and the finder of lost children.
                    And I will strike down upon thee with great vengeance and
                    furious anger those who would attempt to poison and destroy
                    My brothers. And you will know My name is the Lord when I
                    lay My vengeance upon thee.{' '}
                </p>

                <h2>We happy?</h2>
                <p>
                    Now that there is the Tec-9, a crappy spray gun from South
                    Miami. This gun is advertised as the most popular gun in
                    American crime. Do you believe that shit? It actually says
                    that in the little book that comes with it: the most popular
                    gun in American crime. Like they're actually proud of that
                    shit.{' '}
                </p>

                <h2>Are you ready for the truth?</h2>
                <p>
                    Well, the way they make shows is, they make one show. That
                    show's called a pilot. Then they show that show to the
                    people who make shows, and on the strength of that one show
                    they decide if they're going to make more shows. Some pilots
                    get picked and become television programs. Some don't,
                    become nothing. She starred in one of the ones that became
                    nothing.{' '}
                </p>

                <h2>No man, I don't eat pork</h2>
                <p>
                    The path of the righteous man is beset on all sides by the
                    iniquities of the selfish and the tyranny of evil men.
                    Blessed is he who, in the name of charity and good will,
                    shepherds the weak through the valley of darkness, for he is
                    truly his brother's keeper and the finder of lost children.
                    And I will strike down upon thee with great vengeance and
                    furious anger those who would attempt to poison and destroy
                    My brothers. And you will know My name is the Lord when I
                    lay My vengeance upon thee.{' '}
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
