import {create} from "zustand";
import { User, UserResponse } from "@/lib/types";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
    authUser: UserResponse | null;
    setAuthUser: (user: UserResponse | null) => void;
    logout: () => void;
}


export const useStore = create<Store>()(
    persist(
        (set) => ({
            authUser: null,
            setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
            logout: () => set((state) => ({ ...state, authUser: null })),
        }), {
            name: "auth-user",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

// export default useStore; deprecated method