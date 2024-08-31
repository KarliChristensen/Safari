"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + ' - Shangamera - Luxury Safari';
    }, []);
};

export default SEO;
