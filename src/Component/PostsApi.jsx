import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ImportExportIcon from '@mui/icons-material/ImportExport';


export default function PostsApi(props) {
  return (
    <div><table  id = "table-wrapper">
        <thead>
            <tr>
                <th>ID<ImportExportIcon onClick = {()=> props.sortBy('id')} fontSize = "small"/></th>
                <th>TITLE<ImportExportIcon onClick = {()=> props.sortBy('title')} fontSize = "small"/></th>
                <th>BODY<ImportExportIcon onClick = {()=> props.sortBy('body')} fontSize = "small"/></th>
                <th>TAGS<ImportExportIcon onClick = {()=> props.sortBy('tags')} fontSize = "small"/></th>
                <th> </th>
            </tr>

        </thead>
        <tbody>
        {
        props.posts && props.posts.map(item =><tr><td>{item.id}</td><td>{item.title}</td><td>{item.body}</td><td>{item.tags}</td><td><RemoveCircleOutlineIcon onClick={()=>props.dlt(item.id)}/></td></tr>)
        }
    </tbody></table>
    </div>
  )
}

