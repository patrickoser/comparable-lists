import React from "react";
import Lists from "./Lists"

// Holds each users lists and settings.

const Profile = () => {

    return (
        <div>
            <main>
                <h2 className="text-center">Profile</h2>
                <Lists />
            </main>
        </div>
    )
}

export default Profile