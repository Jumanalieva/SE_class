import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Library from "../pages/Library";

interface RouteType {
    path: string,
    component:  React.ComponentType<any>;
    name: string 
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
         path: "/library",
         component: Library,
         name: "Library",
    }
   ];
  
   export default routes