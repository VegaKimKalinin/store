export const saveState = (state) => {
  try {
    if (state.length > 0) {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('basket', serializedState);
    }
  } catch (error) {
    console.log(error);
  }
};

export const obtainState = () => {
  try {
    const serializedState = localStorage.getItem('basket');
    if (serializedState == null) return [];
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return [];
  }
};
