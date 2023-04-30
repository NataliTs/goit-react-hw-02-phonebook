import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" name="filter" value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
