import {useState} from "react";

const useBoolean = (initialState : boolean) => {
    const [control , setControl] = useState(initialState);

    const controlToggle = () => {
        const temp = control ? false : true;
        setControl(temp);
    }

    const controlOn = () => setControl(true);
    const controlOff = () => setControl(false);


    return {
        control,
        controlToggle,
        controlOn,
        controlOff
    }
}

export default useBoolean;