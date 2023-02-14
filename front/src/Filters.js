import React from "react"
import NavbarC from "./Navbar"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import { Button as Button1} from '@mui/material';
import { useMemo } from "react"
import { Box, Typography } from '@mui/material';
import MaterialReactTable from "material-react-table"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';
import DataJson from "./data.json"
import Footers from "./footer";


export default function Filters(props) { 


    /*all react states:
    *@filters: is used to get values from input and filter the table
    *@turnFilters: show the table after filtering
    *@dataApi: fetch the data from the API 
    */
    let [filters, setFilters] = React.useState({}) 
    let [turnFilters, setTurnFilters] = React.useState(false)
    let [dataApi, setDataApi] = React.useState([])


    /*
    colums is used to create headers for the material-react-table
    useMemo is a Must
    */

    const columns = useMemo(
        () => [
        {
            "accessorKey": "id",
            "header": "id",
            
        },
        {
            "accessorKey": "investors_name",
            "header": "investors_name",
        },
        {
            "accessorKey": "Techstars_companies_invested",
            "header": "Techstars_companies_invested"
        },
        {
            "accessorKey": "Website",
            "header": "Website"
        },
        {
            "accessorKey": "Primary_Investor_Type",
            "header": "Primary_Investor_Type"
        },
        {
            "accessorKey": "Preferred_Investment_Types",
            "header": "Preferred_Investment_Types",
            size: 300,
        },
        {
            "accessorKey": "Preferred_Industry",
            "header": "Preferred_Industry",
            size: 300,
        },
        {
            "accessorKey": "Preferred_Verticals",
            "header": "Preferred_Verticals",
            size: 300,
        },
        {
            "accessorKey": "Preferred_Geography",
            "header": "Preferred_Geography"
        },
        {
            "accessorKey": "Preferred_Investment_Amount",
            "header": "Preferred_Investment_Amount",
        },
        {
            "accessorKey": "Primary_Contact",
            "header": "Primary_Contact"
        },
        {
            "accessorKey": "Primary_Contact_Title",
            "header": "Primary_Contact_Title"
        },
        {
            "accessorKey": "Primary_Contact_Email",
            "header": "Primary_Contact_Email"
        },
        {
            "accessorKey": "HQ_Location",
            "header": "HQ_Location"
        },
        {
            "accessorKey": "Investor_Status",
            "header": "Investor_Status"
        },
        ],
        [],
    );

    /*csv options for export-to-csv library
    !IMPORTANT -- this library doesn't work
    we need to find a way to export csv with nested
    objects and arrays
  */

    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header),
    };

    const csvExporter = new ExportToCsv(csvOptions);

    /*const handleExportRows = (rows) => {
      csvExporter.generateCsv(rows.map((row) => row.original));
    };*/
      
    const handleExportData = () => {
      csvExporter.generateCsv(DataJson);
    };
    
    //useEffect to avoid infinite loop getting data from api
    React.useEffect(()=>{
        const getData = async () => {
          const data = await fetch("http://127.0.0.1:8000/investors")
          const finalData = await data.json()
          setDataApi(finalData)
        }
        getData()
    },[])

    //filter creation with inputs
    function createFilter(event){
        setFilters((oldValue)=>{return ({...oldValue, [event.target.name]:event.target.value})})
        console.log(filters)
    }

    /*not working properly right now
    must clear inputs and filters var
    */
    function clearFilter(event){
        event.preventDefault()
        setFilters(()=>{
        return {investors_name:"" , Primary_Investor_Type:"",
        Preferred_Investment_Types:"", Preferred_Industry:"", 
        Preferred_Verticals:"", Preferred_Investment_Amount:"",
        };
        })
        console.log(filters)
        //setFilters({})
    }

    //this function filters the raw data
    function turnFiltersFun(){
        setTurnFilters(oldValue=>!oldValue)
            if(turnFilters === true){
        setFilters({})
        }
    }

    //filter function creates an object to parse with data
    // eslint-disable-next-line 
    let map_obj = DataJson.filter((obj)=>{
        let flag = 0
            for (let keys of Object.keys(obj)){
            for(let key of Object.keys(filters)){
                if(keys === key){
                const filters_array = filters[key].split(", ")
                for(let item of filters_array){
                    if(obj[keys].toLowerCase().includes(item.toLowerCase())){
                    flag = flag + 1;
                    break;
                    }
                }
                }
            }
            }
        if(flag === Object.keys(filters).length){return obj}
        }
    )

    /*flattern gets the data from connections 
    and makes data renderizable for table
    */
    // eslint-disable-next-line
    function flattern(array){
        const final = array.map((obj)=>{
          return (<div>{Object.keys(obj).map((key)=>{
            if(key === "id" || key === "investors_id"){
              // eslint-disable-next-line
              return;
            }
            return(<Typography><strong>{key}:</strong> {obj[key]}</Typography>)
          })}<br /></div>)
        })
        return (final.flat(1))
      }  


    return(
        <>
        <NavbarC />
        <div style={{backgroundColor:"black", paddingTop:"1rem"}}>{!turnFilters?
        <div className="divFilter">
        <Stack className="stackInputs" gap={0}>
            <div>
            <label htmlFor='investors_name'>Investors name</label>
            <input name="investors_name" type="text" value={filters.investors_name}
                placeholder="type here..." onChange={createFilter} />
                <p><i>for more than one item, use comma "," and space</i></p>
            </div>
            <div>
            <label htmlFor="Primary_Investor_Type">Primary investor type</label>
            <input name="Primary_Investor_Type" type="text" value={filters.Primary_Investor_Type}
                placeholder="type here..." onChange={createFilter} />
                <p><i>for more than one item, use comma "," and space</i></p>
            </div>
            <div>
            <label htmlFor='Preferred_Investment_Types'>Preferred Invt. Types</label>
            <input name="Preferred_Investment_Types" type="text" value={filters.Preferred_Investment_Types}
                placeholder="type here..."  onChange={createFilter}/>
                <p><i>for more than one item, use comma "," and space</i></p>
            </div>
            <div>
            <label htmlFor='Preferred_Industry'>Preferred Industry</label>
            <input name='Preferred_Industry' type="text" value={filters.Preferred_Industry}
            placeholder="type here..."  onChange={createFilter} />
                <p><i>for more than one item, use comma "," and space</i></p>
            </div>
            <div>
            <label htmlFor='Preferred_Verticals'>Preferred Verticals</label>
            <input name='Preferred_Verticals' type="text" value={filters.Preferred_Verticals}
                placeholder="type here..." onChange={createFilter} />
                <p><i>for more than one item, use comma "," and space</i></p>
            </div>
            <div>
            <label htmlFor='Preferred_Investment_Amount'>Preferred Invt. amount</label>
            <input name='Preferred_Investment_Amount' type="text" value={filters.Preferred_Investment_Amount}
                placeholder="type here..." onChange={createFilter} />
                <p><i>for more than one item, use comma "," and space</i></p>
            </div>
        </Stack>
        <Stack className="stackFilters">
        <Button type="submit" className="filterButton" onClick={turnFiltersFun}>
        Submit
      </Button>
      <Button type="submit" className="filterButton" onClick={clearFilter}>
        Clear
      </Button>
      <p>it will clean every filter</p>
        </Stack>
        <Footers />
        </div>:<></>}
        </div>{/*end */}
        <div className="contTable">{turnFilters?
            <div className="table">
              <MaterialReactTable
                columns={columns}
                data={turnFilters?map_obj:DataJson}
                initialState={{ density: 'compact', pagination: { pageSize: 25, pageIndex: 0 }, 
                                columnVisibility: { id: false }}}
                muiTableContainerProps={{ sx: {maxHeight:"22rem"} }}
                muiTableProps={{
                  sx: {
                    tableLayout: 'fixed',
                    backgroundColor:"rgb(220, 220, 220)  !important"
                  },
                }}
                muiTableBodyCellProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                muiBottomToolbarProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                muiTableDetailPanelProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                muiTablePaperProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                muiTopToolbarProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                muiTableHeadCellProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                muiTableBodyRowProps={{ sx: { backgroundColor:"rgb(220, 220, 220) !important" } }}
                renderDetailPanel=
                {({ row }) => (
                <Box
                  sx={{
                    display: 'grid',
                    margin: 'auto',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    width: '100%',
                  }}
                  >
                {flattern(row.original.Connections)}
                </Box>
                )}

                enableRowSelection
                positionToolbarAlertBanner="bottom"
                renderTopToolbarCustomActions=
                {({ table }) => (
                  <Box
                    sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
                    >
                  <Button1
                    color="primary"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                    >
                    Export All Data
                  </Button1></Box>
                )}
              />
              <Button className="filterButton" name="OK" onClick={turnFiltersFun}>Ok</Button>
              <Footers />
              </div>:<></>}
            </div>
        </>
    )
}