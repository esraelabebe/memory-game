import RegularButton from "./RegularButton";
import "./Form.css";

function Form({ handleSubmit, handleChange, loading }) {
  return (
    <div className="form-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form className="form-wrapper">
          <div className="form__inner-wrapper">
            <label htmlFor="category">Select an emoji category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="animals-nature">Animals & Nature</option>
              <option value="food-drink">Food Drink</option>
              <option value="travel-places">Travel and Places</option>
              <option value="objects">Objects</option>
              <option value="symbols">Symbols</option>
            </select>
          </div>
          <div className="form__inner-wrapper">
            <label htmlFor="number">Select the number of memory cards</label>
            <select name="number" id="number" onChange={handleChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
        </form>
      )}
    </div>
  );
}

export default Form;
