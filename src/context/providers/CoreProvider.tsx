import { CoreContext } from "../CoreContex";
import { ReactNode } from "react";
import { DEFCORE } from "../constants/DefaultCore";

export default function CoreProvider({ children }: { children: ReactNode }) {
	return <CoreContext.Provider value={DEFCORE}>
        {children}
    </CoreContext.Provider>;
}
