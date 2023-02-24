import NavbarC from "./Navbar";
import MaterialReactTable from "material-react-table";
import { useMemo } from "react";
import React from "react";
import Footer from "./footer";

const Connections = (props) =>{
    /*
    this component is still in build stage
    and will display the contacts of a particular
    investor
    */
    let [dataApi, setDataApi] = React.useState([])

    //use to fetch data from the Api
    React.useEffect(()=>{
        const getData = async () => {
          const data = await fetch("http://127.0.0.1:8000/investors")
          const finalData = await data.json()
          setDataApi(finalData[0].Connections)
        }
        getData()
    },[])

    //table construction 
    const columns = useMemo(
        () => [
        {
            "accessorKey": "email",
            "header": "email",
            
        },
        {
            "accessorKey": "name",
            "header": "name",
        },
        {
            "accessorKey": "type",
            "header": "type",
        },
    ],
        [],
    );

    return(<div className="ConnectionRoot">
        <NavbarC />
        <div className="contentCon">
        <div className="connectionSearch">
                <label htmlFor='investors_name'>Compnany ID</label>
                <input name="investors_name" type="text" 
                placeholder="0034377f-361e-3e26-a4cf-f824322b54e2" />
                <p><i>for more than one item, use comma "," and space</i></p>
        </div>
        <div className="tableC">
        <MaterialReactTable
        enableColumnResizing
        columns={columns}
        data={dataApi}
        defaultColumn={{
            minSize: 20, //allow columns to get smaller than default
            maxSize: 9001, //allow columns to get larger than default
            size: 260, //make columns wider by default
          }}
        muiTableContainerProps={{ sx: {maxHeight:"17rem" } }}
        muiTableProps={{
            sx: {
              tableLayout: 'fixed',
              maxWidth:"6rem",
              backgroundColor:"rgb(220, 220, 220)  !important"
            },
          }}
        />
        </div>
        </div>
        <Footer />
    </div>)
}

export default Connections;