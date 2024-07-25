import React from "react";

import { Icon, layout } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdLogout,
  MdOutlineShoppingCart,
  MdLogin,
  MdAdminPanelSettings,
  MdNotifications,
  MdDashboard,
  MdPeopleAlt,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SignIn from "views/auth/signIn/index.jsx";
import SignUp from "views/auth/signUp/index.jsx";
import { FaDatabase } from "react-icons/fa";
import IncidentLog from "views/admin/incidentLog";
import MailboxMonitoring from "views/admin/mailboxMonitoring";
import ProtectedUsers from "views/admin/protectedUsers";
import VendorDatabase from "views/admin/vendorDatabase";
import EmailAnalysis from "views/admin/emailAnalysis";
// import IncidentLog from "views/admin/incidentLog";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' mt={2} />,
    component: MainDashboard,
  },
  {
    name: "Incident Log",
    layout: "/admin",
    icon: <Icon as={MdNotifications} width='20px' height='20px' color='inherit' mt={2} />,
    path: "/incidentlog",
    component: IncidentLog,
  },
  {
    name: "Mailbox Monitoring",
    layout: "/admin",
    path: "/mailboxmonitoring",
    icon: <Icon as={MdDashboard} width='20px' height='20px' color='inherit' mt={2} />,
    component: MailboxMonitoring,
  },
  {
    name: "Protected Users",
    layout: "/admin",
    path: "/protectedusers",
    icon: <Icon as={MdPeopleAlt} width='20px' height='20px' color='inherit' mt={2} />,
    component: ProtectedUsers,
  },
  {
    name: "Vendor Database",
    layout: "/admin",
    path: "/vendordatabase",
    icon: (
      <Icon
        as={FaDatabase}
        width='20px'
        height='20px'
        color='inherit'
        mt={2}
      />
    ),
    component: VendorDatabase,
    // secondary: true,
  },
  {
    name: "",
    layout: "/admin",
    path: `/emailanalysis/:id`,
    component: EmailAnalysis,
    hideFromSidebar: true,
  },
  {
    name: "",
    layout: "/auth",
    path: "/sign-in",
    component: SignIn,
    hideFromSidebar: true,  // Custom property
  },
  {
    name: "",
    layout: "/auth",
    path: "/sign-up",
    component: SignUp,
    hideFromSidebar: true,  // Custom property
  },


  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  // {
  //   name: "Signin",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: (
  //     <Icon as={MdLogin} width='16px' height='16px' color='inherit' />
  //   ),
  //   component: SignIn,
  //   hide: true
  // },
  // {
  //   name: "Sign up",
  //   layout: "/auth",
  //   path: "/sign-up",
  //   icon: (
  //     <Icon as={MdLock} width='16px' height='16px' color='inherit' />
  //   ),
  //   component: SignUp,
  //   hide: true
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdAdminPanelSettings} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
];

export const Logout = [
  // {
  //   name: "Log Out",
  //   layout: "/auth",
  //   path: "/sign-out",
  //   icon: (
  //     <Icon as={MdLogout} width='16px' height='16px' color='inherit' />
  //   ),
  //   component: SignIn,
  // }
];
export default routes;
