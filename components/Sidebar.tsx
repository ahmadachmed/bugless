import SidebarMenu from "./SidebarMenu";
import SidebarChild from "./SidebarChild";

const Sidebar = () => {
  const courses = [{ id: 1, title: "Robot Framework" }];
  const starter = [{id: 1, title: "Introduction"}]
  const articles = [
    {
        id: 1,
        title: "QA Fundamental",
        link: "/"
    },
    {
        id: 2,
        title: "Getting Started with CI/CD",
        link: "/"
    },
    {
        id: 3,
        title: "Introduction to Regression Testing",
        link: "/"
    },

  ]
  return (
    <div className="min-w-[30%] px-10 py-14">
        <SidebarMenu menu={{title: "Getting Started"}}>
            <SidebarChild items={starter}/>
        </SidebarMenu>
        <SidebarMenu menu={{ title: "Courses" }}>
          <SidebarChild items={courses} />
        </SidebarMenu>
        <SidebarMenu menu={{ title: "Articles" }}>
          <SidebarChild items={articles} />
        </SidebarMenu>
    </div>
  );
};

export default Sidebar;
