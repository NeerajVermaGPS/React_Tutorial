import { useEffect } from 'react'

function UseDocumentTitle(count) {
    useEffect(()=>{
        document.title = `Title: ${count}`;
    }, [count])
}

export default UseDocumentTitle
