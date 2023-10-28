import { useEffect, useState } from "react"
import data from "../database/data"
import { useDispatch } from "react-redux"

import * as Action from '../reducer/questions_reducer'


// Fetch question hook to fetch data from API and set the value to store
export const useFetchQuestion = () => {

    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ 
        isLoading: false, 
        apiData: [], 
        serverError: null
    })

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading: true}));

        (async () => {
            
            try {
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading: false}));
                    setGetData(prev => ({...prev, apiData: question}));

                    dispatch(Action.startExamAction(question))
                }else {
                    throw new Error("No Question")
                }

            } catch (error) {
                setGetData(prev => ({...prev, isLoading: false}));
                setGetData(prev => ({...prev, serverError: error}));
            }

        })();

    }, [dispatch]);

    return [getData, setGetData];
}

// MoveAction Dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

// MoveAction Dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}

