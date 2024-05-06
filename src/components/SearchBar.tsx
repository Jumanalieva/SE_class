import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

// Define an interface for the component's props
interface SearchBarProps {
  onSearch: (term: string) => void;  // Define the type of the `onSearch` function
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="p-4">
      <div className="flex items-center border-2 border-gray-300 rounded">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          InputProps={{
            className: "rounded-l",
          }}
        />
        <IconButton onClick={handleSearch} className="rounded-r">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
