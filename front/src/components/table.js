import * as React from 'react';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import DataJson from "../data.json"
import HeaderApp from "./header";
import Behind from "./behind";


export default function DataTable() {
let [filters, setFilters] = React.useState({}) 
let [turnFilters, setTurnFilters] = React.useState(false)
let [dataApi, setDataApi] = React.useState([])
let columns1 = Object.keys(DataJson[0]).map((key)=>{
  return {field:key, headerName:key, editable: false, width:220, headerClassName: 'super-app-theme--header'}
    })


React.useEffect(()=>{
  const getData = async () => {
    const data = await fetch("http://127.0.0.1:8000/investors")
    const finalData = await data.json()
    setDataApi(finalData)
  }
  getData()
},[])

  function createFilter(event){
    setFilters((oldValue)=>{return ({...oldValue, [event.target.name]:event.target.value})})
  }

  function clearFilter(event){
    event.preventDefault()
    setFilters({})
  }

  function turnFiltersFun(){
    setTurnFilters(oldValue=>!oldValue)
    if(turnFilters === true){
      setFilters({})
    }
  }
   
// eslint-disable-next-line 
let map_obj = dataApi.filter((obj)=>{
  let flag = 0
      for (let keys of Object.keys(obj)){
        for(let key of Object.keys(filters)){
          if(keys === key){
            if( obj[keys].toLowerCase().includes(filters[key].toLowerCase())){
                  flag = flag + 1  }
                }
            }
        }
    if(flag === Object.keys(filters).length){return obj}})     

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
    <input name="investors_name" type="text" value={filters.investors_name} placeholder="type here..." onChange={createFilter} />
    <input name="Primary_Investor_Type" type="text" placeholder="type here..." onChange={createFilter} />
    <input name="Preferred_Investment_Types" type="text" placeholder="type here..." onChange={createFilter}/>
    <input name='Preferred_Industry' placeholder="type here..." onChange={createFilter} type="text" />
    <input name='Preferred_Verticals' type="text" placeholder="type here..." onChange={createFilter} />
    <input name='Preferred_Investment_Amount' type="text" placeholder="type here..." onChange={createFilter} />
    </div>
    <div className='buttonSec'>
    <button onClick={turnFiltersFun}>filter</button>
    <button name="secondB" onClick={clearFilter}>clear</button>
    </div>
    </div>:<></>}
    </div>
    
    <div>{turnFilters?
    <div className="table2">
    <div style={{width:"1500px", height:"500px"}}>
      <DataGrid
      sx={{
        borderRadius: "15px",
        background: "white",
        boxShadow: "inset 0px 0px 4px 4px black",
        border: 2,
        fontWeight: 400,
        borderColor: 'black',
        '& .super-app-theme--header': {
            fontWeight: 1200
          },
      }}
        getRowId={(row)=>row["id"]}
        columns={columns1}
        rows={turnFilters?map_obj:dataApi}
        pageSize={10}
        components={{ Toolbar: GridToolbar }}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
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

//{turnFilters? filters:DataJson}