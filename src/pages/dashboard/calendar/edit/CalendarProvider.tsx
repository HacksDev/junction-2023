import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';

interface CalendarState {
    medications: string[];
    doses: string[];
    dates: string[];
}

type CalendarAction =
    | { type: 'ADD_MEDICATION'; payload: string }
    | { type: 'ADD_DOSE'; payload: string }
    | { type: 'ADD_DATE'; payload: string };

const CalendarContext = createContext<{
    state: CalendarState;
    dispatch: React.Dispatch<CalendarAction>;
} | undefined>(undefined);

const initialState: CalendarState = {
    medications: [],
    doses: [],
    dates: [],
};

const calendarReducer = (state: CalendarState, action: CalendarAction): CalendarState => {
    switch (action.type) {
        case 'ADD_MEDICATION':
            return {
                ...state,
                medications: [...state.medications, action.payload],
            };
        case 'ADD_DOSE':
            return {
                ...state,
                doses: [...state.doses, action.payload],
            };
        case 'ADD_DATE':
            return {
                ...state,
                dates: [...state.dates, action.payload],
            };
        default:
            return state;
    }
};

// @ts-ignore
export const CalendarProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(calendarReducer, initialState);

    useEffect(() => {
        localStorage.setItem('calendarData', JSON.stringify(state));
    }, [state]);

    return (
        <CalendarContext.Provider value={{ state, dispatch }}>
            {children}
        </CalendarContext.Provider>
    );
};

export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }
    return context;
};



