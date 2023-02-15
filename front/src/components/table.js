import * as React from 'react';
import DataJson from "../data.json"
import HeaderApp from "./header";
import Behind from "./behind";
import { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';

export default function DataTable() {

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
          "header": "investors_name"
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
    turnFilters ? csvExporter.generateCsv(map_obj) : csvExporter.generateCsv(dataApi);
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
  }

  /*not working properly right now
  must clear inputs and filters var
  */
  function clearFilter(event){
    event.preventDefault()
    setFilters({})
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
  let map_obj = dataApi.filter((obj)=>{
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
  function flattern(array){
    const final = array.map((obj)=>{
      return (<div>{Object.keys(obj).map((key)=>{
        return(<Typography><strong>{key}:</strong> {obj[key]}</Typography>)
      })}<br /></div>)
    })
    return (final.flat(1))
  }  


  return (
    <>
      <div className='tableView'>
        <div className='frontCover'>
          <HeaderApp />
          <div>{!turnFilters?
            <div className='filterInput'>
              <div className='labels'> 
                <label htmlFor='investors_name'>investors name</label>
                <label htmlFor="Primary_Investor_Type">Primary investor type</label>
                <label htmlFor='Preferred_Investment_Types'>Preferred Invt. Types</label>
                <label htmlFor='Preferred_Industry'>Preferred Industry</label>
                <label htmlFor='Preferred_Verticals'>Preferred Verticals</label>
                <label htmlFor='Preferred_Verticals'>Preferred Invt. amount</label>
              </div>
              <div className='justInputs'> 
                <input name="investors_name" type="text" value={filters.investors_name}
                 placeholder="type here..." onChange={createFilter} />

                <input name="Primary_Investor_Type" type="text" value={filters.Primary_Investor_Type}
                 placeholder="type here..." onChange={createFilter} />

                <input name="Preferred_Investment_Types" type="text" value={filters.Preferred_Investment_Types}
                 placeholder="type here..." onChange={createFilter} />

                <input name='Preferred_Industry' type="text" value={filters.Preferred_Industry}
                placeholder="type here..." onChange={createFilter} />

                <input name='Preferred_Verticals' type="text" value={filters.Preferred_Verticals}
                 placeholder="type here..." onChange={createFilter} />
                <input name='Preferred_Investment_Amount' type="text" value={filters.Preferred_Investment_Amount}
                 placeholder="type here..." onChange={createFilter} />
              </div>
              <div className='buttonSec'>
                <button onClick={turnFiltersFun}>filter</button>
                <button name="secondB" onClick={clearFilter}>clear</button>
              </div>
            </div>:<></>}
          </div>
          <div>{turnFilters?
            <div className="table2">
              <MaterialReactTable
                columns={columns}
                data={turnFilters?map_obj:dataApi}
                initialState={{ density: 'compact', pagination: { pageSize: 25, pageIndex: 0 }, 
                                columnVisibility: { id: false }}}
                muiTableContainerProps={{ sx: { width:"1500px", height:"500px"} }}
                muiTableProps={{
                  sx: {
                    tableLayout: 'fixed',
                  },
                }}
                muiTableBodyRowProps={{ sx: { height:"5px", maxHeight:"30px" } }}
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
                  <Button
                    color="primary"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                    >
                    Export All Data
                  </Button></Box>
                )}
              />
              <button name="ok" onClick={turnFiltersFun}>Ok</button>
              </div>:<></>}
            </div>
          <Behind />
        </div>
        <div className='backCover'></div>
      </div>
    </>
  );
}
