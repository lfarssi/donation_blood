import Campaign from "@/components/dashboard/Campaign";
import CampaignList from "@/components/dashboard/CampaignList";
import Main from "@/components/dashboard/Main";
import Layout from "@/components/layout/Layout";
import Login from "@/components/login/Login";
import { createBrowserRouter } from "react-router-dom";

const routes= createBrowserRouter([
    {  
        element:<Layout/>,
       children:[
        {
          path:"/index",
          element:<Main/>
        },
        {
            path:"/settings",
            element:<h1 className="mt-60">home hajhash</h1>
          },
          {
            path:"/createCamp",
            element:<Campaign/>
          },
          {
            path:"/listeCamp",
            element:<CampaignList/>
          },
      ],
  },{
    path:"/",
    element:<Login/>
  }
   ])
export default routes