import React from "react";
import Notification from "./notification";

const reservedNotifications =[
    {
        id : 1,
        message: "똑똑. 누구세요?",
    },
    
    {
        id : 2,
        message: "사랑해요 ~~♪",
    },

    {
        id : 3,
        message: "쾅!",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            notifications: [],
        };
    }

    componentDidMount()
    {
        const { notifications } = this.state;
        timer = setInterval(()=> {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications : notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);    
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render()
    {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                    <Notification 
                        key = {notification.id}
                        id = {notification.id}
                        message ={notification.message}/>
                    );
                })}
            </div>
        );
    }
}


export default NotificationList;