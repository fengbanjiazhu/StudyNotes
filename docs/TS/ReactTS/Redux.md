---
sidebar_position: 4
---

# Redux + TS

Redux 也需要声明他独特的 Type， 否则会报错。

引入 `PayloadAction`，传入 `Type`，来保证 reducer 运行正常

## Slice 中的 Reducer Type

创建 Slice 时，Reducer(尤其是 Payload)需要传入特定的类型，以便于 TS 检查。

这样在其他地方使用 Reducer 的时候，TS 才会检查用户传入的参数类型。

```ts title="cartSlice.ts"
// correct-start
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/types";
// correct-end
import { RootState } from "../../store";

type CartType = {
  cart: CartItem[];
};

const initialState: CartType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // highlight-next-line
    addItem(state, action: PayloadAction<CartItem>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    // highlight-next-line
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    // highlight-next-line
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (!item) return;

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
```

## Store 中，RootState 与 Dispatch 类型

```ts title="store.ts"
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

// highlight-start
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// highlight-end
```

## 使用 useState 的地方，传入的 state 类型为 RootState

使用 useState 的时候，也要引入刚刚的类型，设置给 state 参数。

```ts title="Cart.ts"
import { RootState } from "../../store";

import { CartSchema } from "../../types/types";

function Cart() {
  const dispatch = useDispatch();
  // highlight-next-line
  const username = useSelector((state: RootState) => state.user.username);
  const cart = useSelector(getCart);
  ...
}
```
