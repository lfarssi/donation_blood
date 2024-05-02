import React, { useEffect, useState } from 'react';
import axiosObj from '@/axios/axiosConfig';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    axiosObj.get('/api/campaigns').then((data) => setCampaigns(data.data.data));
  }, []);

  const filteredCampaigns = campaigns.filter((campaign) => {
    const title = campaign.title.toLowerCase();
    const placeName = campaign.placeName.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return title.includes(searchTermLower) || placeName.includes(searchTermLower);
  });

  const filteredCampaignsByDate = selectedDate
    ? filteredCampaigns.filter((campaign) => campaign.dateOfcreation.includes(selectedDate))
    : filteredCampaigns;

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='w-75 mx-auto mt-4'>
   
      <div className="mb-3 d-flex justify-content-between">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <TextField
          label="Date"
          type="date"
          variant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col' className="text-center">Title</th>
            <th scope='col' className="text-center">Date de debute</th>
            <th scope='col' className="text-center">Date de fin</th>
            <th scope='col' className="text-center">lieu de la campagne</th>
            <th scope='col' className="text-center">date de création</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredCampaignsByDate.map((campaign) => (
            <tr key={campaign.id}>
              <td className='text-center '>
                <Link className="text-decoration-none font-bold campaing" to={`/listCamp/${campaign.id}/details`}>{campaign.title}</Link>
              </td>
              <td className='text-center'>
                <MDBBadge color='danger' pill>
                  {campaign.startTime}
                </MDBBadge>
              </td>
              <td className='text-center'>
                <MDBBadge color='warning' pill>
                  {campaign.endTime}
                </MDBBadge>
              </td>
              <td className='text-center'>
                {campaign.placeName}
              </td>
              <td className='text-center'>
                <MDBBadge color='info' pill>
                  {campaign.dateOfcreation}
                </MDBBadge>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
    
  );
}