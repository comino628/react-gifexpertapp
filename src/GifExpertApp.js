import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     //setCategories((c) => {c.push('one piece');return c;});
    //     setCategories((c) => {c.push('one piece');return [...c];});
    // }

    return (
        <>
          <h2>GifExpertApp</h2> 
          <AddCategory setCategories = {setCategories}/>
          <hr/> 
          

        <ol>
            {
                categories.map(category =>(
                    <GifGrid 
                        category={category}
                        key={category}
                    />
                ))
            }
        </ol>

        </>
    )
}
