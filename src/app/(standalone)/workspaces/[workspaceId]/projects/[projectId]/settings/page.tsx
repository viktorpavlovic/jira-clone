import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";
import { getProject } from "@/features/projects/queries";
import { EditProjectFormProps } from "@/features/projects/components/edit-project-form";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdSettingsPage = async ({
  params,
}: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId: params.projectId });

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectFormProps initialValues={initialValues} />
    </div>
  );
};

export default ProjectIdSettingsPage;
