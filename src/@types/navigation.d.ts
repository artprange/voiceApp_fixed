import React from "react";

export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            groups: undefined;
            new: undefined;
            players:{
                group: string;
            }
        }
    }
}