import GoogleMapReact from 'google-map-react';
import type { NextPage } from 'next';

const ProjectMap: NextPage = () => {
  return (
    <div className="flex flex-col px-20 lg:px-0">
      <h5 className="mb-14 tracking-wider typo-[24-bold] lg:px-12 md:px-8">
        LOCATIONS
      </h5>
      <div className="relative mb-44 h-[35rem] w-full overflow-hidden rounded-3xl lg:rounded-none md:mb-20 md:h-[28rem] xs:h-[24rem]">
        <GoogleMapReact
          options={{
            disableDefaultUI: true,
            clickableIcons: false,
          }}
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
          }}
          center={{
            lat: 37,
            lng: 44,
          }}
          defaultZoom={14}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

export { ProjectMap };
