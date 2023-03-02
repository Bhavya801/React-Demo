import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ImportExportIcon from '@mui/icons-material/ImportExport';


export default function TodoApi(props) {
  return (
    (<div><table id = "table-wrapper">
    <thead>
        <tr>
                <th>ID<ImportExportIcon onClick = {()=> props.sortBy('id')} fontSize = "small"/></th>
                <th>TASK<ImportExportIcon onClick = {()=> props.sortBy('todo')} fontSize = "small"/></th>
                <th>USER ID<ImportExportIcon onClick = {()=> props.sortBy('userId')} fontSize = "small"/></th>
                <th> </th>

        </tr>
    </thead>
    <tbody>
  {
        props.todos && props.todos.map(item =><tr><td>{item.id}</td><td>{item.todo}</td><td>{item.userId}</td><td><RemoveCircleOutlineIcon onClick={()=>props.dlt(item.id)}/></td></tr>)
    }
</tbody></table>
</div>
    )
  )
}


