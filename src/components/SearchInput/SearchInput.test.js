import SearchInput from './SearchInput';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';
import { Provider } from 'react-redux';
import { saveState, loadState } from '../../services/persistServices';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

it('renders without crashing', () => {
    shallow(
        <Provider store={store}>
            <SearchInput />
        </Provider>
    );
});