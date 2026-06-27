import { readdir } from "node:fs/promises";
import path from "node:path";
import { ProjectsPageContent } from "@/components/projects-page";

type ProjectGallery = {
  id: string;
  title: string;
  images: string[];
};

function normalizeFolderName(name: string) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
}

async function getProjectGalleries(): Promise<ProjectGallery[]> {
  const projectsDir = path.join(process.cwd(), "public", "projects");
  const entries = await readdir(projectsDir, { withFileTypes: true });

  const folders = entries.filter((entry) => entry.isDirectory());
  const imageOverrides: Record<string, string> = {
    "Universities & Schools": "Commercial",
  };

  const galleries = await Promise.all(
    folders.map(async (folder) => {
      const sourceFolderName = imageOverrides[folder.name] ?? folder.name;
      const folderPath = path.join(projectsDir, sourceFolderName);
      const files = await readdir(folderPath, { withFileTypes: true });
      const images = files
        .filter(
          (file) =>
            file.isFile() && /\.(png|jpe?g|webp|gif)$/i.test(file.name)
        )
        .map(
          (file) =>
            `/projects/${encodeURIComponent(sourceFolderName)}/${encodeURIComponent(file.name)}`
        );

      return {
        id: folder.name,
        title: normalizeFolderName(folder.name),
        images,
      };
    })
  );

  return galleries
    .filter((gallery) => gallery.images.length > 0)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export default async function ProjectsPage() {
  const galleries = await getProjectGalleries();

  return <ProjectsPageContent galleries={galleries} />;
}
