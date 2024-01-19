import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>반드시 판돈 올려야지~~~</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>다른 시너지 하기.</button>
            ) : (
                <button onClick={onClickLogin}>heartsteel 하러 가기!</button>
            )}
        </div>
    );
}

export default Toolbar;