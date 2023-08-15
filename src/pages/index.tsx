import {
  CarouselSection,
  CommonCard,
  ProjectCard,
} from '@/components/elements';
import { HomeAbout, HomeBanner, HomeHeader } from '@/components/pages/home';
import { CommonConst, FakeConst } from '@/constants';

function Home(): JSX.Element {
  const { investingItems, projects } = FakeConst;

  return (
    <main className="flex flex-1 flex-col">
      <HomeHeader />
      <CarouselSection
        className="mt-24 sm:mt-4"
        title="FUNDED PROJECTS"
        data={projects}
        options={CommonConst.projectsCarouselOption}
        renderItem={(item) => <ProjectCard {...item} />}
      />
      <HomeBanner />
      <CarouselSection
        title="Closed PROJECTS"
        data={projects}
        options={CommonConst.projectsCarouselOption}
        renderItem={(item) => <ProjectCard {...item} />}
      />
      <HomeAbout />
      <div className="relative">
        <CarouselSection
          className="mt-24"
          title="Learn about investing in land"
          data={investingItems}
          options={{
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1.1,
                spaceBetween: 25,
              },
              850: {
                slidesPerView: 1.7,
                spaceBetween: 30,
              },
              1150: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
            },
          }}
          renderItem={(item) => <CommonCard {...item} />}
        />
        <img
          className="absolute top-1/2 left-0 z-0"
          src="/media/slider-line-2.svg"
          alt="slider-line"
        />
      </div>
    </main>
  );
}

export default Home;
