import { Event } from "@/types/interfaces";

export const deserializeEventString = (eventStr: string): Event => {
    const parsedEvent = JSON.parse(eventStr as string) as Event;
    const event = {
        ...parsedEvent,
        endDate: new Date(parsedEvent.endDate),
        creationDate: new Date(parsedEvent.creationDate),
        lastModifiedDate: new Date(parsedEvent.lastModifiedDate),
    }
    return event;
}

export const computeRemainingDays = (event: Event): number => {
    const countdownDuration = event.endDate.getTime() - new Date().getTime()
    const remainingDays = countdownDuration > 0 ? Math.floor(countdownDuration / (1000 * 60 * 60 * 24)) + 1 : 0;
    return remainingDays;
}