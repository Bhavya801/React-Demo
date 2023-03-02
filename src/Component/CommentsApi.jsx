import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ImportExportIcon from '@mui/icons-material/ImportExport';


export default function CommentsApi(props) {
    return (
    <div><table className='styled-table'>
        <thead>
            <tr>
                <th>ID<ImportExportIcon onClick = {()=> props.sortBy('id')} fontSize = "small"/></th>
                <th>COMMENT<ImportExportIcon onClick = {()=> props.sortBy('body')} fontSize = "small"/></th>
                <th>POSTID<ImportExportIcon onClick = {()=> props.sortBy('postId')} fontSize = "small"/></th>
                <th>USER</th>
                <th> </th>

            </tr>
        </thead>
        <tbody>
        {
        props.comments && props.comments.map(item =><tr><td>{item.id}</td><td>{item.body}</td><td>{item.postId}</td><td>{item.user.username}</td><td><RemoveCircleOutlineIcon onClick={()=>props.dlt(item.id)}/></td></tr>)
        }

    </tbody></table>
    </div>
    )
}

