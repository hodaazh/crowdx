import type { NextPage } from 'next';
import { useState } from 'react';

import {
  BadgeSelect,
  CarouselSection,
  ProjectCard,
} from '@/components/elements';
import { ProjectMap } from '@/components/pages/project';
import { CommonConst, FakeConst, ProjectConst } from '@/constants';

const Project: NextPage = () => {
  const [selected, setSelected] = useState<number | null>(1);
  const { projects } = FakeConst;
  const { projectOption } = CommonConst;

  return (
    <div className="flex flex-col">
      <div className="container mb-14 mt-16 flex items-baseline gap-9 xs:mt-8 xs:mb-10 xs:flex-col xs:gap-5">
        <h4 className="tracking-wider typo-[24-bold]">PROJECTS</h4>
        <BadgeSelect
          options={ProjectConst.project.categories}
          formValue={selected}
          onChange={setSelected}
          className="my-9"
        />
      </div>
      <CarouselSection
        title=""
        data={projects}
        options={projectOption}
        renderItem={(item) => <ProjectCard {...item} />}
        className="mb-10 xs:mb-4"
        isNextPrev={false}
        hasFooter={false}
      />
      <CarouselSection
        title=""
        data={projects}
        options={projectOption}
        renderItem={(item) => <ProjectCard {...item} />}
        className="mb-36 xs:mb-24"
        isNextPrev={false}
      />
      <ProjectMap />
    </div>
  );
};

export default Project;
