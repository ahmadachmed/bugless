/* eslint-disable @typescript-eslint/no-explicit-any */
import SidebarMenu from "./SidebarMenu";
import SidebarChild from "./SidebarChild";

const Sidebar = ({articles}: {articles: any[]}) => {

  const courses = [{ id: 1, title: "Robot Framework", url: "/courses/robot-framework" }];
  const starter = [{id: 1, title: "Introduction", url: "/"}]

  const formattedArticles = articles?.map((article) => ({
    id: article.id,
    title: article.properties.title?.title?.[0]?.plain_text,
    slug: article.properties.Slug?.formula?.string || "",
  }));

  return (
    <div className="min-w-[30%] px-10">
        <SidebarMenu menu={{title: "Getting Started"}}>
            <SidebarChild items={starter} url={starter[0].url}/>
        </SidebarMenu>
        <SidebarMenu menu={{ title: "Courses" }}>
          <SidebarChild items={courses} url={courses[0].url} />
        </SidebarMenu>
        <SidebarMenu menu={{ title: "Articles" }}>
          <SidebarChild items={formattedArticles} url={`/articles`}  />
        </SidebarMenu>
    </div>
  );
};

export default Sidebar;