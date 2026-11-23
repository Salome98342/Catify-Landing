import { Marquee } from '../components/ui/Marquee';
import { AccompanyBand } from '../components/home/AccompanyBand';
import { Features } from '../components/home/Features';
import { Hero } from '../components/home/Hero';
import { PlansPreview } from '../components/home/PlansPreview';
import { Statement } from '../components/home/Statement';
import { Steps } from '../components/home/Steps';
import { StorePreview } from '../components/home/StorePreview';

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <Steps />
      <StorePreview />
      <Features />
      <PlansPreview />
      <AccompanyBand />
    </>
  );
}
