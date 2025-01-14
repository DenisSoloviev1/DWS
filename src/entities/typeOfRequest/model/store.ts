import { create } from "zustand";
import { IOptionStruct } from "@/shared/types";

interface IStore {
  filter: IOptionStruct;
  setFilter: (filterValue: IOptionStruct) => void;
  clearFilter: () => void;
}

type InitStore = Pick<IStore, "filter">;

const initStore: InitStore = {
  filter: {
    name: "",
    id: 0,
  },
};

export const useTypesStore = create<IStore>((set) => ({
  ...initStore,

  setFilter: (filter: IOptionStruct) => set(() => ({ filter: filter })),
  clearFilter: () => set(() => ({ filter: { id: 0, name: "" } })),
}));
