import React, { Suspense, useEffect, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
// import {branches} from "./data";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

// import { motion} from "framer-motion";
import { SwiperSlide } from "swiper/react";

import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedIcon from '@mui/icons-material/Feed';
import HandshakeIcon from '@mui/icons-material/Handshake';
//card
import { Typography } from "@mui/material";
import Div from "@jumbo/shared/Div";
// import {ASSET_IMAGES} from "../../../utils/constants/paths";
// import {getAssetPath} from "../../../utils/appHelpers";
import HeaderHome from 'app/layouts/shared/headersHome/HeaderHome';
//
import Button from "@mui/material/Button";
import JumboCardFeatured from "@jumbo/components/JumboCardFeatured";

//slide
import { Swiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import {
    EffectFade,
    Pagination,
    Autoplay,
    Navigation,
    EffectCards,
} from "swiper";

import "swiper/css";
const Carousel = ({
    spaceBetween = 20,
    slidesPerView = 1,
    onSlideChange = () => { },
    onSwiper,
    children,
    pagination,
    className = "main-caro",
    navigation,
    autoplay,
    effect,
}) => {
    return (
        <div>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                onSlideChange={onSlideChange}
                onSwiper={onSwiper}
                modules={[Pagination, Navigation, Autoplay, EffectFade, EffectCards]}
                pagination={pagination}
                navigation={navigation}
                className={className}
                autoplay={autoplay}
                effect={effect}
            >
                {children}
            </Swiper>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <JumboCardQuick sx={item.sx} >
            <Div sx={{ display: "flex", alignItems: 'center' }}>
                <Div sx={{ flex: '0 0 auto', marginRight: 2 }}>
                    {item.icon}
                </Div>
                <Div sx={{ flex: '1' }}>
                    <Typography color={'common.white'} variant={"h2"} style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 'bold' }}>{item.number}</Typography>
                    <Typography color={'common.white'} variant={"h5"} style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 'bold' }}>{item.label}</Typography>
                </Div>
            </Div>
        </JumboCardQuick>
    );
};

const cardData = [
    {
        "label": "Project",
        "number": "09",
        "sx": {
            background: 'linear-gradient(45deg, #E3658A, #CF4B73)',
            // transition: 'box-shadow 0.3s, transition-delay 3s',
            transitionDelay: '0.05s',
            '&:hover': {
                boxShadow: '0 0 20px rgba(207, 75, 115, 0.1), 0 0 40px rgba(207, 75, 115, 0.3), 0 0 60px rgba(207, 75, 115, 0.1)',
            },
            // ,boxShadow: '0 0 20px rgba(207, 75, 115, 0.1), 0 0 40px rgba(207, 75, 115, 0.6), 0 0 60px rgba(207, 75, 115, 0.1)' 
        },
        "icon": <AssignmentIcon sx={{ width: '46px', height: '46px', color: 'white' }} />

    },
    {
        "label": "Users",
        "number": "11",
        "sx": {
            background: 'linear-gradient(45deg, #66A4D0 , #266F9E)',
            '&:hover': {
                boxShadow: '0 0 20px rgba(38, 111, 158, 0.1), 0 0 40px rgba(38, 111, 158, 0.3), 0 0 60px rgba(38, 111, 158, 0.1)',
            },
            // boxShadow: '0 0 20px rgba(38, 111, 158, 0.1), 0 0 40px rgba(38, 111, 158, 0.6), 0 0 60px rgba(38, 111, 158, 0.1)', 
        },
        "icon": <GroupsIcon sx={{ width: '46px', height: '46px', color: 'white' }} />
    },
    {
        "label": "Articles",
        "number": "03",
        "sx": {
            background: 'linear-gradient(45deg, #FFC53A, #F9A91E)',
            '&:hover': {
                boxShadow: '0 0 20px rgba(249, 169, 30, 0.1), 0 0 40px rgba(249, 169, 30, 0.3), 0 0 60px rgba(249, 169, 30, 0.1)',
            },
            // boxShadow: '0 0 20px rgba(249, 169, 30, 0.1), 0 0 40px rgba(249, 169, 30, 0.6), 0 0 60px rgba(249, 169, 30, 0.1)', 
        },
        "icon": <FeedIcon sx={{ width: '46px', height: '46px', color: 'white' }} />
    },
    {
        "label": "Partner",
        "number": "02",
        "sx": {
            background: 'linear-gradient(45deg, #906BD0, #6f42c1)',
            '&:hover': {
                boxShadow: '0 0 20px rgba(111, 66, 193, 0.1), 0 0 40px rgba(111, 66, 193, 0.3), 0 0 60px rgba(111, 66, 193, 0.1)',
            },
            // boxShadow: '0 0 20px rgba(111, 66, 193, 0.1), 0 0 40px rgba(111, 66, 193, 0.6), 0 0 60px rgba(111, 66, 193, 0.1)', 
        },
        "icon": <HandshakeIcon sx={{ width: '46px', height: '46px', color: 'white' }} />
    }
]

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -4,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const data = [{ ld_image: "landing1.png" },
{ ld_image: "landing2.png" }
]

