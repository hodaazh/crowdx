import cn from 'classnames';
import Link from 'next/link';

import type { ProjectItemT } from '@/types';

const ProjectCard = ({
  img,
  location,
  title,
  id,
  targetHold,
  preliminary,
}: ProjectItemT): JSX.Element => {
  return (
    <Link
      href={`/project/${id}`}
      passHref
      className="group z-20 flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-base-1/5 bg-white shadow-card"
    >
      <div>
        <img
          src={img}
          alt=""
          className="aspect-[5/3.1] w-full rounded-t-xl object-cover"
        />
      </div>
      <div className="flex flex-col p-8 pt-6">
        <div className="flex items-center gap-1.5 text-base-1/50 typo-[14]">
          <i className="icon-location text-base-1" />
          <span className="-mb-0.5 leading-none">{location}</span>
        </div>
        <span className="mt-2 text-base-1 typo-[20-bold]">{title}</span>
        <div className="mt-6 grid grid-cols-2">
          {[
            {
              label: 'Preliminary IRR:',
              value: preliminary,
              icon: 'icon-House',
            },
            {
              label: 'Target Hold Period:',
              value: targetHold,
              icon: 'icon-Map-Marker',
            },
          ].map(({ label, value, icon }, index) => (
            <div className="flex items-center justify-start" key={index}>
              <i
                className={cn(
                  'text-base-1/40 text-2xl xs:text-lg group-hover:text-primary transition duration-300',
                  icon
                )}
              />
              <div className="flex flex-col gap-1">
                <span className="leading-none text-base-1/40 typo-[12-normal]">
                  {label}
                </span>
                <span className="leading-none text-base-1 typo-[14-bold]">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export { ProjectCard };
