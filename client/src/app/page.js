import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { HomeBody } from "@/components/HomeBody/HomeBody";

export default async function Home() {
  const res = await fetch("http://127.0.0.1:8081/nav");
  const navData = await res.json();

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar data={navData} />
        <HomeBody />
      </div>
    </div>
  );
}
