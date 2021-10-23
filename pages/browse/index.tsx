import Head from 'next/head';
import AppLayout from '../../features/app-layout/index.feature';
import MviHeroLanding from '../../components/mvi-hero-landing/index.component';

export default function Browse() {
  return (
    <div>
      <Head>
        <title>Browse | MovieStock</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppLayout initHeaderIsTransparent={true}>
        <MviHeroLanding
          title="Batman the dark knight"
          description="A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains, escaping with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime."
          image="/images/batman.jpeg"
          button={{
            label: 'WATCH TRAILER',
            href: '/watch?v=batman-the-dark-knight'
          }}
        />
      </AppLayout>
    </div>
  );
}
