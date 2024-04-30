import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axiosObj from '@/axios/axiosConfig';
export default function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);
    useEffect(() => {
      axiosObj.get("/api/campaigns").then(data=>setCampaigns(data.data.data))
        
    }, []);
  return (
   <div className='w-75 mx-auto mt-2'>
     <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Date de debute</th>
          <th scope='col'>Date de fin</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            campaigns.map(e=>(<tr>
                <td>{e.title}</td>
                <td>{e.startTime}</td>
                <td>{e.endTime}</td>
            </tr>))
        }
      </MDBTableBody>
    </MDBTable>
   </div>
  );
}