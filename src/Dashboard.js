import React from 'react'
import './Dashboard.css'
import TattooInquiry from './TattooInquiry'

function Dashboard() {
  return (
    <div className="dashboard">
      <TattooInquiry />
      <TattooInquiry />
      <TattooInquiry />
      <TattooInquiry />
    </div>
  );
}

export default Dashboard