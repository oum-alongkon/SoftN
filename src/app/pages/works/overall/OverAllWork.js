import React from 'react';
import Div from "@jumbo/shared/Div";
import {
    useMediaQuery
} from "@mui/material";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboOverlay from "@jumbo/components/JumboOverlay";
import { ASSET_IMAGES } from "app/utils/constants/paths";
import { getAssetPath } from "app/utils/appHelpers";
import { Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";

import JumboRqTabs from "@jumbo/components/JumboReactQuery/JumboRqTabs";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import { useTranslation } from "react-i18next";
import { taskService } from "../../../services/task-services";
import moment from 'moment';
import { alpha, Avatar, Checkbox, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ListItemButton from "@mui/material/ListItemButton";
import Timeline from "@mui/lab/Timeline";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

import JumboContent from "@jumbo/components/JumboContent";

const TaskItem = ({ item }) => {
    const [isCompleted, setIsCompleted] = React.useState(item.completed);
    return (
        <ListItemButton
            disableRipple
            sx={{
                transition: 'all 0.2s',

                '&:hover': {
                    boxShadow: `0 3px 10px 0 ${alpha('#000', 0.2)}`,
                    transform: 'translateY(-4px)',

                    '& .MuiTypography-description': {
                        color: 'text.primary',
                    }
                }
            }}
        >
            <ListItemIcon sx={{ minWidth: 48 }}>
                <Checkbox
                    color={'secondary'}
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography
                        className={'MuiTypography-description'}
                        variant={"body1"}
                        fontSize={15}
                        color={'text.secondary'}
                        sx={{ mr: 2 }}
                    >
                        {item.description}
                    </Typography>
                }
            />
            <Div
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pr: 2,
                    whiteSpace: 'nowrap'
                }}
            >
                {
                    item?.tags.map((tag, index) => (
                        <Tooltip title={tag.name} key={index}>
                            <FiberManualRecordIcon fontSize='10px' color={tag.color} />
                        </Tooltip>
                    ))
                }
                <Avatar alt={item.user.name} src={item.user.profilePic} sx={{ ml: 2, width: '28px', height: '28px' }} />
                <Typography variant={"body1"} ml={1.5}>{moment(item.dueDate).format("DD MMMM")}</Typography>
            </Div>
        </ListItemButton>
    );
};

const CityBgCard = () => {
    return (
        <JumboCardQuick
            noWrapper
            bgImage={getAssetPath(`${ASSET_IMAGES}/cities-bg.png`, "680x180")}
            sx={{ height: 125 }}
        >
            <JumboOverlay margin={24} opacity={0} vAlign={"center"} sx={{ color: 'common.white' }}>
                <Stack direction={"row"} spacing={3} justifyContent={"space-around"} alignItems={"center"}>
                    <div className={"Stack-item"}>
                        <Typography variant={"body1"} fontSize={"12px"} mb={.25}>Friday, 28 Sep</Typography>
                        <Typography variant={"h2"} fontSize={"38px"} color={"inherit"} mb={0}>
                            01:15 PM
                        </Typography>
                        <Typography variant={"body1"} fontSize={"12px"}>San Francisco</Typography>
                    </div>
                    <Div className={"Stack-item"} sx={{ display: 'flex' }}>
                        <CloudOutlinedIcon sx={{ fontSize: '80px', mr: 3 }} />
                        <div>
                            <Typography
                                variant={"h2"}
                                fontSize={"38px"}
                                color={"inherit"}
                                mb={.5}
                                sx={{ '& sup': { position: 'relative', fontSize: '60%', top: '-10px' } }}
                            >
                                23<sup>&#x26AC;</sup>
                            </Typography>
                            <Typography variant={"body1"} fontSize={"12px"}>Thunder strom</Typography>
                        </div>
                    </Div>
                </Stack>
            </JumboOverlay>
        </JumboCardQuick>
    );
};

const TasksList = ({ scrollHeight }) => {
    const { t } = useTranslation();

    const renderTasksItem = React.useCallback((taskItem) => {
        return <TaskItem item={taskItem} />
    }, []);

    const [queryOptions, setQueryOptions] = React.useState({
        queryKey: "tasks",
        queryParams: { myTask: { id: 1, name: 'All Tasks', userId: 100 } },
        dataKey: "tasks"
    });

    const handleCategory = React.useCallback((myTask) => {
        setQueryOptions(state => ({ ...state, queryParams: { myTask: myTask } }))
    }, []);

    return (
        <JumboCardQuick
            title={
                <Typography
                    component={"div"}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant={"h4"} mb={0}>
                        {t("widgets.title.taskList")}
                    </Typography>
                    <JumboRqTabs
                        service={taskService.getTaskCategories}
                        queryOptions={{
                            queryKey: "task-categories",
                            dataKey: "taskCategories",
                        }}
                        map={{ label: 'name' }}
                        primaryKey={"id"}
                        onChange={handleCategory}
                        sx={{
                            flex: 1,
                            justifyContent: 'center'
                        }}
                    />
                </Typography>}
            action={
                // <JumboDdMenu
                //     menuItems={[
                //         { id: 1, title: 'More Detail', slug: 'more-detail' },
                //         { id: 2, title: 'Close', slug: 'close' }
                //     ]}
                // />
                <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            }
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',

                '& .MuiCardHeader-action': {
                    my: -.75
                }
            }}
            wrapperSx={{ p: 0 }}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 408}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <JumboRqList
                    queryOptions={queryOptions}
                    primaryKey={"id"}
                    service={taskService.getTasks}
                    renderItem={renderTasksItem}
                    componentElement={"div"}
                />
            </JumboScrollbar>
        </JumboCardQuick>
    );
};


