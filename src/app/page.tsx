import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { HomeBody } from "@/components/HomeBody/HomeBody";
import { apiUrls } from "@/app/api/urls";

export default async function Home() {
  const res = await fetch(apiUrls.navItems);
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
