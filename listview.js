/*
  CO2-calculator.
  Author: Tania Andersen, tan AT ing DOT dk
  License: The Unlicense, https://github.com/tania-andersen/CO2-app/blob/main/LICENSE
*/

import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Button from '@material-ui/core/Button'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import Box from '@material-ui/core/Box'

import { useState } from "react";

import { Link } from "gatsby"

const IndexPage = () => {

  const Co2Entry = (props) => {
    var localizedDate = new Intl.DateTimeFormat('da-DK', {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(Date.parse(props.date))

    const remove = (e) => {
      props.onDelete(props.index)
    }

    return (
      <ListItem>
        <Box component="span" width={1 / 5} size="small" p={1}>Dato: {localizedDate}</Box>
        <Box component="span" width={1 / 5} size="small" p={1}>CO2: {props.co2e.toFixed(1)} g</Box>
        <IconButton aria-label="delete" size="small" onClick={remove}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    )

  }

const ListView = () => {
  var savedEntriesAsJson
  var savedEntries = new Array() // Af hensyn til Gatsby build, som ellers fejler efterfølgende. 

  if (typeof localStorage !== "undefined") { savedEntriesAsJson = localStorage.getItem("savedEntries") }

  if (savedEntriesAsJson === null) {
    savedEntries = new Array()
  } else {
    try {
      savedEntries = JSON.parse(savedEntriesAsJson)
    } catch (e) {
      // Af hensyn til Gatsby build, som fejler på ovenstående.
    }
  }

const [entries, updateEntries] = useState(savedEntries);

const handleRemoveItem = (index) => {
  const newEntries = entries.filter((element, i) => index != i)
  updateEntries(newEntries)
  savedEntriesAsJson = JSON.stringify(newEntries)
  if (typeof localStorage !== "undefined") { localStorage.setItem("savedEntries", savedEntriesAsJson) }
};

    var co2eTotal = 0.0

    return (
      <Box>
        <List style={{ maxHeight: '0%', overflow: 'auto' }}>
          {savedEntries.map((entry, index) => {
            co2eTotal += entry.co2e
            return (
              <Co2Entry
                date={entry.date}
                co2e={entry.co2e}
                key={entry.date.toString()}
                index={index}
                onDelete={handleRemoveItem}
              />
            );
          })}
          <ListItem>
            <Box sx={{ fontWeight: 'bold', fontSize: 18 }}>Total: {co2eTotal.toFixed(1)} g</Box>
          </ListItem>
          <ListItem>
            <Link to="/" style={{textDecoration: 'none'}} ><Button variant="outlined">Tilbage</Button></Link>
          </ListItem>
        </List>

      </Box>

    );
  };

  return (
    <ListView />
  )

}

export default IndexPage
