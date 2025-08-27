function RegularButton({ children, handleClick, handleNextLevel }) {
  return (
    <button
      class="bg-neutral-900 p-4 border-2  border-sky-100 rounded-xl cursor-pointer text-teal-50 text-2xl w-max m-0 mx-auto py-3 px-8 hover:bg-pink-950 focus:bg-red-950"
      onClick={handleClick ?? handleNextLevel}
    >
      {children}
    </button>
  );
}
export default RegularButton;
