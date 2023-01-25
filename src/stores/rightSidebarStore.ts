import { create } from "zustand";

const MIN_WIDTH_IN_PX = 280;
const DEFAULT_WIDTH_IN_PX = 450;
const MAX_WIDTH_IN_PX = 500;

interface ISidebarWidth {
    sidebarWidth: number;
    changeSidebarWidth: (newWidth: number) => void;
    openSidebar: () => void;
    closeSidebar: () => void;
    computed: any;
}
export const useRightSidebarStore = create<ISidebarWidth>((set, get) => ({
    sidebarWidth: 0,
    changeSidebarWidth: (newWidth: number) => {
        set(() => {
            return { sidebarWidth: newWidth };
        });
    },
    openSidebar: () => {
        set(() => ({
            sidebarWidth: DEFAULT_WIDTH_IN_PX,
        }));
    },
    closeSidebar: () => {
        set(() => ({
            sidebarWidth: 0,
        }));
    },
    computed: {
        get isShowing() {
            return get().sidebarWidth > 0;
        },
    },
}));
