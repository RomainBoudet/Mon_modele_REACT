import axios from 'axios';
/* import {
  FETCH_DATA,
  FETCH_MORE_DATA,
  saveData,
  saveMessage,
  loading,
  activePage,
} from 'src/actions' */;


// Une fonction qui return une fonction qui return une fonction !

const middleware = (store) => (next) => (action) => {
  /* switch (action.type) {
    case FETCH_DATA: {
      const FetchData = async () => {
        const state = store.getState();

        store.dispatch(loading(true));

        try {
          const filter = '&sort=star&order=desc&page=1&per_page=12';

          const response = await axios({
            method: 'get',
            url: `${process.env.BASE_URL}${state.inputSearch}${filter}`,
          });
          store.dispatch(saveData(response.data.items));
          store.dispatch(saveMessage(`Votre recherche a donné ${response.data.total_count} résultats !`));
        }
        catch (error) {
          console.trace(error);
        }
        finally {
          store.dispatch(loading(false));
        }
      };
      FetchData();
      break;
    }
    case FETCH_MORE_DATA: {
      const fetchMoreData = async () => {
        const state = store.getState();

        store.dispatch(activePage(state.activePage + 1));
        store.dispatch(loading(true));
        try {
          const filter = `&sort=star&order=desc&page=${state.activePage + 1}&per_page=12`;

          const response = await axios({
            method: 'get',
            url: `${process.env.BASE_URL}${state.inputSearch}${filter}`,
          });
            // ancien résultats, plus les nouveaux !
          store.dispatch(saveData([...state.data, ...response.data.items]));
          store.dispatch(saveMessage(`Votre recherche a donné ${response.data.total_count} résultats !`));
        }
        catch (error) {
          console.trace(error);
        }
        finally {
          store.dispatch(loading(false));
        }
      };
      fetchMoreData();
      break;
    } 
    default:
      next(action);
  } */
};

export default middleware;
