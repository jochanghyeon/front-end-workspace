import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import subscribeSlice from "./subscribeSlice";
import commentSlice from "./commentSlice";
import { queryClinet, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// 리덕스 스토어 : 모든 상태를 관리하는 중앙 저장소

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemProvider></ThemProvider>
    </Provider>
  </QueryClientProvider>
);

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    subscribe: subscribeSlice.reducer,
    comment: commentSlice.reducer,
  },
});

export default store;