const branches = [
    {
        title: "Head Office",
        value: "head-office",
        address: "488, blingum road, JP Street, NJ, California",
        phone: "096-941-0849",
        email: "sales@circle-tab.co"
    }
];
const OurOffice1 = () => {
    const { t } = useTranslation();
    const activeBranch = branches[0];
    return (
        // <JumboCardQuick title={t('pages.title.contactUs')} noWrapper></JumboCardQuick>
        <JumboCardQuick title={"Info."} noWrapper>
            <List disablePadding>
                <ListItem alignItems="flex-start" sx={{ p: theme => theme.spacing(1.5, 3) }}>
                    <ListItemIcon sx={{ minWidth: 36, color: 'text.primary' }}>
                        <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary={activeBranch.address} />
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: theme => theme.spacing(1.5, 3) }}>
                    <ListItemIcon sx={{ minWidth: 36, color: 'text.primary' }}>
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={activeBranch.phone} />
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: theme => theme.spacing(1.5, 3) }}>
                    <ListItemIcon sx={{ minWidth: 36, color: 'text.primary' }}>
                        <MailOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={activeBranch.email} />
                </ListItem>
            </List>
            <Stack direction="row" spacing={1} sx={{ p: theme => theme.spacing(3), mb: .625 }}>
                <Fab
                    size="small"
                    aria-label="Twitter"
                    sx={{
                        color: 'common.white',
                        bgcolor: '#2196f3',

                        '&:hover': {
                            bgcolor: '#2196f3'
                        }
                    }}
                >
                    <Twitter />
                </Fab>
                <Fab
                    size="small"
                    aria-label="Facebook"
                    sx={{
                        color: 'common.white',
                        bgcolor: '#3f51b5',

                        '&:hover': {
                            bgcolor: '#3f51b5'
                        }
                    }}
                >
                    <Facebook />
                </Fab>
                <Fab
                    size="small"
                    aria-label="Instagram"
                    sx={{
                        color: 'common.white',
                        bgcolor: '#e91e63',

                        '&:hover': {
                            bgcolor: '#e91e63'
                        }
                    }}
                >
                    <Instagram />
                </Fab>
                {/* <Fab
                    size="small"
                    aria-label="LinkedIn"
                    sx={{
                        color: 'common.white',
                        bgcolor: '#2196f3',

                        '&:hover': {
                            bgcolor: '#2196f3'
                        }
                    }}
                >
                    <LinkedIn />
                </Fab> */}
            </Stack>
        </JumboCardQuick>
    );
};
function TypingEffectTypography({ text, style, delay }) {
    const [visibleText, setVisibleText] = useState('');
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        if (!startTyping) {
            return;
        }

        let currentText = '';
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                currentText += text[currentIndex];
                setVisibleText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [startTyping, text]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <Typography style={style}>
            {visibleText}
        </Typography>
    );
}

const AyurvedaCard = ({ item }) => {
    return (
        <JumboCardFeatured
            showTick
            tickSx={{ bgcolor: 'success.main' }}
            direction={"column"}
            textAlign={"center"}
            imgSrc={item.image}
            sx={{ width: '300px' }}
        >
            <Typography variant={"h4"} mb={2}>{item.name}</Typography>
            <Typography mb={3} height={60}>{item.description}</Typography>
            <Button variant={"contained"}>Learn More</Button>
        </JumboCardFeatured>
    );
};

const productCard = [{
    name: "19Sleep",
    description: `Manage your Receiver with Platfrom 19Sleep it will help your Business easy\nwith scrapt your receiver from chat`,
    image: `${process.env.REACT_APP_IMAGES_PATH}/landing/landing1.png`
}]

