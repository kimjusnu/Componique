import UserPageLeftSidebar from "@components/Layout/UserPageLeftSideBar";
export const metadata = {
  title: "Componique",
  description: "Generated by Next.js",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <section className="fixed left-4 top-26 h-[calc(100%-120px)] w-[230px] rounded-l-2xl bg-[#D8EAF8] shadow-lg dark:bg-Navy">
        <UserPageLeftSidebar />
      </section>
      <div className="w-full">{children}</div>
    </div>
  );
}
