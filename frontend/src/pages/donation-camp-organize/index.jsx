import React from 'react'

import OrganizeDonationCamp from './OrganizeDonationCamp';
import { DonateCampProvider } from '../../contexts/DonationCampContext';

function index() {
  return (
    <DonateCampProvider>
      <OrganizeDonationCamp/>
    </DonateCampProvider>
  )
}

export default index
