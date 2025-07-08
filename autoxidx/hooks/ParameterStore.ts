import { create } from "zustand"

type State = {
    pageSize : number
    pageNumber : number
    pageCount : number
    searchTerm : string
    searchVal : string
}

type Actions = {
    setParams : (params : Partial<State>) => void
    reset : ()=>void
    setSearchVal : (val : string) => void
}

const initialState : State = {
    pageSize : 12,
    pageNumber : 1,
    pageCount : 1,
    searchTerm : '',
    searchVal : ''
}

export const useParamsStore = create<State & Actions>()((set)=>({
    ...initialState,
    setParams: (newParams : Partial<State>) =>{
        set((state)=>{
            if(newParams.pageNumber){
                return{...state , pageNumber:newParams.pageNumber}
            }
            else{
                return{...state , ...newParams , pageNumber:1}
            }
        })
    },
    reset : ()=> set(initialState)
    ,
    setSearchVal : (val : string) => {
        set({searchVal : val})
    }
}))