import searchReducer,
{ changeSearchFilter }
  from '../slices/searchSlice';


describe('Search Slice', () => {
  it('Should change search filter value', () => {
    const action = {
      type: changeSearchFilter.type,
      payload: 'Learn'
    };
    const result = searchReducer('', action);
    expect(result).toEqual('Learn');
  });
});