const nota = {
  addNota(prevState, action) {
    return [...prevState.notas, action.nota ? action.nota : { items: [] }];
  }
};

export default {
  nota
};
