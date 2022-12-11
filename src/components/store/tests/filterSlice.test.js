import filterReducer,
{ changeFilter }
  from '../slices/filterSlice';


describe('Filter Slice', () => {
  it('Should change complete filter value', () => {
    const action = {
      type: changeFilter.type,
      payload: 'Done'
    };
    const result = filterReducer('', action);
    expect(result).toEqual('Done');
  });
});