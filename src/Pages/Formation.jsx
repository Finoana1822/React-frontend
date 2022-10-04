import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Formation = () => {
    const link = 'http://127.0.0.1:8000/api/formations/';
    const [Formation, setFormation] = useState();
    useEffect(()=>{
        getFormation();
    },[])
    const getFormation = async () => {
        await axios.get()
    }
    return (
        <div>
            
        </div>
    );
};

export default Formation;