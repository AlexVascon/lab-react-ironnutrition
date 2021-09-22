import { useState } from 'react';
import { Divider, Input } from "antd";

export default function SearchFood(props) {

    const filterSearch = e => {
        const search = e.target.value;
        props.filteredResults(search)
    }
    return (
        <>
        <Divider>Search</Divider>

        <label htmlFor="">Search</label>
        <Input type="text" value={props.foodList} onChange={filterSearch} />
        </>
    )
}

