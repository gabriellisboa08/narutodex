import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '50%',
  flexDirection: "row-reverse",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBar(props) {
  console.log('props', props)
  const [value, setValue] = useState('');
 
  const handleChange = (event) => {
    setValue(event.target.value);
    filterCharacters(value)
  };

  const filterCharacters = (name) => {
    const regex = new RegExp(name, 'i');
     props.onFilterCharacter(props.characters.filter(character => {
      return customILikeFilter(name, character.name)
    }), name);
  }

  const customILikeFilter = (searchTerm, targetString) => {
    const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearchTerm, 'i');
    return regex.test(targetString);
  };

  return (
    <Box sx={{display: 'flex'}}>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              type="text"
              value={value}
              onChange={handleChange}
              characters={props.characters}
              
            />
          </Search>
    </Box>
  );
}