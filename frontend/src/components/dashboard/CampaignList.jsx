import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';
import axiosObj from '@/axios/axiosConfig';
import { Link } from 'react-router-dom';

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
    <div className='w-75 mx-auto mt-2'>
      <div className="mb-3 flex justify-between">
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1"
          placeholder="Recherche"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="date"
          className="border border-gray-300 rounded px-2 py-1"
          value={selectedDate}
          onChange={handleDateChange}
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
              <td className='text-center'>
                <Link className="text-decoration-none font-bold text-black hover:text-red-600" to={`/listCamp/${campaign.id}/details`}>{campaign.title}</Link>
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