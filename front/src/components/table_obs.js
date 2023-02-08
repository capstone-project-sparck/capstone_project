import { DataGrid, GridToolbar} from '@mui/x-data-grid';


/*let columns1 = Object.keys(DataJson[0]).map((key)=>{
  return {field:key, headerName:key, editable: false, width:220}
    })*/

    /*let memodata = Object.keys(DataJson[0]).map((element)=>{
      return {accessorKey:element, header: element.replace(/ /gi,"")}
    }
  )*//*let columns1 = Object.keys(DataJson[0]).map((key)=>{
  return {field:key, headerName:key, editable: false, width:220}
    })*/

    /*let memodata = Object.keys(DataJson[0]).map((element)=>{
      return {accessorKey:element, header: element.replace(/ /gi,"")}
    }
  )*/


        /*function pivot(arr) {
        var mp = new Map();
        
        function setValue(a, path, val) {
            if (Object(val) !== val) { // primitive value
                var pathStr = path.join('.');
                var i = (mp.has(pathStr) ? mp : mp.set(pathStr, mp.size)).get(pathStr);
                a[i] = val;
            } else {
                for (var key in val) {
                    setValue(a, key === '0' ? path : path.concat(key), val[key]);
                }
            }
            return a;
        }
        
        var result = arr.map( obj => setValue([], [], obj) );
        return [[...mp.keys()], ...result];
    }
    
    function toCsv(arr) {
        return arr.map( row => 
            row.map ( val => isNaN(val) ? JSON.stringify(val) : +val ).join(',')
        ).join('\n');
    }

    console.log(toCsv(pivot(DataJson)));*/


    {/*<div>{turnFilters?
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
        getRowId={(row)=>row[" Identifier"]}
        columns={columns1}
        rows={turnFilters?map_obj:DataJson}
        pageSize={10}
        components={{ Toolbar: GridToolbar }}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    <button name="ok" onClick={turnFiltersFun}>Ok</button>
    </div>:<></>}
    </div>*/}