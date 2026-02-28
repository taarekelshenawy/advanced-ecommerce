import categories from './categories/categoriesSlice';
import products from './products/productsSlice';
import cart from './cart/cartSlice';
import wishlist from './wishlist/wishlistSlice'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// ...


const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};
const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemId"],
};



const rootReducer = combineReducers({
  categories,
  products,
  wishlist:persistReducer(wishlistPersistConfig,wishlist),
  cart: persistReducer(cartPersistConfig, cart),
});



const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);

export { store, persistor };
