import { useState } from "react";
import {createUseStyles} from "react-jss";
import "antd/dist/antd.css";
import MyGraph from "./graph";
import DropdownSelector from "./menu";
import dataSet from "./data";

const useStyles = createUseStyles(() => ({
  container: {
   color: '#fff',
   padding: '1rem',
   transition: '0.3s ease-in-out',
   width: '1000px',
   height: '400px',
   display:'flex',
   flexDirection:'column',
   position:'relative'
 }
}));

const Analytics = () => {
  const classes = useStyles()
  const [data, setData] = useState(dataSet.Today);
  
  const fetchCustomData = (key) => {
    setData(dataSet[key]);
  };
  
  return (
   <div className={classes.container}>
    <h1>Analytics</h1>
    <DropdownSelector fetchCustomData={fetchCustomData} />
    <MyGraph data={data} />
   </div>
  );
}
export default Analytics;