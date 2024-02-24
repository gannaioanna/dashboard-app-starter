import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPosition } from 'store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-action';

const JobList = () => {
  const dispatch = useDispatch();
  const positions = useSelector(selectAllPosition);

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
