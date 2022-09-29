import React, { useState } from 'react';
import './Todo.css';
const Todo = () => {
    const [activity, setActivity] = useState("");
    const [listdata, setListdata] = useState([]);
    function addActivity() {
        //  setListdata([...listdata,activity])
        //  console.log(listdata)
        setListdata((listdata) => {
            const UpdatedList = [...listdata, activity]
            console.log(UpdatedList)
            setActivity('');
            return UpdatedList
        })
    }
    function Removeactivity(i) {
 const Updatedlistdata = listdata.filter((element,id)=>{
    return i!=id;
 })
 setListdata(Updatedlistdata)
    }
    function RemoveAll(){
        setListdata([])
    }
    return (
        <>
            <div className='container'>
                <div className='header'>TODO LIST</div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'>Here is your List</p>
                {
                    listdata != [] && listdata.map((data, i) => {
                        return (<>
                            <p key={i}></p>
                            <div className='listData'>{data}</div>
                            <div className='btn-position'><button onClick={()=>Removeactivity(i)}>Remove (-)</button></div>
                        </>)
                    })
                }
                {listdata.length>=2 && <button onClick={RemoveAll}>Remove All</button>}
                
            </div>
        </>
    );
};

export default Todo;