const Home = () => {
    const [headerMenu, setHeaderMenu] = useState([
        { id: 1, name: "Home", isActive: true },
        { id: 2, name: "About", isActive: false },
        { id: 2, name: "Articles", isActive: false },
        { id: 2, name: "Product", isActive: false },
        { id: 2, name: "Contact US", isActive: false },
    ]);

    const handleClickMenu = (index) => {
        const updatedMenu = headerMenu.map((item, i) =>
            i === index ? { ...item, isActive: true } : { ...item, isActive: false }
        );
        setHeaderMenu(updatedMenu);
    };

    const rotatingImageStyle = {
        width: '60px',
        marginTop: '10px',
        marginLeft: '20px',
        animation: 'rotation 4s infinite linear',
    };
    return (
        <Div style={{ height: '100%' }}>
            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;500&display=swap" rel="stylesheet" />
            <HeaderHome/>
            {/* <Div sx={{
                height: '280px',
                backgroundColor: "#222D45",
                borderRadius: '0 0 200% 200%',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.1)'
            }}>

                <Div sx={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                    <img
                        alt={"Task Icon"}
                        src={`${process.env.REACT_APP_IMAGES_PATH}/logos/logo_cct.png`}
                        style={rotatingImageStyle}
                    />
                    <style>
                        {`
          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
                    </style>
                    {headerMenu.map((item, index) => (
                        <Typography
                            key={item.id}
                            variant="subtitle1"
                            color="white"
                            onClick={() => { handleClickMenu(index) }}
                            sx={{
                                fontFamily: 'Prompt, sans-serif',
                                marginLeft: index == 0 ? "20px" : "0px",
                                position: 'relative',
                                p: 3,
                                pt: 1,
                                pb: (theme) => `calc(${theme.spacing(1)} + 3px)`,
                                cursor: 'pointer',
                                border: `4px solid ${item.isActive ? 'white' : '#222D45'}`,
                                // transition: 'border-color 0.5s, transition-delay 0.05s',
                                transitionDelay: '0.05s',
                                // '&:hover': {
                                //     borderColor: 'white',
                                // },
                            }}
                        >
                            {item.name}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    ))}
                </Div>
                <Div>
                    <TypingEffectTypography
                        text="พัฒนา เรียนรู้ เปลี่ยนแปลง"
                        style={{
                            textAlign: 'center',
                            fontSize: '70px',
                            fontFamily: 'Prompt, sans-serif',
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                        delay={0}
                    />
                    <TypingEffectTypography
                        text="เพื่อก้าวไปสู่อนาคต"
                        style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            fontFamily: 'Prompt, sans-serif',
                            fontWeight: 'bold',
                            color: '#F9A91E',
                        }}
                        delay={3000}
                    />
                </Div>
            </Div> */}
            <br />
            <Div sx={{ padding: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>

                        <JumboCardQuick noWrapper>
                            <Suspense >
                                <Carousel
                                    pagination={true}
                                    navigation={false}
                                    className="main-caro"
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    {data.map((item) => (
                                        <SwiperSlide>
                                            <div
                                                className="single-slide bg-no-repeat bg-cover bg-center rounded-md"
                                                style={{
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundImage: `url(${process.env.REACT_APP_IMAGES_PATH}/landing/${item.ld_image})`,
                                                    // paddingBottom: '19.0476%', // 6/21 * 100 (to maintain 21:6 aspect ratio)
                                                    height: '504px',
                                                }}
                                            ></div>
                                        </SwiperSlide>
                                    ))}
                                </Carousel>
                            </Suspense>
                        </JumboCardQuick>
                    </Grid>
                    <Grid item xs={2}>
                        {cardData.map((item) => (
                            <>
                                <Card item={item} /><br />
                            </>
                        ))}
                        {/* <Card /> <br /> <Card /> <br /> <Card /> */}
                    </Grid>
                </Grid>
            </Div>
            <Div sx={{
                background: 'linear-gradient(45deg, #0C75E5 , #CF4B73)',
                padding: '20px',
            }}>
                <Div sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontFamily: 'Prompt, sans-serif',
                        fontWeight: 'bold',
                        color: 'white',
                    }}>{`PRODUCT`}</Typography>
                </Div>
                <Div >
                    {productCard.map((item, index) => (
                        <AyurvedaCard item={item} />
                    ))}
                </Div>
            </Div>
            <br />
            <Div sx={{ padding: '20px' }}>
                <OurOffice1 />
            </Div>
            <br />
        </Div >
    );
};

export default Home;