import type { Item } from './Item';
import type { ItemComponentActions } from './ItemComponentActions';

interface ItemState {
  items: Item[];
}

const itemReducer = (state: ItemState, action: ItemComponentActions): ItemState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export default itemReducer;
