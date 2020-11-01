import React from "react";
import PropTypes from "prop-types";
import FilterStyle from "./Filter.component";


const Filter = ({ onChange  }) => {
  return (
    <FilterStyle>
      Find contacts by name:
      <input type="text" name="filter" onChange ={onChange} />
    </FilterStyle>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
