import React from "react";
import AdminCarousel from "../AdminCarousel/AdminCarousel";
import { AdminLinks } from "./Data";
import { PageContainer, PageHeading } from "./Dashboard.Elements";
// import CustomTable from "../CustomTable/CustomTable";
import UserTable from "../CustomTable/UserTable";
import CategoryTable from "../CustomTable/CategoryTable";

function Dashboard() {
  return (
    <PageContainer>
      <PageHeading>Admin Dashboard</PageHeading>
      <AdminCarousel dataSource={AdminLinks} />

      <PageHeading>Active Users</PageHeading>
      <UserTable />

      <PageHeading>Pages / Categories</PageHeading>
      <CategoryTable />
    </PageContainer>
  );
}

export default Dashboard;