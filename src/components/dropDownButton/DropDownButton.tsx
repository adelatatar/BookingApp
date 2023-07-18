import {useEffect, useState} from 'react'
import axios from "axios";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

type configs = {
    towns:string[]
}
function DropDownButton() {
    const [configData, setConfigData] = useState<configs>();

    useEffect(() => {
        axios
            .get<configs>('http://192.168.123.25:9039/configs')
            .then(res => {setConfigData(res.data)})
    }, [])

    return(
        <FormControl sx = {{
                            width : 200,
                            marginLeft: '2%',
                            marginBottom: '1%'
                            }}>
            <InputLabel id="demo-simple-select-label">Filter by Town</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filter by Town"
                value={configData}
            >
                {
                    configData?.towns.map(town => {
                        return (
                            <MenuItem key={town} value={town}>{town}</MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>
    );
}
export default DropDownButton