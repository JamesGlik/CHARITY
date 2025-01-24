import Heading from '@/components/atoms/GalleryHeading/GalleryHeading';
import Button from '@/components/atoms/GalleryButton/GalleryButton';

export default function GallerySection() {
    return (
      <section className="py-[138px] relative overflow-hidden">
        <Heading text="Watch Our Gallery" subtext="Our Gallery" />
        <div className="relative mx-auto mt-[0px]" style={{ height: '500px' }}>
          <div className="absolute top-[149px] left-[-40px] overflow-hidden">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 1"
              style={{ width: '270px', height: '208px' }}
            />
          </div>
          <div className="absolute top-[421px] left-[157px]">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 2"
              style={{ width: '350px', height: '256px' }}
            />
          </div>
          <div className="absolute top-[69px] right-[350px]">
            <iframe
                width="570"
                height="400"
                src="https://www.youtube.com/embed/JWRSxAlzS7g"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '8px' }}
            ></iframe>
          </div>
          <div className="absolute top-[213px] right-[120px]">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 3"
              style={{ width: '185px', height: '144px' }}
            />
          </div>
          <div className="absolute top-[421px] right-[-120px] overflow-hidden">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 4"
              style={{ width: '270px', height: '208px' }}
            />
          </div>
        </div>
        <div className="mt-[270px] flex justify-center">
          <Button label="Explore All" />
        </div>
      </section>
    );
  }