const ScheduleItem = ({ item }) => {
    return (
        <TimelineItem
            sx={{
                '&::before': {
                    display: 'none'
                }
            }}
        >
            <TimelineSeparator>
                <TimelineDot sx={{
                    m: theme => theme.spacing(.5, 0),
                    bgcolor: item.color,
                    width: 20,
                    height: 20,
                    boxShadow: '0 0 0 4px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
                }}
                >
                    {item.icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    p: theme => theme.spacing(.5, 0),
                    ml: 2.5,
                }}
            >
                {
                    item.title &&
                    <Typography variant={"h6"} color={"text.primary"}
                        lineHeight={1.5}>{item.title}</Typography>
                }
                {
                    item.subTitle &&
                    <Typography variant={"body1"} color={"text.secondary"} fontSize={12}
                        mb={2}>{item.subTitle}</Typography>
                }
            </TimelineContent>
        </TimelineItem>
    )
};


const scheduleData = [
    {
        id: 1,
        title: "After effect learning",
        subTitle: "10:00 AM to 11:00 AM",
        color: "#7352C7"
    },
    {
        id: 2,
        title: "Meeting with react development team",
        subTitle: "1:00 PM to 1:30 PM",
        color: "#E44A77"
    },
    {
        id: 3,
        title: "Wireframe design for jumbo template",
        subTitle: "10:00 AM to 2:30 PM",
        color: "#3BD2A2"
    },
    {
        id: 2,
        title: "Meeting with react development team",
        subTitle: "1:00 PM to 1:30 PM",
        color: "#E44A77"
    },
    {
        id: 3,
        title: "Wireframe design for jumbo template",
        subTitle: "10:00 AM to 2:30 PM",
        color: "#3BD2A2"
    },
    {
        id: 2,
        title: "Meeting with react development team",
        subTitle: "1:00 PM to 1:30 PM",
        color: "#E44A77"
    },
    {
        id: 3,
        title: "Wireframe design for jumbo template",
        subTitle: "10:00 AM to 2:30 PM",
        color: "#3BD2A2"
    },
];


const ScheduleList = () => {
    return (
        <React.Fragment>
            <Typography variant={"h5"} color={"text.secondary"} mb={2}>Today's schedule</Typography>
            <Timeline sx={{
                m: 0,
                p: 0,
            }}>
                {
                    scheduleData.map((schedule, index) => (
                        <ScheduleItem item={schedule} key={index} />
                    ))
                }
            </Timeline>
        </React.Fragment>
    );
};






const ScheduleCard = () => {
    return (
        <JumboCardQuick noWrapper>
            <JumboContent
                bgColor={["#843CF6", "#38B8F2"]}
                action={
                    <JumboDdMenu
                        menuItems={[
                            { title: "Setup a call" },
                            { title: "Schedule a task" }
                        ]}
                    />
                }
                sx={{ height: 260, color: "common.white" }}
            >
                <Stack alignItems={"center"} mt={-2}>
                    <Avatar
                        sx={{
                            bgcolor: 'common.white',
                            height: 90,
                            width: 90,
                            fontSize: 28,
                            color: '#475259',
                            boxShadow: 2,
                            mb: 2
                        }}
                    >28</Avatar>
                    <Typography variant={"h4"} color={"common.white"}>Monday</Typography>
                    <Typography variant={"body1"} mb={1}>December 2021</Typography>
                </Stack>
            </JumboContent>
            <JumboContent sx={{ p: 3 }}>
                <ScheduleList />
            </JumboContent>
        </JumboCardQuick>
    );
};


const OverAllWork = () => {
    const { theme } = useJumboTheme();
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Grid container spacing={3.5}>
            <Grid item xs={12}>
                <CityBgCard />
            </Grid>

            <Grid item xs={12} lg={9}>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TasksList />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TasksList />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
                <ScheduleCard />
            </Grid>
            {/* <Grid item xs={12} lg={3}>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} sm={6} lg={12}>
                        <UserOrders />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={12}>
                        <UserSummary />
                    </Grid>
                </Grid>
            </Grid> */}



            {/* <Grid item xs={12} sm={6} lg={9}>
                <Grid item xs={12} sm={6} lg={6}>
                    <TasksList />
                </Grid>

            </Grid> */}

            {/* <Grid item xs={12} sm={6} lg={3}>
                <ScheduleCard />
            </Grid> */}
        </Grid>
    );
};

export default OverAllWork;
