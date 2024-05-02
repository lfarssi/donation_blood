import Campaign from "@/components/dashboard/Campaign";
import CampaignList from "@/components/dashboard/CampaignList";
import StartCampaign from "@/components/dashboard/StartCampaign";
import Details from "@/components/dashboard/Details";
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
          {
            path:"/listCamp/:id/details",
            element:<Details/>
          },
      ],
  },{
    path:"/",
    element:<Login/>
  }
   ])
export default routes