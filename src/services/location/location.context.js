import { createContext, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);

        locationRequest(keyword)
            .then(locationTransform)
            .then((result) => {
                setLocation(result);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <LocationContext.Provider
            value={{ isLoading, error, location, search: onSearch, keyword }}
        >
            {children}
        </LocationContext.Provider>
    );
};
