import { useEffect } from 'react'
import {fetchPosts, increment} from '../../counter/counterSlice' 
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'


function Users() {

    const data = useSelector((state: RootState) =>  state.counter.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts() as any)
    }, [])
    
    return (
        <ul>
        {data.users?.map((post) => {
            return <li key={post.id}>{post.name}</li>
        })}
    </ul>
    )

}

export default Users
