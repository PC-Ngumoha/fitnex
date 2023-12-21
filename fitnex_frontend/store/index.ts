import {create} from "zustand";
import { User } from "@/lib/types";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
    authUser: User | null;
    setAuthUser: (user: User | null) => void;
}


export const useStore = create<Store>()(
    persist(
        (set) => ({
            authUser: null,
            setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
        }), {
            name: "auth-user",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

// export default useStore; deprecated method