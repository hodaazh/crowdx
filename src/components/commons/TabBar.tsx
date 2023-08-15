import cn from 'classnames';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

type TabOptionType = {
  id: number | string;
  title: string;
  icon?: string;
};

interface IProps {
  className?: string;
  disabled?: boolean;
  onChange?: (val: number) => void;
  tabs: TabOptionType[];
  activeTab?: number;
}

const TabBar = ({
  className,
  onChange = () => false,
  tabs = [],
  activeTab = 1,
}: IProps): JSX.Element => {
  const [active, setActive] = useState<number>(activeTab);
  const indicator = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    tabsRef.current[active - 1]?.classList.remove('border-b-transparent');
    tabsRef.current[active - 1]?.classList.add('border-black');
  }, []);

  const changeTab = (newTab: number): void => {
    if (newTab === active) return;
    if (container.current) {
      const prevTabElem = tabsRef.current[active - 1]?.getBoundingClientRect();
      const newTabElem = tabsRef.current[newTab - 1]?.getBoundingClientRect();
      const { x: containerX } = container.current.getBoundingClientRect();

      if (!gsap.isTweening(indicator.current)) {
        tabsRef.current[active - 1]?.classList.remove('border-black');
        tabsRef.current[active - 1]?.classList.add('border-b-transparent');
        gsap.set(indicator.current, {
          height: prevTabElem?.height,
          width: prevTabElem?.width,
          x: (prevTabElem?.x || 0) - containerX,
          opacity: 1,
        });
      }
      gsap.killTweensOf(indicator.current);
      gsap.to(indicator.current, {
        duration: 0.4,
        // ease: 'power2.inOut',
        height: newTabElem?.height,
        width: newTabElem?.width,
        x: (newTabElem?.x || 0) - containerX,
        onComplete: () => {
          gsap.set(indicator.current, {
            opacity: 0,
          });
          tabsRef.current[newTab - 1]?.classList.remove('border-b-transparent');
          tabsRef.current[newTab - 1]?.classList.add('border-black');
        },
      });
    }
    setActive(newTab);
    onChange(newTab);
  };

  return (
    <div
      ref={container}
      className={cn(
        'flex gap-x-8 border-b-2 border-gray-300/80 border-solid h-12 lg:h-16 xs:h-14 box-border relative',
        className
      )}
    >
      <span
        ref={indicator}
        className="absolute left-0 border-b-2 border-black"
      />
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          ref={(ref) => {
            tabsRef.current[index] = ref;
          }}
          className={cn(
            'flex -mb-[0.1rem] border-b-transparent relative min-w-[12%] z-10 gap-x-1 border-b-2 border-solid justify-center items-center px-3 lg:px-2 cursor-pointer'
          )}
          onClick={() => changeTab(index + 1)}
        >
          {tab.icon ? (
            <span
              className={cn(
                'text-2xl text-base-1/40',
                `icon-${tab.icon} transition duration-500`,
                {
                  '!text-base-1': tab.id === activeTab,
                }
              )}
            />
          ) : null}
          <span
            className={cn(
              'text-center text-base-1/40 transition duration-500',
              {
                '!text-base-1': tab.id === activeTab,
              }
            )}
          >
            {tab.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export { TabBar };
export type { TabOptionType };
