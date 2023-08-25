import React from 'react';
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import useChatApp from "app/pages/chat/hooks/useChatApp";
import ConversationItem from "app/pages/chat/components/ConversationItem";
import {chatService} from "app/services/chat-services";

const FavoriteConversationsList = () => {
    const {favoriteConversationsListRef} = useChatApp();

    const renderFavoriteContact = React.useCallback((contact) => {
        return (
            <ConversationItem conversationItem={contact}/>
        );
    });
    return (
        <React.Fragment>
            <Div
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    p: theme => theme.spacing(1.5, 2),
                    bgcolor: theme => theme.palette.action.hover,
                }}
            >
                <Typography
                    sx={{letterSpacing: 1.5, textTransform: 'uppercase'}}
                    variant="h6"
                    color="text.secondary"
                    mb={0}
                >
                    <small>Favorites</small>
                </Typography>
            </Div>
            <JumboRqList
                ref={favoriteConversationsListRef}
                service={chatService.getFavoriteConversations}
                primaryKey={'id'}
                queryOptions={{
                    queryKey: 'favorite-conversations-list',
                    dataKey: 'conversations'
                }}
                renderItem={renderFavoriteContact}
                componentElement={"div"}
            />
        </React.Fragment>
    );
};

export default FavoriteConversationsList;
