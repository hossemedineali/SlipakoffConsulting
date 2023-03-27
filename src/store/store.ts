import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))


interface Menu{
    menuIsOpen:boolean,
    toggleMenu:()=>void
}


export const useMenu=create<Menu>()((set)=>({
    menuIsOpen:false,
    toggleMenu:()=>set((state)=>({menuIsOpen:!state.menuIsOpen}))
}))


interface Scroll{
  target:string,
  setTarget:(x:string)=>void
}

export const useScroll=create<Scroll>()((set)=>({
  target:'',
  setTarget:(x)=>set(()=>({target:x}))
}))

interface IsLoading{
  isLoading:boolean,
  setIsLoading:(x:boolean)=>void
}

export const useIsLoading=create<IsLoading>()((set)=>({
  isLoading:true,
  setIsLoading:(x)=>set(()=>({isLoading:x}))
}))



interface Hovered {
  isHovered:boolean,
  hoveredIndex:number,
  setIsHovered:(x:boolean)=>void,
  setHoveredIndex:(x:number)=>void
}

export const useSphereHovered=create<Hovered>()(
  (set)=>({
    isHovered:false,
    hoveredIndex:-1,
    setIsHovered:(x)=>set({isHovered:x}),
    setHoveredIndex:(x)=>set({hoveredIndex:x})
  })
)