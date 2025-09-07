import { getHomePage } from "@/data/getHomePage";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  console.log("DATA :::", data);
  
  if (!data) notFound();

  return {...data.data};
}


export default async function HomeRoute() {
  const data = await loader();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
