import dateReducer,
{ changeDateFilter }
  from '../slices/dateSlice';


describe('Date Slice', () => {
  it('Should change date filter value', () => {
    const action = {
      type: changeDateFilter.type,
      payload: '2022-12-11'
    };
    const result = dateReducer(null, action);
    expect(result).toEqual('2022-12-11');
  });
});