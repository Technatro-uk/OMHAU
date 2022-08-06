import React, { Component } from 'react'
import AdminCarousel from "../AdminCarousel/AdminCarousel";
import { AdminLinks } from "../Data/DashboardData";
import { PageContainer, PageHeading } from "../styles/Dashboard.Elements";
import UserTable from "../CustomTable/UserTable";
import CategoryTable from "../CustomTable/CategoryTable";
import QuickEscapeTable from "../CustomTable/QuickEscapeTable";
import AudioTable from "../CustomTable/AudioTable";
import VideoTable from "../CustomTable/VideoTable";
import StoriesTable from "../CustomTable/StoriesTable";

export default class Dashboard extends Component {
  render() {
    return (
      <PageContainer>
      <PageHeading>Admin Dashboard</PageHeading>
      <AdminCarousel dataSource={AdminLinks} />

      {/* ALL AUDIO - TABLE */}
      <AudioTable />

      {/* ALL QUICK ESCAPES - TABLE */}
      <QuickEscapeTable />

      {/* ALL STORIES - TABLE */}
      <StoriesTable />

      {/* ALL VIDEOS - TABLE */}
      <VideoTable />
      
      {/* ALL USERS - TABLE */}
      <UserTable />
      
      {/* ALL CATEGORIES - TABLE */}
      <CategoryTable />
    </PageContainer>
    )
  }
}
