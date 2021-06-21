import Pagination from './Pagination';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Pagination />);
});