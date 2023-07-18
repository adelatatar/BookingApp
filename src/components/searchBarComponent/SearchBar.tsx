import React, {ChangeEvent, useState} from "react";
import './SearchBar.css'
import {TextField} from "@mui/material";

interface SearchBarProps {
    onSearchChange: (value: string) => any;
}

function SearchBar({onSearchChange}: SearchBarProps) {
    const [searchedTerm, setSearchedTerm] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchedTerm(e.target.value);
        onSearchChange(e.target.value);
    };

    return (
        <div className="searchBar">
            <TextField
                value={searchedTerm}
                className={"textField"}
                id="outlined-basic"
                onChange={handleChange}
                variant="outlined"
                fullWidth
                label="Search"
            />
            <button className="searchButton">Search</button>
        </div>
    );
}

export default SearchBar