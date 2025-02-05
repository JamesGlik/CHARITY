import Heading from '@/components/atoms/GalleryHeading/GalleryHeading';
import Button from '@/components/atoms/GalleryButton/GalleryButton';

export default function GallerySection() {
    return (
      <section className="py-[138px] sm:py-[80px] relative overflow-hidden sm:pb-[112px]">
        <Heading text="Watch Our Gallery" subtext="Our Gallery" />
        <div className="relative mx-auto pt-[0px] sm:pt-[20px]" style={{ height: '500px' }}>
          <div className="absolute top-[149px] left-[-40px] sm:top-[60px] sm:left-[-10px] overflow-hidden">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 1"
              className="w-[270px] h-[208px] sm:w-[135px] sm:h-[104px]"
            />
          </div>
          <div className="absolute top-[421px] left-[157px] sm:top-[196px] sm:left-[50px]">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 2"
              className="w-[350px] h-[256px] sm:w-[175px] sm:h-[128px]"
            />
          </div>
          <div className="absolute top-[69px] right-[350px] sm:top-[368px] sm:right-[30px]">
            <iframe
                width="570"
                height="400"
                src="https://www.youtube.com/embed/osCUTGkKVRg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg sm:w-[329px] sm:h-[231px]"
            ></iframe>
          </div>
          <div className="absolute top-[213px] right-[120px] sm:top-[634px] sm:right-[0px]">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 3"
              className="w-[185px] h-[144px] sm:w-[193px] sm:h-[72px]"
            />
          </div>
          <div className="absolute top-[421px] right-[-120px] sm:top-[738px] sm:right-[-20px] overflow-hidden">
            <img
              src="/185x144_gray.svg"
              alt="Gallery Image 4"
              className="w-[270px] h-[208px] sm:w-[135px] sm:h-[104px]"
            />
          </div>
        </div>
        <div className="pt-[270px] sm:pt-[488px] flex justify-center">
          <Button label="Explore All" />
        </div>
      </section>
    );
}