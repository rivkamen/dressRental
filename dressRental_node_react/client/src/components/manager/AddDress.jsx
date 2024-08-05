import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { ColorPicker } from 'primereact/colorpicker';
import { FileUpload } from 'primereact/fileupload';
const AddDress=(props)=>{
     const {handleCloseDialog}=props
    const handleDialogHide = () => {
        // 
    }
    return(
        <>
 <div dir='rtl' style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                {/* <Card style={{ width: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
                 

        {/* <FileUpload style={{ width: '80%', marginBottom: '10px' }} mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} /> */}
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', width: '100%' }}>
            <Button label="בצע" icon="pi pi-check" style={{ width: "45%", marginRight: '5px' }} /> &nbsp;
            <Button label="בטל" severity="secondary" icon="pi pi-times" style={{ width: "45%" }} onClick={handleCloseDialog} />
        </div>
                {/* </Card> */}
            </div>        </>
    )

}
export default AddDress