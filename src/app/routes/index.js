import React from "react";
import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
import SocialFeed from "app/pages/social-feed/SocialFeed";
import OverAllWork from "app/pages/works/overall/OverAllWork";
import ChatApp from "app/pages/chat/ChatApp";
const CalendarWork = React.lazy(() => import("app/pages/works/calendar/Calendar"));



/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/landing",
        element: <Page component={Home} layout={"solo-page"} />
    },
    {
        path: "/",
        element: <Page component={SocialFeed} />
    },
    {
        path: [
            "/chats",
            "/chats/:chatBy/:id",
        ],
        element: <Page component={ChatApp} />,
    },
    {
        path: "/works/overall",
        element: <Page component={OverAllWork} />
    },
    {
        path: "/works/calendar",
        element: <Page component={CalendarWork} />

        // element: <CalendarWork/>
    }
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export { routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly };