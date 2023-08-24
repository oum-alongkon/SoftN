import React, { Suspense, useEffect, useState } from 'react';
import Stack from "@mui/material/Stack";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import AuthUserDropdown from "../../../../shared/widgets/AuthUserDropdown";
import NotificationsDropdown from "../../../../shared/NotificationsDropdown";
import MessagesDropdown from "../../../../shared/MessagesDropdown";
import SearchGlobal from "../../../../shared/SearchGlobal";
import { IconButton, Slide, useMediaQuery } from "@mui/material";
import Div from "@jumbo/shared/Div";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import JumboIconButton from "@jumbo/components/JumboIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Logo from "../../../../shared/Logo";
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from "@jumbo/utils/constants";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -4,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

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

const HeaderHome = () => {
    const { sidebarOptions, setSidebarOptions } = useJumboLayoutSidebar();
    const [dropdownSearchVisibility, setDropdownSearchVisibility] = React.useState(false);
    const { headerTheme } = useJumboHeaderTheme();

    const showDropdownSearch = useMediaQuery('(max-width:575px)');
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
        <React.Fragment>
            <Div sx={{
                height: '280px',
                backgroundColor: "#222D45",
                borderRadius: '0 0 200% 200%',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.1)',
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
            </Div>
        </React.Fragment>
    );
};

export default HeaderHome;
