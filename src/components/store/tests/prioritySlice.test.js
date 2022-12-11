import priorityReducer,
{ changePriorityFilter }
  from '../slices/prioritySlice';


describe('Priority Slice', () => {
  it('Should change priority filter value', () => {
    const action = {
      type: changePriorityFilter.type,
      payload: 'High'
    };
    const result = priorityReducer('', action);
    expect(result).toEqual('High');
  });
});