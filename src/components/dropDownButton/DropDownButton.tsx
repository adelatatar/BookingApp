import {useEffect, useState} from 'react'
import axios from "axios";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";


/**
 * This is a dropdown button with a menu that contains all the towns where there are properties available for booking
 */
type configs = {
    towns:string[]
}

interface DropDownProps {
    onSelectTown: (value: string) => any;
}
function DropDownButton({onSelectTown} : DropDownProps) {
    const [configData, setConfigData] = useState<configs>();
    const [selectedTown, setSelectedTown] = useState<string>(localStorage.getItem("selectedTown") || "" );

    useEffect(() => {
        axios
            .get<configs>('http://192.168.123.25:9039/configs')
            .then(res => {setConfigData(res.data)})

    }, [])

    useEffect(() => {
        localStorage.setItem("selectedTown", selectedTown)
    }, [selectedTown])

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedTown(event.target.value as string);
        onSelectTown(event.target.value as string);
    };

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
                value={selectedTown}
                onChange = {handleChange}
            >
                {
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                }
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