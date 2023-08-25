import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import Typography from "@mui/material/Typography";
import {calendarData} from "app/pages/works/calendar/data";
import CalendarWrapper from "app/pages/works/calendar/CalendarWrapper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {useTranslation} from "react-i18next";
// const CalendarWork = React.lazy(() => import("app/pages/works/calendar/Calendar"));

const {events} = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const CalendarWork = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            {/* <Typography variant={"h1"} mb={3}>{t('pages.title.basicCalendar')}</Typography> */}
            <Card>
                <CardContent>
                    <CalendarWrapper>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            step={60}
                            defaultDate={new Date(currentYear, 3, 1)}
                            style={{height: 600}}
                        />
                    </CalendarWrapper>
                </CardContent>
            </Card>
        </React.Fragment>

    );
};

export default CalendarWork;
