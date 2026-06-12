import Image from "next/image";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import WelcomeSection from "./components/WelcomSection";
import Table from "./components/Table";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar/>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden md:pl-[260px]">
        <Topbar/>

        <main
          id="main-content"
          className="flex-1 overflow-y-auto bg-background"
        >
          <div className="max-w-7xl mx-auto px-2 py-2 space-y-2">
            <WelcomeSection />

            <div className="w-full">
              <Table />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
