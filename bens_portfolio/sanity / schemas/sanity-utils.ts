import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "53rsx89r",
    dataset: "production",
    apiVersion: "2023-05-22",
  });

  return client.fetch(
    groq`*[_type == "project"]{
                _id,
                _createAt,
                name,
                "slug": slug.current,
                "image": image.asset -> url,
                url,
                content
            }`
  );
}
