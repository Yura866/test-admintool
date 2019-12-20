import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import WalletCard from "@/pages/WalletCard.vue";
import TableList from "@/pages/TableList.vue";
import EditProfileForm from "@/pages/EditProfileForm.vue"

const routes = [
  {
    path: "/",    
    component: DashboardLayout,
    redirect: "/table-list",
    children: [     
  
      {
        path: "user-profile",
        param: "user",
        name: "user-profile",
        component: EditProfileForm
      },
      {
        path: "wallet-card",
        param: "wallet",
        name: "wallet-card",
        component: WalletCard
      },    

      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: TableList }
];

export default routes;
