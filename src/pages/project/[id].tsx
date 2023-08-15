import { ProjectHeader, ProjectTab } from '@/components/pages/project';

function Project(): JSX.Element {
  return (
    <main className="flex flex-1 flex-col">
      <ProjectHeader />
      <ProjectTab />
    </main>
  );
}

export default Project;
