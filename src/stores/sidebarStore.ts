import { create } from "zustand";

export const MIN_WIDTH_IN_PX = 280;
export const DEFAULT_WIDTH_IN_PX = 300;
export const MAX_WIDTH_IN_PX = 500;

interface ISidebarWidth {
    sidebarWidth: number;
    changeSidebarWidth: (newWidth: number) => void;
    openSidebar: () => void;
    closeSidebar: () => void;
    computed: any;
}
export const useSidebarStore = create<ISidebarWidth>((set, get) => ({
    sidebarWidth: DEFAULT_WIDTH_IN_PX,
    changeSidebarWidth: (newWidth: number) => {
        set(() => {
            let width = Math.min(
                Math.max(MIN_WIDTH_IN_PX, newWidth),
                MAX_WIDTH_IN_PX
            );
            return { sidebarWidth: width };
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
