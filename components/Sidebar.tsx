import SidebarMenu from "./SidebarMenu";
import SidebarChild from "./SidebarChild";

const Sidebar = async () => {
  const courses = [{ id: 1, title: "Robot Framework", url: "/courses/robot-framework" }];
  const starter = [{id: 1, title: "Introduction", url: "/"}]
  let articles: { id: number; title: string; slug: string }[] = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    articles = await response.json();
  } catch (error) {
    console.error('Failed to fetch articles:', error);
  }
  
  return (
    <div className="min-w-[30%] px-10">
        <SidebarMenu menu={{title: "Getting Started"}}>
            <SidebarChild items={starter} url={starter[0].url}/>
        </SidebarMenu>
        <SidebarMenu menu={{ title: "Courses" }}>
          <SidebarChild items={courses} url={courses[0].url} />
        </SidebarMenu>
        <SidebarMenu menu={{ title: "Articles" }}>
          <SidebarChild items={articles} url={`/articles`}  />
        </SidebarMenu>
    </div>
  );
};

export default Sidebar;
