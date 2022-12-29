import { useEffect } from 'react'
import {fetchPosts, increment} from '../../counter/counterSlice' 
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'

function ReduxSlice() {

    const dispatch = useDispatch()
    const {count} = useSelector((state: RootState) => {
        return {
            count: state.counter.value
        }
    })

    
    useEffect(() => {
        dispatch(fetchPosts() as any)
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <button type="button" onClick={()=>dispatch(increment())}>Incrementa</button>
            <button type="button">Decrementa</button>
        </>
    )
}

export default ReduxSlice