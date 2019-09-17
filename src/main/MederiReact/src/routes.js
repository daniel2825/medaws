import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import UserPage from "views/UserPage.jsx";
import EcoTrastoracico from "views/EcocardiogramaTrastoracico.jsx";
import ECOTRANSESOFAGICO from "views/ECOCARDIOGRAM_TRANSESOFAGICO.jsx";
import Pba_Esfuerzo from "views/PBA_Esfuerzo";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "ELECTROCARDIOGRAMA",
    icon: "design_app",
    component: UserPage,
    layout: "/admin",
    nombreCompleto:"ELECTROCARDIOGRAMA"
  },
  {
    path: "/EcoTrastoracico",
    name: 'ECOTT' /*ECOCARDIOGRAMA TRANSTORACICO'*/,
    icon: "design_app",
    component: EcoTrastoracico,
    layout: "/admin",
    nombreCompleto:"ECOCARDIOGRAMA TRANSTORACICO"
 
  },
  {
    path: "/ECOTRANSESOFAGICO",
    name: "ECOTE" /*ECOCARDIOGRAMA TRANSESOFAGICO"*/,
    icon: "design_app",
    component: ECOTRANSESOFAGICO,
    layout: "/admin",
    nombreCompleto:"ECOCARDIOGRAMA TRANSESOFAGICO"
 
  },
  {
    path: "/Pba_Esfuerzo",
    name: "PBA"/*Prueba de esfuerzo"*/,
    icon: "design_app",
    component: Pba_Esfuerzo,
    layout: "/admin",
    nombreCompleto:"PRUEBA DE ESFUERZO"
 
  }
];
export default dashRoutes;
