import { container } from '../styles/components';
import ArchitectureSection from './ArchitectureSection';
import OnlineDemoSection from './OnlineDemoSection';
import DownloadsSection from './DownloadsSection';

const Platforms = () => {
  return (
    <section id="platforms" className="py-24 bg-dark-900">
      <div className={`${container}`}>
        <div id="architecture" className="scroll-mt-24">
          <ArchitectureSection />
        </div>
        <div id="demo" className="scroll-mt-24">
          <OnlineDemoSection />
        </div>
        <div id="downloads">
          <DownloadsSection />
        </div>
      </div>
    </section>
  );
};

export default Platforms;